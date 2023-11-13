import { FC } from 'react'

import styles from './AddVacancy.module.scss'

import SiteLayout from '@/components/layouts/Site/SiteLayout'

const AddVacancy: FC = () => {
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.addVacancy}>
        <div className="addVacancy__container"></div>
      </div>
    </SiteLayout>
  )
}

export default AddVacancy
