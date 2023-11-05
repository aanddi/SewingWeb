import {
  Body,
  Controller,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'
import { LoginDto } from './dto/login.dto'
import { RefreshTokenDto } from './dto/refresh-token.dto'
import { UpdateUserDto } from './dto/update.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe()) // "прокладка" для валидации dto (class-validator)
  @HttpCode(200) // у post запросов код состояние ответа - 201 и поэтому мы меняем на стандартный 200
  @Post('register')
  async register(@Body() dto: AuthDto) {
    return this.authService.register(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login/access-token')
  async getNewTokens(@Body() dto: RefreshTokenDto) {
    return this.authService.getNewTokens(dto)
  }

  @Put(':id')
  async updateUser(@Param('id') id: number | undefined, @Body() dto: UpdateUserDto) {
    return this.authService.updateUser(dto, id)
  }
}
