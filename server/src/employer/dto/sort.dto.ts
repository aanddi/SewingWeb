import { IsString, IsIn } from 'class-validator'

export class SortEmloyer {
  @IsString()
  @IsIn(['asc', 'desc'])
  sort: 'asc' | 'desc'
}
