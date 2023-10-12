import { Module } from '@nestjs/common';
import { ProfessionModule } from './profession/profession.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ProfessionModule],
  providers: []
})
export class AppModule {}
