import { Controller, Get, ValidationPipe, UsePipes, Param, HttpCode, Post, Body, Query } from '@nestjs/common'
import { ProfessionService } from './profession.service'
import { CreateProfessionDto } from './dto/create-profession.dto'
import { Auth } from 'src/auth/decorators/auth.decorators'


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

  @HttpCode(200)
  @Post('create')
  async create(@Body() dto: CreateProfessionDto) {
    return this.professionService.create(dto)
  }
}
