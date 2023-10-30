import { FC } from 'react'

import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import styles from './Profile.module.scss'

const Profile: FC = () => {
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.profile}>
        <div className="profile__container">
          <div className={styles.profile__header}>
            <ProfileTitle title={'Личные данные'} />
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default Profile
