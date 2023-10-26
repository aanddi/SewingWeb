import { IsString, IsIn } from 'class-validator'

export class SortProfession {
  @IsString()
  @IsIn(['asc', 'desc'])
  sort: 'asc' | 'desc';
}