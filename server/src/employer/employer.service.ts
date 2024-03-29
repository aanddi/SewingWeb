import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { Employer } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { EmployerDto } from './dto/employer.dto'

@Injectable()
export class EmployerService {
  constructor(private prisma: PrismaService) {}

  async getAllEmployer(search: string = '', sort: string = 'maxVacancies') {
    const employers = await this.prisma.employer.findMany({
      where: {
        OR: [
          {
            companyName: {
              contains: search,
              mode: 'insensitive'
            }
          },
          {
            type: {
              contains: search,
              mode: 'insensitive'
            }
          },
          {
            adress: {
              contains: search,
              mode: 'insensitive'
            }
          }
        ]
      },
      select: {
        id: true,
        companyName: true,
        adress: true,
        _count: {
          select: {
            vacansy: {
              // выбираем количество вакансий
              where: {
                status: true
              }
            },
            Reviews: true // выбираем количество отзывов
          }
        },
        Reviews: {
          select: {
            grade: true // выбираем оценки для каждого работодателя
          }
        }
      }
    })

    const types = await this.getCountTypes()

    const companies = employers.map(employer => {
      const averageGrade = this.calculateAverageGrade(employer.Reviews)

      return {
        employer: {
          id: employer.id,
          companyName: employer.companyName,
          adress: employer.adress
        },
        count: {
          countVacancy: employer._count.vacansy,
          countReviews: employer._count.Reviews
        },
        averageGrade: averageGrade
      }
    })

    if (sort === 'maxReviews') {
      const sortedReviews = companies.sort((a, b) => b.count.countReviews - a.count.countReviews)
      return {
        companies: sortedReviews,
        types: types
      }
    } else if (sort === 'maxVacancies') {
      const sortedReviews = companies.sort((a, b) => b.count.countVacancy - a.count.countVacancy)
      return {
        companies: sortedReviews,
        types: types
      }
    }
  }

  async getHeader(idEmployer: number) {
    const companyName = await this.prisma.employer.findUnique({
      where: {
        id: +idEmployer
      },
      select: {
        id: true,
        companyName: true
      }
    })

    const reviewsCount = await this.prisma.reviews.count({
      where: {
        employerId: +idEmployer
      }
    })

    const vacanciesCount = await this.prisma.vacancy.count({
      where: {
        employerId: +idEmployer,
        status: true
      }
    })

    return {
      ...companyName,
      reviewsCount: reviewsCount,
      vacanciesCount: vacanciesCount
    }
  }

  async getSuggest(suggest: string) {
    const result = await this.prisma.employer.findMany({
      select: {
        companyName: true
      },
      where: {
        OR: [
          {
            companyName: {
              contains: suggest,
              mode: 'insensitive'
            }
          },
          {
            type: {
              contains: suggest,
              mode: 'insensitive'
            }
          },
          {
            adress: {
              contains: suggest,
              mode: 'insensitive'
            }
          }
        ]
      }
    })

    return result
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

  private async getCountTypes() {
    const companyTypes = await this.prisma.employer.groupBy({
      by: ['type'],
      _count: true
    })
    return companyTypes
  }

  private calculateAverageGrade(reviews) {
    let totalGrade = 0
    let reviewCount = 0

    if (Array.isArray(reviews)) {
      reviews.forEach(review => {
        totalGrade += review.grade
        reviewCount++
      })
    }

    if (reviewCount === 0) {
      return 0 // Если нет отзывов, то средняя оценка будет 0
    }

    const averageGrade = totalGrade / reviewCount
    return averageGrade.toFixed(1)
  }
}
