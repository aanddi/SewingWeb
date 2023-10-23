import { instance } from '@/api/api.interceptor'

import { ICreateResponse } from './ICreateResponse.interface'
import { IEmployer } from '@/core/types/employer.interface'

export const employerService = {
  async create(data: IEmployer) {
    const response = await instance<ICreateResponse>({
      url: `/employer/create`,
      method: 'POST',
      data
    })

    return response.data
  }
}
