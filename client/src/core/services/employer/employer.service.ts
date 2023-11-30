import { IEmployerCard, IEmployerHeader, IEmployerSuggest } from './employer.interface'
import { IEmployer } from '@/core/types/employer.interface'

import { instance } from '@/core/api/api.interceptor'

export const EmployerService = {
  async getEmployerById(id: number | string) {
    return await instance<IEmployer>({
      url: `/employer/${id}`,
      method: 'GET'
    })
  },

  async getEmployerAll() {
    return await instance<IEmployerCard>({
      url: `/employer`,
      method: 'GET'
    })
  },

  async getHeader(idEmployer: string) {
    return await instance<IEmployerHeader>({
      url: `/employer/header/${idEmployer}`,
      method: 'GET'
    })
  },

  async getSuggest(suggest: string) {
    return instance<IEmployerSuggest[]>({
      url: `/employer/suggest/?suggest=${suggest}`,
      method: 'GET'
    })
  },

  async getBySearch(search: string, sort: string) {
    let url
    if (search && sort) {
      url = `/employer/?search=${search}&sort=${sort}`
    } else if (!search) {
      url = `/employer/?sort=${sort}`
    } else if (!sort) {
      url = `/employer/?search=${search}`
    }
    return instance<IEmployerCard>({
      url,
      method: 'GET'
    })
  },

  async create(data: IEmployer) {
    const response = await instance<IEmployer>({
      url: `/employer/create`,
      method: 'POST',
      data
    })
    return response.data
  },

  async update(id: number | undefined, data: IEmployer) {
    const response = await instance<IEmployer>({
      url: `/employer/update/${id}`,
      method: 'PUT',
      data
    })
    return response.data
  },

  async getEmployerByUserId(id: number | undefined) {
    return await instance<IEmployer>({
      url: `/employer/getByUserId/${id}`,
      method: 'GET'
    })
  },

  async getCountVacany(id: number | undefined) {
    return await instance<number>({
      url: `/employer/getCountVacany/${id}`,
      method: 'GET'
    })
  }
}
