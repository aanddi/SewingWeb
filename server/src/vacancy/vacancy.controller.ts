import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { ResponsesDto } from '../responses/dto/responses.dto'
import { CreateVacancy } from './dto/create.dto'
import { VacancyService } from './vacancy.service'
import { SimilarDto } from './dto/similar.dto'
@Controller('vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Get('suggest')
  getSuggest(@Query('suggest') suggest: string, @Query('suggestCity') suggestCity: string) {
    return this.vacancyService.getSuggest(suggest, suggestCity)
  }

  @Get('countFilter')
  getCountFilter(
    @Query('education') education: string,
    @Query('experience') experience: string,
    @Query('tags') tags: string,
    @Query('timetable') timetable: string,
    @Query('search') search: string,
    @Query('city') city: string,
    @Query('profession') profession: number
  ) {
    return this.vacancyService.getCountFilter(education, experience, tags, timetable, search, city, profession)
  }

  @Get('ribbon')
  getRibbon(
    @Query('page') page: number,
    @Query('search') search: string,
    @Query('city') city: string,
    @Query('profession') profession: number,
    @Query('education') education: string,
    @Query('experience') experience: string,
    @Query('tags') tags: string,
    @Query('timetable') timetable: string
  ) {
    return this.vacancyService.getRibbon(page, search, city, profession, education, experience, tags, timetable)
  }

  @Get('ribbon/:id')
  getRibbonById(@Param('id') idEmployer: number) {
    return this.vacancyService.getRibbonById(idEmployer)
  }

  @Get('similar')
  getSimilar(@Body() dto: SimilarDto) {
    return this.vacancyService.getSimilar(dto)
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
  @Auth()
  unpublication(@Param('id') idVacancy: number) {
    return this.vacancyService.unpublication(idVacancy)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('create')
  @Auth()
  create(@Body() dto: CreateVacancy) {
    return this.vacancyService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('update/:id')
  @Auth()
  async updateVacancy(@Param('id') idVacancy: number, @Body() dto: CreateVacancy) {
    return this.vacancyService.updateVacancy(idVacancy, dto)
  }

  @Get('getFavorites/:id')
  // @Auth()
  async getFavorites(@Param('id') userId: number) {
    return this.vacancyService.getFavorites(userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post('createFavorite')
  async createFavorite(@Body() dto: ResponsesDto) {
    return this.vacancyService.createFavorite(dto)
  }

  @Auth()
  @Delete('deleteFavorite/:id')
  async deleteFavorite(@Param('id') idFavorite: number) {
    return this.vacancyService.deleteFavorite(idFavorite)
  }
}
