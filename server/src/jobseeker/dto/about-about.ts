import { IsString } from 'class-validator'

export class UpdateAbout {
  @IsString()
  about: string
}
