import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './CompanyReviews.module.scss'

import CompanyHeader from '@/components/elements/Company/CompanyHeader/CompanyHeader'
import CompanyReviews from '@/components/elements/Company/CompanyReviews/CompanyReviews'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ReviewsStart from '@/components/ui/ReviewsStart/ReviewsStar'

import { IEmployerHeader } from '@/core/services/employer/employer.interface'
import { IReviewsList } from '@/core/services/reviews/reviews.interface'

import { BiCommentDetail } from 'react-icons/bi'

import pattern from 'public/Companies/pattern.svg'
import ad from 'public/ad/ad.png'

interface Props {
  header: IEmployerHeader
  reviews: IReviewsList
}

const Reviews: FC<Props> = ({ header, reviews }) => {
  return (
    <SiteLayout>
      <div className={styles.reviews}>
        <div className="reviews__container">
          <div className={styles.reviews__wrapper}>
            <div className={styles.reviews__content}>
              <CompanyHeader header={header} />
              <section className={styles.reviews__block}>
                <h3 className={styles.reviews__title}>Отзывы о предприятии</h3>
                <div className={styles.reviews__contentReviews}>
                  <div className={[styles.reviews__cardReviews, styles.reviews__card].join(' ')}>
                    <div className={styles.reviews__wrapperReviews}>
                      <div className={styles.reviews__grade}>
                        <span>{reviews?.averageRating}</span>
                        <div className={styles.reviews__star}>{reviews && <ReviewsStart grade={reviews?.averageRating} sizeStar={30} />}</div>
                      </div>
                      {reviews?.countReviews ? (
                        <p className={styles.reviews__desc}>На основе {reviews?.countReviews} оценок</p>
                      ) : (
                        <p className={styles.reviews__desc}>Нет оценок</p>
                      )}
                    </div>
                  </div>
                  <div className={[styles.reviews__cardAd, styles.reviews__card].join(' ')}>
                    <Image className={styles.reviews__pattern} src={pattern} alt={' '} />
                    <div className={styles.reviews__wrapperReviews}>
                      <p className={styles.reviews__text}>Ваши отзывы помогают людям принимать взвешенные карьерные решения.</p>
                      <Link href={`/company/${header.id}/add-reviews`} className={styles.reviews__btn}>
                        Оставить отзыв
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <section className={styles.reviews__ribbon}>
                {reviews && reviews?.reviews.length > 0 ? (
                  reviews.reviews.map((elem, index) => <CompanyReviews key={index} reviews={elem} />)
                ) : (
                  <div className={styles.reviews__noReviews}>
                    <BiCommentDetail size={30} style={{ color: '#3490DF' }} />
                    <div>
                      <span className={styles.reviews__noReviews_title}>Нравится работать в компании?</span>
                      <p className={styles.reviews__noReviews_text}>
                        Оставьте свой отзыв! Поделитесь своим мнением и помогите другим осознанно выбрать место работы.
                      </p>
                    </div>
                  </div>
                )}
              </section>
            </div>
            <aside className={styles.reviews__aside}>
              <Image src={ad} alt={'Реклама'} />
            </aside>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default Reviews
