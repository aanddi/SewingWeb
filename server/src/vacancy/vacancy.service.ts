import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ResponsesDto } from '../responses/dto/responses.dto'
import { CreateVacancy } from './dto/create.dto'
import { SimilarDto } from './dto/similar.dto'

@Injectable()
export class VacancyService {
  constructor(private prisma: PrismaService) {}

  // ========== FAVORITE ========================

  async getFavorites(userId: number) {
    const favoriteList = await this.prisma.favorites.findMany({
      where: {
        userId: +userId
      },
      include: {
        vacancy: {
          select: {
            id: true,
            title: true,
            descCard: true,
            maxSalary: true,
            minSalary: true,
            tags: true,
            city: true,
            adress: true,
            phoneNumber: true,
            tarifId: true,
            employer: {
              select: {
                id: true,
                companyName: true
              }
            }
          }
        }
      },
      orderBy: {
        id: 'desc'
      }
    })
    return favoriteList
  }

  async createFavorite(dto: ResponsesDto) {
    const favorite = await this.prisma.favorites.create({
      data: {
        userId: +dto.userId,
        vacancyId: +dto.vacancyId
      }
    })
  }

  async deleteFavorite(idFavorite: number) {
    const favorite = await this.prisma.favorites.delete({
      where: {
        id: +idFavorite
      }
    })
  }

  // =================================================

  async getSuggest(suggest: string, suggestCity: string) {
    const filter: any = {
      status: true,

      title: {
        contains: suggest,
        mode: 'insensitive'
      },

      city: {
        contains: suggestCity,
        mode: 'insensitive'
      }
    }

    const search = await this.prisma.vacancy.findMany({
      where: filter,
      select: {
        title: true,
        city: true
      }
    })

    const titles = new Set()
    const uniqueSearchResults = search.filter(item => {
      if (!titles.has(item.city)) {
        titles.add(item.city)
        return true
      }
      return false
    })

    return uniqueSearchResults
  }

  async getCountFilter(
    education: string,
    experience: string,
    tags: string,
    timetable: string,
    search: string,
    city: string,
    profession: number
  ) {
    const filter: any = {
      status: true
    }

    if (education) filter.education = { in: [education] }
    if (experience) filter.workExperience = { in: [experience] }
    if (timetable) filter.workTimetable = { in: [timetable] }
    if (tags) filter.tags = { in: [tags] }

    if (search) filter.title = { contains: search, mode: 'insensitive' }
    if (city) filter.city = { contains: city, mode: 'insensitive' }
    if (profession) filter.professionId = +profession

    const result = await this.prisma.vacancy.count({
      where: filter
    })

    return result
  }

  // формирование ленты вакансий с пагинацией по странично
  async getRibbon(
    page = 1,
    search: string,
    city: string,
    profession: number,
    education: string,
    experience: string,
    tags: string,
    timetable: string
  ) {
    // проверка на срок годности вакансий
    await this.validateRibbon()

    // колво вакансий на одну подгрузку
    const PAGE_SIZE = 2

    // определяет сколько вакансий надо пропустить
    const skip = (page - 1) * PAGE_SIZE

    //==== filter ============================================

    const filter: any = {
      status: true,

      city: {
        contains: city,
        mode: 'insensitive'
      },

      title: {
        contains: search,
        mode: 'insensitive'
      }
    }

    // добавление фильтра по айди профессии
    if (profession) filter.professionId = +profession

    if (education) filter.education = { in: [education] }

    if (experience) filter.workExperience = { in: [experience] }

    if (timetable) filter.workTimetable = { in: [timetable] }

    if (tags) filter.tags = { in: [tags] }

    // подсчет возвращаемых вакансий юез учетав пагинации
    const countVacanciesReturn = await this.prisma.vacancy.count({
      where: filter
    })
    //================================================

    // Получение списка вакансий со статусом true
    const vacancies = await this.prisma.vacancy.findMany({
      where: filter,
      skip: skip, // сколько пропустить
      take: PAGE_SIZE, // сколько вернуть
      select: {
        id: true,
        title: true,
        descCard: true,
        maxSalary: true,
        minSalary: true,
        tags: true,
        city: true,
        adress: true,
        phoneNumber: true,
        tarifId: true,
        employer: {
          select: {
            id: true,
            companyName: true
          }
        }
      },
      orderBy: {
        tarifId: 'desc'
      }
    })

    const totalVacancies = await this.prisma.vacancy.count({
      where: {
        status: true
      }
    })

    const totalResume = await this.prisma.resume.count()

    // Если вакансий нет, то возвращаем пустой объект
    if (totalVacancies === 0) {
      return {}
    }

    // Расчёт общего кол-ва страниц
    const totalPages = Math.ceil(countVacanciesReturn / PAGE_SIZE)

    return {
      vacancies: vacancies,
      countVacanciesReturn: countVacanciesReturn,
      totalVacancies: totalVacancies,
      totalResume: totalResume,
      totalPages: totalPages
    }
  }

