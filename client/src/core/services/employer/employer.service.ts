import { instance } from '@/api/api.interceptor'

import { IEmployer } from '@/core/types/employer.interface'

export const employerService = {
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
    return instance<IEmployer>({
      url: `/employer/create`,
      method: 'POST',
      data
    })
      .then(res => res.data)
      .catch(err => err.response.data)
  }
}
