import { FC } from 'react'

import styles from './AddVacancy.module.scss'

import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

const AddVacancy: FC = () => {
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.addVacancy}>
        <div className="addVacancy__container">
          <div className={styles.addVacancy__wrapper}>
            <div className={styles.addVacancy__header}>
              <ProfileTitle title={'Добавить вакансию'} />
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default AddVacancy
