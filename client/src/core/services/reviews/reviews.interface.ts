import { IReviews } from '@/core/types/reviews.interface'

export interface IReviewsList {
  reviews: IReviews[]
  averageRating: number
  countReviews: number
}

export interface IMyReviews extends IReviews {
  employer: {
    companyName: string
  }
}
