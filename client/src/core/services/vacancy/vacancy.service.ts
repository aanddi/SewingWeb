import { IFavoriteList, IMyVacancy, IRibbonById, IRibbonResponse, IVacancyResponse } from './vacancy.interface'
import { IFavorite } from '@/core/types/favorite.interface'
import { IResponses } from '@/core/types/responses.interface'
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

  async getRibbonById(id: number) {
    return instance<IRibbonById>({
      url: `/vacancy/ribbon/${id}`,
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
  async getListById(id: string | undefined) {
    return instance<IVacancyResponse[]>({
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
  },

  async updateMyVacancy(id: number | undefined, data: IVacancy) {
    return instance({
      url: `/vacancy/update/${id}`,
      method: 'PUT',
      data
    })
  },

  async response(data: IResponses) {
    return instance({
      url: `/vacancy/response`,
      method: 'POST',
      data
    })
  },

  async getFavorites(idUser: number | undefined) {
    return instance<IFavoriteList[]>({
      url: `/vacancy/getFavorites/${idUser}`,
      method: 'GET'
    })
  },

  async createFavorite(data: IFavorite) {
    return instance({
      url: `/vacancy/createFavorite`,
      method: 'POST',
      data
    })
  },

  async deleteFavorite(idFavorite: number | undefined) {
    return instance({
      url: `/vacancy/deleteFavorite/${idFavorite}`,
      method: 'DELETE'
    })
  }
}
