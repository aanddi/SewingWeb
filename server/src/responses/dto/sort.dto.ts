import { IsString, IsIn } from 'class-validator'

export class SortResponses {
  @IsString()
  sort: 'interview' | 'wait' | 'rejected'
}
