import { Body, Controller, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common'
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
  // @Auth()
  async create(@Body() dto: EmployerDto) {
    return this.employerService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('update/:id') // id employer
  // @Auth()
  async updateEmployer(@Param('id') id: number, @Body() dto: EmployerDto) {
    return this.employerService.updateEmployer(id, dto)
  }
}
