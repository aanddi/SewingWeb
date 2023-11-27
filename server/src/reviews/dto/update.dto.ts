import { IsOptional } from 'class-validator'

export class UpdateDto {
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
