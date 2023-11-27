import { FC } from 'react'

import styles from './CompanyReviews.module.scss'

import ReviewsStar from '@/components/ui/ReviewsStart/ReviewsStar'

import { IReviews } from '@/core/types/reviews.interface'

import { formatDate } from '@/core/utils/format-date'

const CompanyReviews: FC<{ reviews: IReviews }> = ({ reviews }) => {
  return (
    <div className={styles.reviewsCard}>
      <div className={styles.reviewsCard__head}>
        <span className={styles.reviewsCard__proffession}>{reviews.profession},</span>
        <span className={styles.reviewsCard__post}>{reviews.post}</span>
        <span className={styles.reviewsCard__date}>{formatDate(reviews.createdAt)}</span>
      </div>
      <div className={styles.reviewsCard__stars}>
        <ReviewsStar grade={reviews.grade} sizeStar={20} />
      </div>
      <div className={styles.reviewsCard__desc}>
        {reviews.advantages && (
          <div className={styles.reviewsCard__block}>
            <span className={styles.reviewsCard__title}>Достоинства</span>
            <p className={styles.reviewsCard__text}>{reviews.advantages}</p>
          </div>
        )}
        {reviews.flaws && (
          <div className={styles.reviewsCard__block}>
            <span className={styles.reviewsCard__title}>Недостатки</span>
            <p className={styles.reviewsCard__text}>{reviews.flaws}</p>
          </div>
        )}
        {reviews.comment && (
          <div className={styles.reviewsCard__block}>
            <span className={styles.reviewsCard__title}>Комментарий</span>
            <p className={styles.reviewsCard__text}>{reviews.comment}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CompanyReviews
