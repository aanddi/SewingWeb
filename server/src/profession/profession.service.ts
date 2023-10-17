import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { Profession } from '@prisma/client'

@Injectable()
export class ProfessionService {
  constructor(private prisma: PrismaService) {}

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

  async getSortBySalary(sort) {
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

  private returnProfessionsFields(profession: Profession) {
    return [{
      name: profession.name,
      averageSalary: profession.averageSalary,
      desc: profession.desc,
    }]
  }
}
