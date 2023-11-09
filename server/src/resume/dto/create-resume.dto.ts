import { IsDate, IsString } from 'class-validator'

export class createResumeDto {
  @IsString()
  name: string

  @IsString()
  surname: string

  @IsDate()
  DOB: Date

  @IsString()
  sex: string

  @IsString()
  citizenship: string

  @IsString()
  city: string

  @IsString()
  phoneNumber: string

  @IsString()
  email: string

  @IsString()
  salary: string

  @IsString()
  workTimetable: string

  @IsString()
  skills: string

  @IsString()
  languages: string

  @IsString()
  about: string

  jobseekerId: number

  professionId: number
}
