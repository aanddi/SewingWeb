import { Body, Controller, Get, HttpCode, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common'
import { EmployerService } from './employer.service'
import { CreateDto } from './dto/create.dto'
import { SortEmloyer } from './dto/sort.dto'

@Controller('employer')
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('create')
  async create(@Body() dto: CreateDto) {
    return this.employerService.create(dto)
  }

  @Get(':id')
  async getEmployerById(@Param('id') id: string) {
    return this.employerService.getEmployerById(+id)
  }

  @Get()
  getAllEmployer() {
    return this.employerService.getAllEmployer()
  }
}
