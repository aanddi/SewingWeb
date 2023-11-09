import { IsDate, IsString } from 'class-validator'

export class createInstitutionalInfoDto {
  @IsString()
  educationLevel: string

  @IsString()
  institutionName: string

  @IsString()
  faculty: string

  @IsString()
  specialization: string

  jobseekerId: number
}

export class createWorkExperienceDto {
  @IsString()
  city: string

  @IsString()
  company: string

  @IsString()
  post: string

  @IsDate()
  startTime: Date

  @IsDate()
  endTime: Date

  @IsString()
  experience: string

  jobseekerId: number
}
