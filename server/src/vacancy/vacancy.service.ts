import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateVacancy } from './dto/create.dto'

@Injectable()
export class VacancyService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateVacancy) {
    // берем все тарифы
    const tarifs = await this.getTarif()

    // проверяем, если работодатель выбрал платный тариф, то создаем вакансию
    // если выбрал бесплатную (лимит 1 активная вакансия), то мы проверяем наличие активных бесплатных вакансий у работодателя
    // если такие есть, то прокидываем ошибку
    if (tarifs[dto.tarifId].salary !== 0) {
      const vacancy = await this.createVacancy(dto)
      return vacancy
    } else {
      const checkCount = await this.prisma.vacancy.findMany({
        where: {
          employerId: dto.employerId,
          tarifId: dto.tarifId,
          status: true
        }
      })

      if (checkCount.length > 0) {
        throw new BadRequestException('Лимит на бесплатное размещение вакансии превышен.')
      } else {
        const vacancy = await this.createVacancy(dto)
        return vacancy
      }
    }
  }

  async getTarif() {
    const tarifs = await this.prisma.vacancyTarif.findMany({
      select: {
        id: true,
        name: true,
        salary: true,
        time: true,
        desc: true
      }
    })
    return tarifs
  }

  private async createVacancy(dto: CreateVacancy) {
    const newVacancy = await this.prisma.vacancy.create({
      data: {
        employerId: dto.employerId,
        title: dto.title,
        minSalary: +dto.minSalary,
        maxSalary: +dto.maxSalary,
        descCard: dto.descCard,
        descMain: dto.descMain,
        city: dto.city,
        adress: dto.adress,
        skills: dto.skills,
        workExperience: dto.workExperience,
        workTimetable: dto.workTimetable,
        employmentType: dto.employmentType,
        education: dto.education,
        tags: dto.tags,
        fullName: dto.fullName,
        phoneNumber: dto.phoneNumber,
        contact: dto.contact,
        status: dto.status,
        dateStart: dto.dateStart,
        dateEnd: dto.dateEnd,
        tarifId: dto.tarifId,
        professionId: +dto.professionId
      }
    })
    return newVacancy
  }
}
