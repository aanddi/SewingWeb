import { IsOptional, IsString } from 'class-validator'

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Имя должно быть строкой' })
  name: string

  @IsOptional()
  @IsString({ message: 'Фамилия должна быть строкой' })
  surname: string

  @IsOptional()
  @IsString({ message: 'Отчество должно быть строкой' })
  patronymic: string

  @IsOptional()
  @IsString({ message: 'Номер должно быть строкой' })
  phone: string

  @IsOptional()
  @IsString({ message: 'Почта должно быть строкой' })
  email: string
}
