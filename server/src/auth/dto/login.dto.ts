import { MinLength, IsString, IsPhoneNumber } from 'class-validator'

export class LoginDto {
  @IsPhoneNumber('RU', { message: 'Телефон должен быть действительным номером телефона' })
  phone: string

  @MinLength(8, {
    message: 'Пароль должен быть не менее 8 символов'
  })
  @IsString({ message: 'Пароль должен быть строкой' })
  password: string
}
