import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { PrismaService } from 'src/prisma.service';
import { Vacancy } from '@prisma/client';

@Injectable()
export class VacancyService {

  constructor(private prisma: PrismaService) {}
  
  private async returnVacancyInfo(vacancy: Vacancy) {
    const profession = await this.prisma.profession.findUnique({
      where: {
        id: vacancy.professionId
      }
    })

    const employer = await this.prisma.employer.findUnique({
      where: {
        id: vacancy.employerId
      }
    })

    return {
      createdTime: vacancy.createdAt,
      title: vacancy.title,
      salary: vacancy.salary,
      desc: vacancy.desc,
      skills: vacancy.skills,
      address: vacancy.address,
      workExperience: vacancy.workExperience,
      employment: vacancy.employment,
      workTimetable: vacancy.workTimetable,
      education: vacancy.education,
      professionName: profession.name,
      companyName: employer.companyName,
    }
  }

  async create(dto: CreateVacancyDto) {
    const vacancy = await this.prisma.vacancy.create({
      data: {
        title: dto.title,
        salary: dto.salary,
        desc: dto.desc,
        skills: dto.skills,
        address: dto.address,
        workExperience: dto.workExperience,
        employment: dto.employment,
        workTimetable: dto.workTimetable,
        education: dto.education,
        professionId: +dto.professionId,
        employerId: +dto.employerId,
      }
    })

    return this.returnVacancyInfo(vacancy)
  }

  async getById(id: number) {
    const vacancy = await this.prisma.vacancy.findUnique({
      where: {
        id: +id
      }
    })

    if (!vacancy) throw new BadRequestException("Вакансии с id: " + id + " нет в базе данных")

    return this.returnVacancyInfo(vacancy)
  }

  async remove(id: number) {
    const vacancy = this.prisma.vacancy.delete({
      where: {
        id: +id
      }
    })

    return vacancy
  }
}
