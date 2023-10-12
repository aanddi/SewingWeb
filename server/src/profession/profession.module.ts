import { Module } from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { ProfessionController } from './profession.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProfessionController],
  providers: [ProfessionService, PrismaService],
})
export class ProfessionModule {}
