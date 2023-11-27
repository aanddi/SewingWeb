import { IsOptional } from 'class-validator'

export class ReviewsDto {
  employerId: number
  jobseekerId: number
  profession: string
  post: string
  grade: number
  @IsOptional()
  advantages: string
  @IsOptional()
  flaws: string
  @IsOptional()
  comment: string
}
