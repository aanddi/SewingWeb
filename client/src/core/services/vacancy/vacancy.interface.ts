import { IVacancy } from '@/core/types/vacancy.interface'

// лента и мои вакансии
export interface IVacancyResponse extends IVacancy {
  companyName: string
}

// лента
export interface IRibbonResponse {
  vacancies: IVacancyCard[]
  totalVacancies: number
  totalResume: number
  totalPages: number
}

export interface IVacancyCard {
  id: number
  title: string
  descCard: string
  maxSalary: number
  minSalary: number
  tags: string
  city: string
  adress: string
  phoneNumber: string
  tarifId: number
  employer: {
    id: number
    companyName: string
  }
}

export interface IMyVacancy {
  id: number
  title: string
  descCard: string
  maxSalary: number
  minSalary: number
  tags: string
  city: string
  adress: string
  phoneNumber: string
  tarifId: number
  status: boolean
  dateStart: Date
  dateEnd: Date
  employer: {
    id: number
    companyName: string
  }
}
