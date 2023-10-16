import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { AuthDto } from './dto/auth.dto'
import { RefreshTokenDto } from './dto/refresh-token.dto'
import { hash } from 'argon2'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import { verify } from 'argon2'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService
  ) {}

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto)

    // генерация новых токенов
    const tokens = await this.issueTokens(user.id)

    return {
      user: this.returnUserFields(user),
      ...tokens
    }
  }

  async getNewTokens(dto: RefreshTokenDto) {
    // верификация токена (раскрываем токен и забираем id юзера из 2й части токена - payload)
    const result = await this.jwt.verifyAsync(dto.refreshToken)

    // если не прошло, то возвращаем ошибку 401
    if (!result) throw new UnauthorizedException('Неверный refresh token')

    const user = await this.prisma.user.findUnique({
      where: {
        id: result.id
      }
    })

    // генерация новых токенов
    const tokens = await this.issueTokens(user.id)

    return {
      user: this.returnUserFields(user),
      ...tokens
    }
  }

  async register(dto: AuthDto) {
    // Проверка на существующего юзера в бд по телефону
    const checkUser = await this.prisma.user.findUnique({
      where: {
        phone: dto.phone
      }
    })

    // если юзер найден, то отдаем ошибку 400
    if (checkUser)
      throw new BadRequestException('Такой пользователь уже зарегестрирвоан с таким номер')

    // создаем юзера в бд и хешируем пароль в бд
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        surname: dto.surname,
        patronymic: dto.patronymic,
        phone: dto.phone,
        role: dto.role,
        password: await hash(dto.password)
      }
    })

    // генерация новых токенов
    const tokens = await this.issueTokens(user.id)

    return {
      user: this.returnUserFields(user),
      ...tokens
    }
  }

  // генерация токенов
  private async issueTokens(userId: number) {
    const data = { id: userId }

    const accessToken = this.jwt.sign(data, {
      expiresIn: '1h'
    })

    const refreshToken = this.jwt.sign(data, {
      expiresIn: '7d'
    })

    return { accessToken, refreshToken }
  }

  // возвращаемые поля
  private returnUserFields(user: User) {
    return {
      id: user.id,
      phone: user.phone
    }
  }

  // валидация юзера
  private async validateUser(dto: LoginDto) {
    // получили юзера
    const user = await this.prisma.user.findUnique({
      where: {
        phone: dto.phone
      }
    })

    // если юзер не найден, то отдаем ошибку 404
    if (!user) throw new NotFoundException('Пользователь не найден')

    // валидируем пароль (user.password - пароль из бд)
    const isValid = await verify(user.password, dto.password)

    // если пароль не прошел валидацию кидаем ошибку 401
    if (!isValid) throw new UnauthorizedException('Не верный пароль')

    return user
  }
}
