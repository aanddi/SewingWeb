import { Controller, Get, Query, ValidationPipe, UsePipes } from '@nestjs/common'
import { ProfessionService } from './profession.service'


@Controller('profession')
export class ProfessionController {
  constructor(private readonly professionService: ProfessionService) {}

  @Get('all')
  getAllProfession() {
    return this.professionService.getAllProfession()
  }

  @UsePipes(new ValidationPipe())
  @Get()
  getSortBySalary(@Query('sort') sort: string) {
    return this.professionService.getSortBySalary(sort)
  }
}
