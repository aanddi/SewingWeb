import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateProfessionDto } from './dto/create-profession.dto'

@Injectable()
export class ProfessionService {
  constructor(private prisma: PrismaService) {}

  async getSuggest(suggest: string) {
    const result = await this.prisma.profession.findMany({
      select: {
        name: true
      },
      where: {
        name: {
          contains: suggest,
          mode: 'insensitive'
        }
      }
    })

    return result
  }

  async getAllProfession() {
    const result = await this.prisma.profession.findMany({
      include: {
        _count: {
          select: {
            vacancy: {
              where: {
                status: true
              }
            }
          }
        }
      }
    })

    return result
  }

  async getSort(sort, search: string) {
    const searchQuery = {
      where: {
        name: {
          contains: search
        }
      },
      include: {
        _count: {
          select: {
            vacancy: {
              where: {
                status: true
              }
            }
          }
        }
      }
    }

    let result

    if (sort === 'popular' || sort === undefined) {
      result = await this.prisma.profession.findMany({
        ...searchQuery,
        orderBy: {
          vacancy: {
            _count: 'desc'
          }
        }
      })
    } else {
      result = await this.prisma.profession.findMany({
        ...searchQuery,
        orderBy: {
          averageSalary: sort
        }
      })
    }
    return result
  }
  async create(dto: CreateProfessionDto) {
    const checkProf = await this.prisma.profession.findUnique({
      where: {
        name: dto.name
      }
    })

    if (checkProf) throw new BadRequestException('Такая профессия уже есть')

    const professionItem = await this.prisma.profession.create({
      data: {
        name: dto.name,
        averageSalary: dto.averageSalary,
        desc: dto.desc
      }
    })

    return professionItem
  }
}
