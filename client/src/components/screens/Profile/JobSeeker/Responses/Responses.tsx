import { FC } from 'react'

import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import styles from './Responses.module.scss'

const Responses: FC = () => {
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.responses}>
        <div className="responses__container">
          <div className={styles.responses__header}>
            <ProfileTitle title={'Мои отклики'} />
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default Responses
