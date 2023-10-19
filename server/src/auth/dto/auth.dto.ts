import { MinLength, IsString, IsPhoneNumber, IsOptional } from 'class-validator'

export class AuthDto {
  @IsString({ message: 'Имя должно быть строкой' })
  name: string

  @IsString({ message: 'Фамилия должна быть строкой' })
  surname: string

  @IsOptional()
  @IsString({ message: 'Отчество должно быть строкой' })
  patronymic: string

  @IsPhoneNumber('RU', { message: 'Телефон должен быть действительным номером телефона' })
  phone: string

  @MinLength(8, {
    message: 'Пароль должен быть не менее 8 символов'
  })
  @IsString({ message: 'Пароль должен быть строкой' })
  password: string

  roleId: number
}
