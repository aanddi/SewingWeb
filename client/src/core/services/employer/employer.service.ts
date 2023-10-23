import { instance } from '@/api/api.interceptor'

import { IEmployer } from '@/core/types/employer.interface'

export const employerService = {
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
