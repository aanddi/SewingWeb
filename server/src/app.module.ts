import { Module } from '@nestjs/common'
import { ProfessionModule } from './profession/profession.module'
import { PrismaService } from './prisma.service'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { EmployerModule } from './employer/employer.module'
import { ResumeModule } from './resume/resume.module'
import { JobseekerModule } from './jobseeker/jobseeker.module'
import { VacancyModule } from './vacancy/vacancy.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProfessionModule,
    AuthModule,
    EmployerModule,
    JobseekerModule,
    ResumeModule,
    VacancyModule
  ],
  providers: []
})
export class AppModule {}
