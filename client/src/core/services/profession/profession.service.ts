import { IProfessionCard, IProfessionsSuggest } from './profession.interface'
import { IProfession } from '@/core/types/profession.interface'

import { instance } from '@/core/api/api.interceptor'

export const ProfessionService = {
  async getAll() {
    return instance<IProfessionCard[]>({
      url: '/profession/all',
      method: 'GET'
    })
  },

  async getSuggest(suggest: string) {
    return instance<IProfessionsSuggest[]>({
      url: `/profession/suggest/?suggest=${suggest}`,
      method: 'GET'
    })
  },

  async getBySearch(search: string, sort: string) {
    let url
    if (search && sort) {
      url = `/profession/?search=${search}&sort=${sort}`
    } else if (!search) {
      url = `/profession/?sort=${sort}`
    } else if (!sort) {
      url = `/profession/?search=${search}`
    }

    return instance<IProfessionCard[]>({
      url,
      method: 'GET'
    })
  }
}
