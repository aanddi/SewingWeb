import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ResponsesDto } from './dto/responses.dto'
import { SortResponses } from './dto/sort.dto'

@Injectable()
export class ResponsesService {
  constructor(private prisma: PrismaService) {}

  async getByIdUser(idUser: number, show: string) {
    const jobseeker = await this.getJobseeker(idUser)

    let sort: string
    if (show === 'wait') sort = 'На рассмотрении'
    else if (show === 'interview') sort = 'Приглашен на собеседование'
    else if (show === 'rejected') sort = 'Отклонено'

    const responses = await this.prisma.responses.findMany({
      where: {
        jobseekerId: +jobseeker.id,
        status: sort
      },
      include: {
        vacancy: {
          select: {
            id: true,
            title: true,
            descCard: true,
            maxSalary: true,
            minSalary: true,
            tags: true,
            city: true,
            adress: true,
            phoneNumber: true,
            tarifId: true,
            employer: {
              select: {
                id: true,
                companyName: true
              }
            }
          }
        }
      },
      orderBy: {
        id: 'desc'
      }
    })

    return responses
  }

  async getByIdVacancy(idVacancy: number, show: string) {
    let sort: string
    if (show === 'wait') sort = 'На рассмотрении'
    else if (show === 'interview') sort = 'Приглашен на собеседование'
    else if (show === 'rejected') sort = 'Отклонено'

    const responsesList = await this.prisma.responses.findMany({
      where: {
        vacancyId: +idVacancy,
        status: sort
      },
      include: {
        jobseeker: {
          include: {
            resume: {
              select: {
                id: true,
                name: true,
                surname: true,
                patronymic: true,
                profession: true,
                salary: true,
                gender: true,
                DOB: true,
                phoneNumber: true,
                city: true,
                email: true,
                about: true
              }
            }
          }
        }
      },
      orderBy: {
        id: 'desc'
      }
    })

    const countResponses = await this.prisma.responses.count({
      where: {
        vacancyId: +idVacancy,
        status: sort
      }
    })

    return {
      responses: responsesList,
      count: countResponses
    }
  }

  async deleteResponses(idResponse: number) {
    const deleteResponse = await this.prisma.responses.delete({
      where: {
        id: +idResponse
      }
    })
  }

  async create(dto: ResponsesDto) {
    const jobseeker = await this.getJobseeker(dto.userId)

    const checkResponse = await this.prisma.responses.findMany({
      where: {
        vacancyId: +dto.vacancyId,
        jobseekerId: +jobseeker.id
      }
    })

    if (checkResponse.length > 0) throw new NotFoundException('Вы уже откликнулись на это вакансию')

    const response = await this.prisma.responses.create({
      data: {
        vacancyId: +dto.vacancyId,
        jobseekerId: +jobseeker.id,
        status: 'На рассмотрении'
      }
    })
    return response
  }

  async updateStatus(idResponse: number, dto: ResponsesDto) {
    const updateResponse = await this.prisma.responses.update({
      where: {
        id: +idResponse
      },
      data: {
        status: dto.status
      }
    })
  }

  private async getJobseeker(userId: number) {
    const jobseeker = await this.prisma.jobSeeker.findUnique({
      where: {
        userId: +userId
      }
    })
    if (!jobseeker) throw new NotFoundException('Соискатель не найден!')
    return jobseeker
  }
}
