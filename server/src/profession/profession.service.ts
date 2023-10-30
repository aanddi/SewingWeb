import { BadRequestException, Injectable } from '@nestjs/common'
import { Profession, Vacancy } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { CreateProfessionDto } from './dto/create-profession.dto'

@Injectable()
export class ProfessionService {
  constructor(private prisma: PrismaService) {}

  private returnProfessionsFields(profession: Profession) {
    return [
      {
        name: profession.name,
        averageSalary: profession.averageSalary,
        desc: profession.desc
      }
    ]
  }

  async getAllProfession() {
    const professions = await this.prisma.profession.findMany({
      select: {
        name: true,
        averageSalary: true,
        desc: true
      }
    })

    return professions
  }

  async getSort(sort) {
    if (sort == 'popular') {
      const profession_vacansies = await this.prisma.profession.findMany({
        orderBy: {
          vacancy: {
            _count: 'asc'
            }
          },
          select: {
            name: true,
            averageSalary: true,
            desc: true
          }
        })
        return profession_vacansies
    } else {
      const professions = await this.prisma.profession.findMany({
        orderBy: {
          averageSalary: sort
        },
        select: {
          name: true,
          averageSalary: true,
          desc: true
        }
      })
      return professions
    }
  }

  async create(dto: CreateProfessionDto) {
    const checkProf = await this.prisma.profession.findUnique({
      where: {
        name: dto.name
      }
    })

    if (checkProf) throw new BadRequestException('Такая профессия уже есть')

    const profession = await this.prisma.profession.create({
      data: {
        name: dto.name,
        averageSalary: dto.averageSalary,
        desc: dto.desc
      }
    })

    return {
      professions: this.returnProfessionsFields(profession)
    }
  }
}
