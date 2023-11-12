import { IsString } from 'class-validator'

export class EducationDto {
  @IsString()
  educationLevel: string
  institutionName: string
  yearEnding: string
  specialization: string
  resumeId: number
}
