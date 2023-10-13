import { Module } from '@nestjs/common'
import { ProfessionModule } from './profession/profession.module'
import { PrismaService } from './prisma.service'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot(), ProfessionModule, AuthModule],
  providers: []
})
export class AppModule {}
