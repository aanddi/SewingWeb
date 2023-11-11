import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UpdateAbout } from './dto/about-about'
import { UpdateResume } from './dto/update-resume.dto'

@Injectable()
export class JobseekerService {
  constructor(private prisma: PrismaService) {}

  async getResume(id: number) {
    const jobseeker = await this.getJobseeker(id)

    const resume = await this.prisma.resume.findUnique({
      where: {
        id: jobseeker.resumeId
      }
    })

    if (!resume) throw new NotFoundException('Резюме не найдено')

    return resume
  }

  async updateResume(id: number, dto: UpdateResume) {
    const jobseeker = await this.getJobseeker(id)

    const newResume = this.prisma.resume.update({
      where: {
        id: jobseeker.resumeId
      },
      data: {
        name: dto.name,
        surname: dto.surname,
        patronymic: dto.patronymic,
        profession: dto.profession,
        salary: +dto.salary,
        gender: dto.gender,
        DOB: dto.DOB,
        phoneNumber: dto.phoneNumber,
        citizenship: dto.citizenship,
        city: dto.city,
        email: dto.email,
        languages: dto.languages,
        workTimetable: dto.workTimetable
      }
    })

    return newResume
  }

  async updateResumeAbout(id: number, dto: UpdateAbout) {
    const jobseeker = await this.getJobseeker(id)
    const update = await this.prisma.resume.update({
      where: {
        id: jobseeker.resumeId
      },
      data: {
        about: dto.about
      }
    })

    return update.about
  }

  private async getJobseeker(id: number | string) {
    const jobseeker = await this.prisma.jobSeeker.findUnique({
      where: {
        userId: +id
      }
    })

    if (!jobseeker) throw new NotFoundException('Пользователь не найден')

    return jobseeker
  }
}