  async getRibbonById(idEmployer: number) {
    await this.validateRibbon()

    const vacancies = await this.prisma.vacancy.findMany({
      where: {
        employerId: +idEmployer,
        status: true
      },
      select: {
        id: true,
        title: true,
        descCard: true,
        maxSalary: true,
        minSalary: true,
        tags: true,
        city: true,
        adress: true,
        tarifId: true,
        employer: {
          select: {
            id: true,
            companyName: true
          }
        }
      },
      orderBy: {
        tarifId: 'desc'
      }
    })

    const totalVacancies = await this.prisma.vacancy.count({
      where: {
        employerId: +idEmployer,
        status: true
      }
    })

    return {
      vacancies: vacancies,
      totalVacancies: totalVacancies
    }
  }

  async getSimilar(dto: SimilarDto) {
    const similarList = await this.prisma.vacancy.findMany({
      where: {
        professionId: dto.professionId,
        status: true
      },
      select: {
        id: true,
        title: true,
        descCard: true,
        maxSalary: true,
        minSalary: true,
        tags: true,
        city: true,
        adress: true,
        phoneNumber: true,
        tarifId: true,
        employer: {
          select: {
            id: true,
            companyName: true
          }
        }
      },
      orderBy: {
        tarifId: 'desc'
      }
    })

    if (similarList.length === 0) {
      const similarList = await this.prisma.vacancy.findMany({
        where: {
          city: dto.city,
          status: true
        },
        select: {
          id: true,
          title: true,
          descCard: true,
          maxSalary: true,
          minSalary: true,
          tags: true,
          city: true,
          adress: true,
          phoneNumber: true,
          tarifId: true,
          employer: {
            select: {
              id: true,
              companyName: true
            }
          }
        },
        orderBy: {
          tarifId: 'desc'
        }
      })
      return similarList
    }
    return similarList
  }

  async getMyVacancies(idEmployer: number) {
    await this.validateRibbon()

    const vacancies = await this.prisma.vacancy.findMany({
      where: {
        employerId: +idEmployer
      },
      select: {
        id: true,
        title: true,
        descCard: true,
        maxSalary: true,
        minSalary: true,
        tags: true,
        city: true,
        adress: true,
        dateStart: true,
        dateEnd: true,
        status: true,
        phoneNumber: true,
        tarifId: true,
        employer: {
          select: {
            id: true,
            companyName: true
          }
        }
      },
      orderBy: {
        id: 'desc'
      }
    })

    return vacancies
  }

  async getById(idVacancy: number) {
    const vacancy = await this.prisma.vacancy.findUnique({
      where: {
        id: +idVacancy
      }
    })

    const companyName = await this.prisma.employer.findUnique({
      where: {
        id: +vacancy.employerId
      },
      select: {
        companyName: true
      }
    })

    return {
      ...vacancy,
      ...companyName
    }
  }

  async deleteMyVacancy(idVacancy: number) {
    if (!idVacancy) throw new NotFoundException('Вакансия не найдена')

    // удаление окликов на вакансию
    await this.prisma.responses.deleteMany({
      where: {
        vacancyId: +idVacancy
      }
    })

    // удаление избранных
    await this.prisma.favorites.deleteMany({
      where: {
        vacancyId: +idVacancy
      }
    })

    const deleteVacancy = await this.prisma.vacancy.delete({
      where: {
        id: +idVacancy
      }
    })
  }

  async unpublication(idVacancy: number) {
    if (!idVacancy) throw new NotFoundException('Вакансия не найдена')
    const unpublication = await this.prisma.vacancy.update({
      where: {
        id: +idVacancy
      },
      data: {
        status: false
      }
    })

    return unpublication
  }

  async create(dto: CreateVacancy) {
    if (!dto.employerId) throw new NotFoundException('Ваше предприятие не найдено. Пройдите регистрацию предприятия.')

    // берем все тарифы
    const tarifs = await this.getTarif()

    // проверяем, если работодатель выбрал платный тариф, то создаем вакансию
    // если выбрал бесплатную (лимит 1 активная вакансия), то мы проверяем наличие активных бесплатных вакансий у работодателя
    // если такие есть, то прокидываем ошибку
    if (tarifs[dto.tarifId].salary !== 0 || !dto.status) {
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

  async updateVacancy(idVacancy: number, dto: CreateVacancy) {
    // проверка на бесплатную вакансию
    const tarifs = await this.getTarif()

    const checkCount = await this.prisma.vacancy.findMany({
      where: {
        employerId: dto.employerId,
        tarifId: dto.tarifId,
        status: true
      }
    })

    if (tarifs[dto.tarifId].salary == 0 && checkCount.length > 0) {
      throw new BadRequestException('Лимит на бесплатное размещение вакансии превышен.')
    } else {
      const vacancy = await this.prisma.vacancy.update({
        where: {
          id: +idVacancy
        },
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
      return vacancy
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

  private async validateRibbon() {
    // текущаю дата
    const currentDate = new Date()

    // Обновление статуса ваканций, у которых дата окончания уже прошла
    await this.prisma.vacancy.updateMany({
      where: {
        dateEnd: {
          lt: currentDate // lt означает "меньше"
        }
      },
      data: {
        status: false
      }
    })
  }

  private async deleteDublicate(array) {
    const uniqueVals = new Map()

    array.forEach(item => {
      const key = `${item.title.toLowerCase()}|${item.city.toLowerCase()}`
      if (!uniqueVals.has(key)) {
        uniqueVals.set(key, item)
      }
    })

    return Array.from(uniqueVals.values())
  }
}
