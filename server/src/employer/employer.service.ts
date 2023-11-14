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
        id: id
      }
    })

    if (!company) throw new NotFoundException('Компания не найдена')

    return company
  }

  async getByUserId(id: number) {
    const company = await this.prisma.employer.findUnique({
      where: {
        userId: id
      }
    })

    if (!company) throw new NotFoundException('Компания не найдена')

    return company
  }

  async create(dto: EmployerDto) {
    const employer = await this.createEmployer(dto)

    return employer
  }

  async updateEmployer(id: number, dto: EmployerDto) {
    const check = await this.prisma.employer.findUnique({
      where: {
        id: +id
      }
    })

    if (!check) {
      return await this.createEmployer(dto)
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
          about: dto.about,
          size: +dto.size,
          contact: dto.contact,
          adress: dto.adress
        }
      })

      return employer
    }
  }

  // возвращаемые поля
  private returnEmployerFields(employer: Employer) {
    return {
      id: employer.id,
      name: employer.companyName,
      inn: employer.inn
    }
  }

  private async createEmployer(dto: EmployerDto) {
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
}
