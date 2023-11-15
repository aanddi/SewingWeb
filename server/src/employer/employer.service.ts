import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { Employer } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { EmployerDto } from './dto/employer.dto'

@Injectable()
export class EmployerService {
  constructor(private prisma: PrismaService) {}

  async getAllEmployer() {
    const employers = await this.prisma.employer.findMany({
      select: {
        id: true,
        companyName: true,
        inn: true,
        type: true,
        registrCity: true,
        about: true,
        size: true,
        contact: true,
        adress: true,
        userId: true
      }
    })

    return employers
  }

  async getEmployerById(id: number) {
    const company = await this.prisma.employer.findUnique({
      where: {
        id: +id
      }
    })

    if (!company) throw new NotFoundException('Компания не найдена')

    return company
  }

  async getByUserId(id: number) {
    if (!id) throw new NotFoundException('Вы не зарегистрировали предприятие')
    const company = await this.prisma.employer.findUnique({
      where: {
        userId: +id
      }
    })

    return company
  }

  async create(dto: EmployerDto) {
    // Проверка на существующую компанию по ИНН
    const checkInn = await this.prisma.employer.findUnique({
      where: {
        inn: dto.inn
      }
    })

    // Проверка на существующую компанию по id
    const checkUser = await this.prisma.employer.findUnique({
      where: {
        userId: dto.userId
      }
    })

    // ошибки 400
    if (checkUser) throw new BadRequestException('Вы уже зарегистрировали компанию')
    if (checkInn) throw new BadRequestException('Такая компания уже зарегистрирована с таким ИНН')

    // создаем компанию в бд
    const employer = await this.prisma.employer.create({
      data: {
        companyName: dto.companyName,
        type: dto.type,
        registrCity: dto.registrCity,
        about: dto.about,
        size: +dto.size,
        contact: dto.contact,
        adress: dto.adress,
        inn: dto.inn,
        userId: +dto.userId
      }
    })

    // возвращаемые поля
    return {
      employer: this.returnEmployerFields(employer)
    }
  }

  async updateEmployer(id: number, dto: EmployerDto) {
    if (dto.inn) await this.checkUniqueInn(dto.inn, id)

    if (dto.about) {
      const employer = await this.prisma.employer.update({
        where: {
          id: +id
        },
        data: {
          about: dto.about
        }
      })
      return employer
    } else {
      const employer = await this.prisma.employer.update({
        where: {
          id: +id
        },
        data: {
          companyName: dto.companyName,
          inn: dto.inn,
          type: dto.type,
          registrCity: dto.registrCity,
          size: +dto.size,
          contact: dto.contact,
          adress: dto.adress
        }
      })
      return employer
    }
  }

  async getCountVacancy(id: number) {
    if (!id) throw new NotFoundException('Вы не зарегистрировали предприятие')

    const count = await this.prisma.vacancy.count({
      where: {
        employerId: +id
      }
    })

    return count
  }

  // возвращаемые поля
  private returnEmployerFields(employer: Employer) {
    return {
      id: employer.id,
      name: employer.companyName,
      inn: employer.inn
    }
  }

  private async checkUniqueInn(inn: string, id: number) {
    const checkInnNotOwn = await this.prisma.employer.findFirst({
      where: {
        id: +id
      }
    })
    if (inn !== checkInnNotOwn.inn) {
      const checkINN = await this.prisma.employer.findUnique({
        where: {
          inn: inn
        }
      })

      if (checkINN) throw new BadRequestException('Такая компания уже существует под таким ИНН')
    }
  }
}
