import { FC } from 'react'

import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import styles from './Favorites.module.scss'

const Favorites: FC = () => {
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.favorites}>
        <div className="favorites__container">
          <div className={styles.favorites__header}>
            <ProfileTitle title={'Избранные вакансии'} />
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default Favorites
