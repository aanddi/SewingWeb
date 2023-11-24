import { IResponsesByVacancy, IResponsesList, IResponsesStatus } from './response.interface'
import { IResponses } from '@/core/types/responses.interface'

import { instance } from '@/core/api/api.interceptor'

export const ResponsesService = {
  async getMyResponses(id: number | undefined, sort: string | undefined) {
    return instance<IResponsesList[]>({
      url: `responses/getByIdUser/${id}/?show=${sort}`,
      method: 'GET'
    })
  },

  async getByIdVacancy(id: string | undefined, sort: string | undefined) {
    return instance<IResponsesByVacancy>({
      url: `responses/getByIdVacancy/${id}/?show=${sort}`,
      method: 'GET'
    })
  },

  async delete(idResponse: number | undefined) {
    return instance({
      url: `responses/delete/${idResponse}`,
      method: 'DELETE'
    })
  },

  async create(data: IResponses) {
    return instance({
      url: `/responses/create`,
      method: 'POST',
      data
    })
  },
  async updateStatus(idResponse: number | undefined, data: IResponsesStatus) {
    return instance({
      url: `/responses/updateStatus/${idResponse}`,
      method: 'PATCH',
      data
    })
  }
}
