import { IsOptional } from 'class-validator'

export class UpdateResume {
  name: string
  surname: string
  @IsOptional()
  patronymic: string
  profession: string
  salary: number
  gender: string
  DOB: string
  phoneNumber: string
  citizenship: string
  city: string
  @IsOptional()
  email: string
  @IsOptional()
  languages: string
  @IsOptional()
  workTimetable: string
  @IsOptional()
  about: string
}
