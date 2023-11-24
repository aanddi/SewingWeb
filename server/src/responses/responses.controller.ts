import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { ResponsesService } from './responses.service'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { ResponsesDto } from './dto/responses.dto'
import { SortResponses } from './dto/sort.dto'

@Controller('responses')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  @Get('/getByIdUser/:id')
  @Auth()
  async getByIdUser(@Query('show') show: string, @Param('id') idUser: number) {
    return this.responsesService.getByIdUser(idUser, show)
  }

  @Get('/getByIdVacancy/:id')
  // @Auth()
  async getByIdVacancy(@Query('show') show: string, @Param('id') idVacancy: number) {
    return this.responsesService.getByIdVacancy(idVacancy, show)
  }

  @UsePipes(new ValidationPipe())
  @Delete('/delete/:id')
  @Auth()
  async deleteResponses(@Param('id') idResponse: number) {
    return this.responsesService.deleteResponses(idResponse)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('create')
  @Auth()
  async create(@Body() dto: ResponsesDto) {
    return this.responsesService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Patch('updateStatus/:id')
  @Auth()
  async updateStatus(@Param('id') idResponse: number, @Body() dto: ResponsesDto) {
    return this.responsesService.updateStatus(idResponse, dto)
  }
}
