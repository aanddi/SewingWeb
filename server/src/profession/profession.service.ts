import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateProfessionDto } from './dto/create-profession.dto'

@Injectable()
export class ProfessionService {
  constructor(private prisma: PrismaService) {}

  async getAllProfession() {
    const professions = await this.prisma.profession.findMany({
      include: {
        _count: {
          // count(*)
          select: {
            vacancy: true
          }
        }
      }
    })
    return professions
  }

  async getSort(sort) {
    if (sort == 'popular') {
      const profession_vacansies = await this.prisma.profession.findMany({
        include: {
          _count: {
            select: {
              vacancy: true
            }
          }
        },
        orderBy: {
          vacancy: {
            _count: 'desc'
          }
        }
      })
      return profession_vacansies
    } else {
      const professions = await this.prisma.profession.findMany({
        include: {
          _count: {
            select: {
              vacancy: true
            }
          }
        },
        orderBy: {
          averageSalary: sort
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

    return profession
  }
}
