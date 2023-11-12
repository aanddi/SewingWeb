import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UpdateAbout } from './dto/about.dto'
import { EducationDto } from './dto/education.dto'
import { UpdateResume } from './dto/update-resume.dto'
import { ExperienceDto } from './dto/experience.dto'

@Injectable()
export class JobseekerService {
  constructor(private prisma: PrismaService) {}

  //======= Resume =================================================

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

  //======= Education =================================================

  async getAllEducationById(id: number) {
    const response = await this.prisma.education.findMany({
      where: {
        resumeId: +id
      },
      orderBy: {
        id: 'asc'
      }
    })
    return response
  }

  async getEducationById(id: number) {
    const itemEducatio = await this.prisma.education.findUnique({
      where: {
        id: +id
      }
    })

    return itemEducatio
  }

  async createEducation(id: number, dto: EducationDto) {
    const createEducation = await this.prisma.education.create({
      data: {
        resumeId: +id,
        educationLevel: dto.educationLevel,
        institutionName: dto.institutionName,
        yearEnding: dto.yearEnding,
        specialization: dto.specialization
      }
    })
    return createEducation
  }

  async updateEducation(id: number, dto: EducationDto) {
    const education = await this.prisma.education.findUnique({
      where: {
        id: +id
      }
    })

    const updateEducation = await this.prisma.education.update({
      where: {
        id: +education.id
      },
      data: {
        resumeId: dto.resumeId,
        educationLevel: dto.educationLevel,
        institutionName: dto.institutionName,
        yearEnding: dto.yearEnding,
        specialization: dto.specialization
      }
    })
  }

  async deleteEducation(id: number) {
    const deleteEducation = await this.prisma.education.delete({
      where: {
        id: +id
      }
    })
  }

  //======= WorkExperience =================================================

  async getAllExperienceById(id: number) {
    const response = await this.prisma.workExperience.findMany({
      where: {
        resumeId: +id
      },
      orderBy: {
        id: 'asc'
      }
    })
    return response
  }

  async getExperienceById(id: number) {
    const itemEducatio = await this.prisma.workExperience.findUnique({
      where: {
        id: +id
      }
    })

    return itemEducatio
  }

  async createExperience(id: number, dto: ExperienceDto) {
    const createEducation = await this.prisma.workExperience.create({
      data: {
        resumeId: +id,
        city: dto.city,
        company: dto.company,
        post: dto.post,
        startTime: dto.startTime,
        untilNow: dto.untilNow,
        endTime: dto.endTime,
        experience: dto.experience
      }
    })
    return createEducation
  }

  async deleteExperience(id: number) {
    const deleteExperience = await this.prisma.workExperience.delete({
      where: {
        id: +id
      }
    })
  }

  async updateExperience(id: number, dto: ExperienceDto) {
    const experience = await this.prisma.workExperience.findUnique({
      where: {
        id: +id
      }
    })

    const updateExperience = await this.prisma.workExperience.update({
      where: {
        id: +experience.id
      },
      data: {
        resumeId: +id,
        city: dto.city,
        company: dto.company,
        post: dto.post,
        startTime: dto.startTime,
        untilNow: dto.untilNow,
        endTime: dto.endTime,
        experience: dto.experience
      }
    })
  }
  //==================================================================

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
