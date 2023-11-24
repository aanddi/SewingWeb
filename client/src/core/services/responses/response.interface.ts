import { IVacancyCard } from '../vacancy/vacancy.interface'
import { IResponses } from '@/core/types/responses.interface'

export interface IResponsesList extends IResponses {
  vacancy: IVacancyCard
}

export interface IResponsesByVacancy {}

export interface IResponsesByVacancy {
  responses: IResponsesResume[]
  count: number
}

export interface IResponsesResume extends IResponses {
  jobseeker?: {
    id: number
    userId: number
    resumeId: number
    resume?: {
      id: number
      name: string
      surname: string
      patronymic: string | null
      profession: string | null
      salary: number | null
      gender: string | null
      DOB: string | null
      phoneNumber: string | null
      city: string | null
      email: string | null
      about: string | null
    }
  }
}

export interface IResponsesStatus {
  status: string
}
