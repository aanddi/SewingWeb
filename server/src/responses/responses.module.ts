import { Module } from '@nestjs/common'
import { ResponsesService } from './responses.service'
import { ResponsesController } from './responses.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [ResponsesController],
  providers: [ResponsesService, PrismaService]
})
export class ResponsesModule {}
