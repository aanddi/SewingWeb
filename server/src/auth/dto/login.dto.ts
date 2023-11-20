import { MinLength, IsString, IsPhoneNumber } from 'class-validator'

export class LoginDto {
  @IsPhoneNumber('RU', { message: 'Телефон должен быть действительным номером телефона' })
  phone: string

  @MinLength(6, {
    message: 'Пароль должен быть не менее 6 символов'
  })
  @IsString({ message: 'Пароль должен быть строкой' })
  password: string
}
