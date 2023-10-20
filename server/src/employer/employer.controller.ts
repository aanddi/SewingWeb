import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe,  } from '@nestjs/common';
import { EmployerService } from './employer.service';
import { CreateDto } from './dto/create.dto';

@Controller('employer')
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('create')
  async create(@Body() dto: CreateDto) {
    return this.employerService.create(dto)
  }
}
