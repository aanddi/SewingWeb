import { Module } from '@nestjs/common'
import { ReviewsService } from './reviews.service'
import { ReviewsController } from './reviews.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService, PrismaService]
})
export class ReviewsModule {}
