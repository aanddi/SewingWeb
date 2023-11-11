import { Module } from '@nestjs/common'
import { ProfessionModule } from './profession/profession.module'
import { PrismaService } from './prisma.service'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { EmployerModule } from './employer/employer.module'
import { VacancyModule } from './vacancy/vacancy.module'
import { ResumeModule } from './resume/resume.module'
import { JobseekerModule } from './jobseeker/jobseeker.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProfessionModule,
    AuthModule,
    EmployerModule,
    VacancyModule,
    JobseekerModule,
    ResumeModule
  ],
  providers: []
})
export class AppModule {}
