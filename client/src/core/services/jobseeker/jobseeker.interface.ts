import { IVacancyCard } from '../vacancy/vacancy.interface'
import { IEducation } from '@/core/types/education.interface'
import { IResponses } from '@/core/types/responses.interface'
import { IResume } from '@/core/types/resume.interface'
import { IWorkExperience } from '@/core/types/work-experience.interface'

export interface UpdateAbout {
  about: string
}

export interface ResumeAboutResponse {
  resume: IResume
  experience: IWorkExperience[]
  education: IEducation[]
}
