import { FC } from 'react'

import styles from './MyVacancies.module.scss'

import SiteLayout from '@/components/layouts/Site/SiteLayout'

const MyVacancies: FC = () => {
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.vacancies}>
        <div className="vacancies__container"></div>
      </div>
    </SiteLayout>
  )
}

export default MyVacancies
