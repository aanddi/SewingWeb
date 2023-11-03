import { FC } from 'react'

import styles from './Reviews.module.scss'

import ProfileReviews from '@/components/elements/Profile/ProfileReviews/ProfileReviews'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

const Reviews: FC = () => {
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.reviews}>
        <div className="reviews__container">
          <div className={styles.reviews__header}>
            <ProfileTitle title={'Оставленные отзывы'} />
          </div>
          <div className={styles.reviews__wrapper}>
            <ProfileReviews />
            <ProfileReviews />
            <ProfileReviews />
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default Reviews
