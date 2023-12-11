import { IFavoriteList, IMyVacancy, IRibbonById, IRibbonResponse, IRibbonSeggest, ISimilarResponse, IVacancyResponse } from './vacancy.interface'
import { IFavorite } from '@/core/types/favorite.interface'
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

  async getSeggest(suggest: string, suggestCity?: string) {
    let url
    if (suggest) {
      url = `/vacancy/suggest/?suggest=${suggest}`
    } else {
      url = `/vacancy/suggest/?suggestCity=${suggestCity}`
    }
    return instance<IRibbonSeggest[]>({
      url: url,
      method: 'GET'
    })
  },

  async getCountFilter(queryEducation: string, queryExperience: string, queryTags: string, queryTimetable: string) {
    const queryParams = {
      education: queryEducation,
      experience: queryExperience,
      tags: queryTags,
      timetable: queryTimetable
    }
    return instance({
      url: `/vacancy/countFilter/`,
      method: 'GET',
      params: queryParams
    })
  },

  async getRibbon(
    page: number,
    profession: string | number,
    querySearch: string,
    city: string,
    queryEducation: string,
    queryExperience: string,
    queryTags: string,
    queryTimetable: string
  ) {
    const queryParams = {
      page: page,
      profession: profession,
      search: querySearch,
      city,
      education: queryEducation,
      experience: queryExperience,
      tags: queryTags,
      timetable: queryTimetable
    }

    return instance<IRibbonResponse>({
      url: '/vacancy/ribbon/',
      method: 'GET',
      params: queryParams
    })
  },

  async getRibbonById(id: number) {
    return instance<IRibbonById>({
      url: `/vacancy/ribbon/${id}`,
      method: 'GET'
    })
  },

  async getSimilar(data: ISimilarResponse) {
    return instance({
      url: '/vacancy/similar',
      method: 'GET',
      data
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

  //=================================================

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
