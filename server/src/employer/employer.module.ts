import { Module } from '@nestjs/common';
import { EmployerService } from './employer.service';
import { EmployerController } from './employer.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EmployerController],
  providers: [EmployerService, PrismaService],
})
export class EmployerModule {}
