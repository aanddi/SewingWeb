import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateVacancy {
  id: number
  employerId: number
  professionId: number
  tarifId: number
  title: string
  @IsOptional()
  minSalary: number
  @IsOptional()
  maxSalary: number
  descCard: string
  descMain: string
  city: string
  adress: string
  skills: string
  workExperience: string
  workTimetable: string
  employmentType: string
  @IsOptional()
  education: string
  @IsOptional()
  tags: string
  fullName: string
  phoneNumber: string
  @IsOptional()
  contact: string
  @IsBoolean()
  status: boolean
  dateStart: string
  dateEnd: string
}
