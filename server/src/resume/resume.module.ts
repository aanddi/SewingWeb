import { Module } from '@nestjs/common'
import { ResumeService } from './resume.service'
import { ResumeController } from './resume.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [ResumeController],
  providers: [ResumeService, PrismaService]
})
export class ResumeModule {}
