import { instance } from '@/api/api.interceptor'

import { IProfession } from '@/core/types/profession.interface'

export const ProfessionService = {
  async getAll() {
    return instance<IProfession[]>({
      url: '/profession/all',
      method: 'GET'
    })
  },

  async getBySorted(sort: string) {
    return instance<IProfession[]>({
      url: `/profession/?sort=${sort}`,
      method: 'GET'
    })
  }
}
