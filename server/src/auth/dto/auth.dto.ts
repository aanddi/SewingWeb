import { IsOptional, IsString, MinLength } from 'class-validator'

export class AuthDto {
  @IsString({ message: 'Имя должно быть строкой' })
  name: string

  @IsString({ message: 'Фамилия должна быть строкой' })
  surname: string

  @IsOptional()
  @IsString({ message: 'Отчество должно быть строкой' })
  patronymic: string

  @IsString()
  phone: string

  @MinLength(6, {
    message: 'Пароль должен быть не менее 6 символов'
  })
  @IsString({ message: 'Пароль должен быть строкой' })
  password: string

  roleId: number
}
