import { IsNumber } from 'class-validator'

export class ResponsesDto {
  userId: number | undefined
  vacancyId: number
}
