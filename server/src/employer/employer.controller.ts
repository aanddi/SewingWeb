import { Body, Controller, Get, HttpCode, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { EmployerDto } from './dto/employer.dto'
import { EmployerService } from './employer.service'

@Controller('employer')
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @Get()
  getAllEmployer() {
    return this.employerService.getAllEmployer()
  }

  @Get('header/:id')
  getHeader(@Param('id') idEmployer: number) {
    return this.employerService.getHeader(idEmployer)
  }

  @Get('search')
  getSearch(@Query('search') search: string, @Query('sort') sort: string) {
    return this.employerService.getSearch(search, sort)
  }

  @Get('suggest')
  getSuggest(@Query('suggest') suggest: string) {
    return this.employerService.getSuggest(suggest)
  }

  @Get(':id') // id employer
  async getEmployerById(@Param('id') id: string) {
    return this.employerService.getEmployerById(+id)
  }

  @Get('getByUserId/:id') // user id
  async getByUserId(@Param('id') id: string) {
    return this.employerService.getByUserId(+id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('create')
  @Auth()
  async create(@Body() dto: EmployerDto) {
    return this.employerService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('update/:id') // id employer
  @Auth()
  async updateEmployer(@Param('id') id: number, @Body() dto: EmployerDto) {
    return this.employerService.updateEmployer(id, dto)
  }

  @Get('getCountVacany/:id') // id employer
  async getCountVacancy(@Param('id') id: string) {
    return this.employerService.getCountVacancy(+id)
  }
}
