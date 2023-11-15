import { IEmployer } from '@/core/types/employer.interface'

import { instance } from '@/api/api.interceptor'

export const EmployerService = {
  async getEmployerById(id: string) {
    return await instance<IEmployer>({
      url: `/employer/${id}`,
      method: 'GET'
    })
  },

  async getEmployerAll() {
    return await instance<IEmployer[]>({
      url: `/employer`,
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
