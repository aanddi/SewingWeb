import { IsNumber, IsString } from 'class-validator'

export class CreateProfessionDto {
  @IsString()
  name: string

  @IsNumber()
  averageSalary: number

  @IsString()
  desc: string
}