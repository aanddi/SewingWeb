import { IsString, IsIn } from 'class-validator'

export class SortProfession {
  @IsString()
  @IsIn(['asc', 'desc', 'popular'])
  sort: 'asc' | 'desc' | 'popular'
}
