import { IsNumber, IsString } from 'class-validator'

export class SimilarDto {
  @IsNumber()
  professionId: number
  @IsString()
  city: string
}
