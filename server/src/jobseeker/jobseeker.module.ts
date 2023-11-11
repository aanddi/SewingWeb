import { Module } from '@nestjs/common';
import { JobseekerService } from './jobseeker.service';
import { JobseekerController } from './jobseeker.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [JobseekerController],
  providers: [JobseekerService, PrismaService],
})
export class JobseekerModule {}
