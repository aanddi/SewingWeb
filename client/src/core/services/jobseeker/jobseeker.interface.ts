import { IVacancyCard } from '../vacancy/vacancy.interface'
import { IResponses } from '@/core/types/responses.interface'

export interface UpdateAbout {
  about: string
}

export interface EducationType {
  id: number
  resumeId: number
  educationLevel: string
  institutionName: string
  yearEnding: string
  specialization: string
}

export interface IResponsesList extends IResponses {
  vacancy: IVacancyCard
}
