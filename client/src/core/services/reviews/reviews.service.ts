import { IMyReviews, IReviewsList } from './reviews.interface'
import { IReviews } from '@/core/types/reviews.interface'

import { instance } from '@/core/api/api.interceptor'

export const ReviewsService = {
  async getReviewsList(id: number) {
    return instance<IReviewsList>({
      url: `reviews/byId/${id}`,
      method: 'GET'
    })
  },

  async getMyReviews(idUser: number | undefined) {
    return instance<IMyReviews[]>({
      url: `reviews/getMy/${idUser}`,
      method: 'GET'
    })
  },

  async create(data: IReviews) {
    return instance<IReviewsList>({
      url: `reviews/create`,
      method: 'POST',
      data
    })
  },

  async delete(idReviews: number | undefined) {
    return instance<IReviewsList>({
      url: `reviews/delete/${idReviews}`,
      method: 'DELETE'
    })
  }
}
