import { IsString } from 'class-validator'

export class RefreshTokenDto {
  @IsString({ message: 'Токен должен быть строкой' })
  refreshToken: string
}
