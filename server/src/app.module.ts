import { Module } from '@nestjs/common'

import { PrismaService } from './prisma.service'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { EmployerModule } from './employer/employer.module'
import { JobseekerModule } from './jobseeker/jobseeker.module'
import { VacancyModule } from './vacancy/vacancy.module'
import { ResponsesModule } from './responses/responses.module'
import { ReviewsModule } from './reviews/reviews.module'


@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    EmployerModule,
    JobseekerModule,
    VacancyModule,
    ResponsesModule,
    ReviewsModule,
  ],
  providers: [PrismaService]
})
export class AppModule {}
