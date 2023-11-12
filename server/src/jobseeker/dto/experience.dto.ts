import { IsString } from 'class-validator'

export class ExperienceDto {
  id: number
  resumeId: number
  @IsString()
  city: string
  company: string
  post: string
  startTime: string
  untilNow?: boolean
  endTime?: string
  experience?: string
}
