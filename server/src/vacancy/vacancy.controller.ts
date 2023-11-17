import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { VacancyService } from './vacancy.service'
import { CreateVacancy } from './dto/create.dto'

@Controller('vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  // @Get('')
  // getRibbon() {
  //   return this.vacancyService.getRibbon()
  // }

  @Post('create')
  // @Auth()
  create(@Body() dto: CreateVacancy) {
    return this.vacancyService.create(dto)
  }

  @Get('getTarif')
  // @Auth()
  getTarif() {
    return this.vacancyService.getTarif()
  }
}
