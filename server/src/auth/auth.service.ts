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
import { UpdateUserDto } from './dto/update.dto'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService
  ) {}

  //===================================================================

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto)

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
      throw new BadRequestException('Такой пользователь уже зарегистрирована с таким номер')

    // создаем юзера
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        surname: dto.surname,
        patronymic: dto.patronymic,
        phone: dto.phone,
        roleId: +dto.roleId,
        password: await hash(dto.password)
      }
    })

    // создание профиля
    if (user.roleId == 1) this.createJobseeker(user)
    else this.createEmployer(user)

    // генерация новых токенов
    const tokens = await this.issueTokens(user.id)

    return {
      user: this.returnUserFields(user),
      ...tokens
    }
  }

  async updateUser(dto: UpdateUserDto, id: number | undefined) {
    const checkUser = await this.prisma.user.findUnique({
      where: {
        id: +id
      }
    })

    if (dto.phone !== checkUser.phone) {
      const checkPhone = await this.prisma.user.findUnique({
        where: {
          phone: dto.phone
        }
      })

      if (checkPhone)
        throw new BadRequestException(
          'Введенный номер занят. Пожалуйста введите другой номер телефона'
        )
    }

    if (dto.email && dto.email !== checkUser.email) {
      const checkEmail = await this.prisma.user.findUnique({
        where: {
          email: dto.email
        }
      })

      if (checkEmail)
        throw new BadRequestException('Введенная почта занята. Пожалуйста введите другую эл. почту')
    }

    const updatedUser = await this.prisma.user.update({
      where: {
        id: +id
      },
      data: {
        name: dto.name,
        surname: dto.surname,
        patronymic: dto.patronymic,
        phone: dto.phone,
        email: dto.email
      }
    })

    const user = this.prisma.user.findUnique({
      where: {
        id: +id
      },
      select: {
        id: true,
        roleId: true,
        name: true,
        surname: true,
        patronymic: true,
        phone: true,
        email: true
      }
    })

    return user
  }

  async getNewTokens(dto: RefreshTokenDto) {
    // верификация токена (раскрываем токен и забираем id юзера из 2й части токена - payload)
    const result = await this.jwt.verifyAsync(dto.refreshToken)

    // если не прошло, то возвращаем ошибку 401
    if (!result) throw new UnauthorizedException('Неверный refreshtoken')

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

  //===================================================================

  // создание соискателя (jobseeker and resume)
  private async createJobseeker(user: User) {
    // создание резюме
    const createResume = await this.prisma.resume.create({
      data: {
        name: user.name,
        surname: user.surname,
        patronymic: user.patronymic
      }
    })

    // создание Jobseeker (соискателя) и вписываем айди созданного юзера
    const createJobSeeker = await this.prisma.jobSeeker.create({
      data: {
        userId: user.id,
        resumeId: createResume.id
      }
    })

    return {
      ...createJobSeeker,
      ...createResume
    }
  }

  // создание
  private async createEmployer(user: User) {}

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
      roleId: +user.roleId,
      name: user.name,
      surname: user.surname,
      patronymic: user.patronymic,
      phone: user.phone,
      email: user.email
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

    // валидируем пароль (user.password - пароль из бд)
    const isValid = await verify(user.password, dto.password)

    // если юзер не найден, то отдаем ошибку 404
    if (!user) throw new NotFoundException('Пользователь не найден')

    // если пароль не прошел валидацию кидаем ошибку 401
    if (!isValid) throw new UnauthorizedException('Не верный пароль')

    return user
  }
}
