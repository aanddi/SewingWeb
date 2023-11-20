import { IMyVacancy, IRibbonResponse, IVacancyResponse } from './vacancy.interface'
import { ITarifVacancy } from '@/core/types/tarif-vacancy.interface'
import { IVacancy } from '@/core/types/vacancy.interface'

import { instance } from '@/core/api/api.interceptor'

export const VacancyService = {
  async getMyVacancies(id: number | undefined) {
    const response = await instance<IMyVacancy[]>({
      url: `/vacancy/getMyVacancies/${id}`,
      method: 'GET'
    })
    return response.data
  },

  async getRibbon(page: number) {
    return instance<IRibbonResponse>({
      url: `/vacancy/ribbon/?page=${page}`,
      method: 'GET'
    })
  },

  async getTarif() {
    return instance<ITarifVacancy[]>({
      url: '/vacancy/getTarif',
      method: 'GET'
    })
  },

  async getById(id: string | undefined) {
    return instance<IVacancyResponse>({
      url: `/vacancy/getById/${id}`,
      method: 'GET'
    })
  },

  async unpublication(id: number | undefined) {
    return instance({
      url: `/vacancy/unpublication/${id}`,
      method: 'PATCH'
    })
  },

  async deleteMyVacancy(id: number | undefined) {
    return instance({
      url: `/vacancy/deleteMyVacancy/${id}`,
      method: 'DELETE'
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
