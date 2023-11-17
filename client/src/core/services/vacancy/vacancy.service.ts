import { ITarifVacancy } from '@/core/types/tarif-vacancy.interface'
import { IVacancy } from '@/core/types/vacancy.interface'

import { instance } from '@/core/api/api.interceptor'

export const VacancyService = {
  async getTarif() {
    return instance<ITarifVacancy[]>({
      url: '/vacancy/getTarif',
      method: 'GET'
    })
  },

  async create(data: IVacancy) {
    const response = await instance<IVacancy>({
      url: `/vacancy/create`,
      method: 'POST',
      data
    })
    return response.data
  }
}
