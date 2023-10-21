import { Module } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [VacancyController],
  providers: [VacancyService, PrismaService],
})
export class VacancyModule {}
