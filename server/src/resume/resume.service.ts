import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { createResumeDto } from './dto/create-resume.dto'
import { Profession } from '@prisma/client'

@Injectable()
export class ResumeService {
  constructor(private prisma: PrismaService) {}

//   async create(dto: createResumeDto) {
//     await this.prisma.resume.create({
//       data: {
//         name: dto.name,
//         surname: dto.surname,
//         DOB: dto.DOB,
//         sex: dto.sex,
//         citizenship: dto.citizenship,
//         city: dto.city,
//         phoneNumber: dto.phoneNumber,
//         email: dto.email,
//         salary: dto.salary,
//         workTimetable: dto.workTimetable,
//         skills: dto.skills,
//         languages: dto.languages,
//         about: dto.about,
//         jobseekerId: dto.jobseekerId,
//         professionId: dto.professionId
//       }
//     })
//   }

  // async getAllResumes(jobSeekerId: string) {
  //     const resumes = await this.prisma.resume.findMany({
  //         where: {
  //             jobseekerId: +jobSeekerId
  //         },
  //         select: {
  //             professionId: true,
  //             salary: true,
  //             updatedAt: true,
  //         }
  //     })

  //     return resumes
  // }

//   async getResumeById(id: string) {
//     const resume = await this.prisma.resume.findUnique({
//       where: {
//         id: +id
//       },
//       select: {
//         name: true,
//         surname: true,
//         DOB: true,
//         sex: true,
//         citizenship: true,
//         city: true,
//         phoneNumber: true,
//         email: true,
//         salary: true,
//         workTimetable: true,
//         skills: true,
//         languages: true,
//         about: true,
//         professionId: true
//       }
//     })

//     return resume
//   }

  // async updateResume(id: string) {

  // }

//   async removeResume(id: string) {
//     const resume = await this.prisma.resume.delete({
//       where: {
//         id: +id
//       }
//     })
//   }
}
