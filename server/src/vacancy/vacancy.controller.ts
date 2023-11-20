import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CreateVacancy } from './dto/create.dto'
import { VacancyService } from './vacancy.service'
@Controller('vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Get('ribbon')
  getRibbon(@Query('page') page: number) {
    return this.vacancyService.getRibbon(page)
  }

  @Get('ribbon/:id')
  getRibbonById(@Param('id') idEmployer: number) {
    return this.vacancyService.getRibbonById(idEmployer)
  }

  @Get('getTarif')
  getTarif() {
    return this.vacancyService.getTarif()
  }

  @Get('getById/:id')
  getById(@Param('id') idVacancy: number) {
    return this.vacancyService.getById(idVacancy)
  }

  @Get('getMyVacancies/:id')
  // @Auth()
  getMyVacancies(@Param('id') idEmployer: number) {
    return this.vacancyService.getMyVacancies(idEmployer)
  }

  @Delete('deleteMyVacancy/:id')
  @Auth()
  deleteMyVacancy(@Param('id') idVacancy: number) {
    return this.vacancyService.deleteMyVacancy(idVacancy)
  }

  @Patch('unpublication/:id')
  // @Auth()
  unpublication(@Param('id') idVacancy: number) {
    return this.vacancyService.unpublication(idVacancy)
  }

  @Post('create')
  @Auth()
  create(@Body() dto: CreateVacancy) {
    return this.vacancyService.create(dto)
  }
}
