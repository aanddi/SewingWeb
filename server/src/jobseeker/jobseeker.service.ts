import { Injectable, BadRequestException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import {
  createInstitutionalInfoDto,
  createWorkExperienceDto
} from './dto/create-jobseeker-info.dto'
import {
  updateInstitutionalInfoDto,
  updateJobseekerDto,
  updateWorkExperienceDto
} from './dto/update-jobseeker-info.dto'

@Injectable()
export class JobseekerService {
  constructor(private prisma: PrismaService) {}

//   async getById(id: string) {
//     const jobseeker = await this.prisma.jobSeeker.findUnique({
//       where: {
//         id: +id
//       },
//       select: {
//         name: true,
//         surname: true,
//         patronymic: true,
//         sex: true,
//         DOB: true,
//         city: true,
//         citizenship: true,
//         languages: true
//       }
//     })

//     return jobseeker
//   }

//   async updateJobSeeker(dto: updateJobseekerDto, id: string) {
//     const user = await this.prisma.jobSeeker.findUnique({
//       where: {
//         id: +id
//       }
//     })

//     if (!user) throw new BadRequestException('Пользователя нет в базе данных!')

//     const jobseeker = await this.prisma.jobSeeker.update({
//       where: {
//         id: +id
//       },
//       data: {
//         name: dto.name,
//         surname: dto.surname,
//         patronymic: dto.patronymic,
//         sex: dto.sex,
//         DOB: dto.DOB,
//         city: dto.city,
//         citizenship: dto.citizenship,
//         languages: dto.citizenship
//       }
//     })

//     await this.prisma.user.update({
//       where: {
//         id: jobseeker.userId
//       },
//       data: {
//         name: dto.name,
//         surname: dto.surname,
//         patronymic: dto.patronymic
//       }
//     })

//     return jobseeker
//   }

//   async createInstitutionalInfo(dto: createInstitutionalInfoDto) {
//     const institutInfo = await this.prisma.institutionalInfo.create({
//       data: {
//         educationLevel: dto.educationLevel,
//         institutionName: dto.institutionName,
//         faculty: dto.faculty,
//         specialization: dto.specialization,
//         jobseekerId: dto.jobseekerId
//       }
//     })

//     return institutInfo
//   }

  // async updateInstitutionalInfo(dto: updateInstitutionalInfoDto, id: string) {
  //     const institutInfo = await this.prisma.institutionalInfo.update({
  //         where: {
  //             id: +id,
  //         },
  //         data: {
  //             educationLevel: dto.educationLevel,
  //             institutionName: dto.institutionName,
  //             faculty: dto.faculty,
  //             specialization: dto.specialization,
  //         }
  //     })

  //     return institutInfo
  // }

//   async createWorkExperience(dto: createWorkExperienceDto) {
//     const workExperience = await this.prisma.workExperience.create({
//       data: {
//         city: dto.city,
//         company: dto.company,
//         post: dto.post,
//         startTime: dto.startTime,
//         endTime: dto.endTime,
//         experience: dto.experience,
//         jobseekerId: dto.jobseekerId
//       }
//     })

//     return workExperience
//   }

  // async updateWorkExperience(dto: updateWorkExperienceDto, id: string) {
  //     const employer = await this.prisma.workExperience.findUnique({
  //         where: {
  //             id: +id,
  //         }
  //     })

  //     if (employer) throw new BadRequestException('У пользователя нет записей об опыте работы!')

  //     const workExperience = await this.prisma.workExperience.update({
  //         where: {
  //             id: +id,
  //         },
  //         data: {
  //             city: dto.city,
  //             company: dto.company,
  //             post: dto.post,
  //             startTime: dto.startTime,
  //             endTime: dto.endTime,
  //             experience: dto.experience,
  //         }
  //     })
  // }
}
