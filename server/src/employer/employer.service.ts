import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateDto } from './dto/create.dto'
import { Employer } from '@prisma/client'

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
        userId: true,
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

    if(!company) throw new NotFoundException('Компания не найдена')

    return company
  }

  async create(dto: CreateDto) {
    // Проверка на существующую компанию по ИНН
    const checkInn = await this.prisma.employer.findUnique({
      where: {
        inn: dto.inn
      }
    })

     // Проверка на существующую компанию по ИНН
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

  // возвращаемые поля
  private returnEmployerFields(employer: Employer) {
    return {
      id: employer.id,
      name: employer.companyName,
      inn: employer.inn
    }
  }
}
