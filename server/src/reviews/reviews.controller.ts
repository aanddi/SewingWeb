import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ReviewsService } from './reviews.service'
import { ReviewsDto } from './dto/reviews.dto'
import { UpdateDto } from './dto/update.dto'

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get('byId/:id')
  getById(@Param('id') idEmployer: number) {
    return this.reviewsService.getById(idEmployer)
  }

  @Get('getMy/:id')
  getMy(@Param('id') userId: number) {
    return this.reviewsService.getMy(userId)
  }

  @Post('create')
  create(@Body() dto: ReviewsDto) {
    return this.reviewsService.create(dto)
  }

  @Delete('delete/:id')
  delete(@Param('id') idReviews: number) {
    return this.reviewsService.delete(idReviews)
  }
}
