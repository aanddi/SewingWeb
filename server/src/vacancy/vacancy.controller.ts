import { Controller, Get, Post, Body, Param, Delete, HttpCode } from '@nestjs/common'
import { VacancyService } from './vacancy.service'
import { CreateVacancyDto } from './dto/create-vacancy.dto'

@Controller('vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @HttpCode(200)
  @Post('create')
  async create(@Body() dto: CreateVacancyDto) {
    return this.vacancyService.create(dto)
  }

  @Get(':id')
  async geyVacancyById(@Param('id') id: number) {
    return this.vacancyService.getById(id)
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.vacancyService.remove(id)
  }
}
