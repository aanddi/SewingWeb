import { IsString, IsOptional, MinLength } from 'class-validator'

export class CreateDto {

  @MinLength(12, {
    message: 'ИНН должен состоять из 12 цифр'
  })
  @IsString({ message: 'Название компании должно быть строкой' })
  inn: string

  @IsString({ message: 'Название компании должно быть строкой' })
  companyName: string

  @IsString({ message: 'Тип компании должен быть строкой' })
  type: string

  @IsOptional()
  @IsString({ message: 'Город компании должен быть строкой' })
  registrCity: string

  @IsOptional()
  @IsString({ message: 'Описание компании должно быть строкой' })
  about: string

  size: number

  @IsString({ message: 'Контакты компании должны быть строкой' })
  contact: string

  @IsOptional()
  @IsString({ message: 'Адресс компании должен быть строкой' })
  adress: string

  userId: number


}
