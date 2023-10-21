import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { Profession } from '@prisma/client'
import { CreateProfessionDto } from './dto/create-profession.dto'
import { dot } from 'node:test/reporters'

@Injectable()
export class ProfessionService {
  constructor(private prisma: PrismaService) { }

  private returnProfessionsFields(profession: Profession) {
    return [{
      name: profession.name,
      averageSalary: profession.averageSalary,
      desc: profession.desc,
    }]
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

  async create(dto: CreateProfessionDto) {
    const checkProf = await this.prisma.profession.findUnique({
      where: {
        name: dto.name
      }
    })

    if (checkProf) throw new BadRequestException("Такая профессия уже есть")

    const profession = await this.prisma.profession.create({
      data: {
        name: dto.name,
        averageSalary: dto.averageSalary,
        desc: dto.desc,
      }
    })

    return {
      professions: this.returnProfessionsFields(profession)
    }
  }
} 
