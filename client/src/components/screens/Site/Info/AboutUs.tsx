import { FC } from 'react'

import styles from './styles/AboutUs.module.scss'

import SiteLayout from '@/components/layouts/Site/SiteLayout'

const AboutUs: FC = () => {
  return (
    <SiteLayout>
      <div className={styles.aboutUs}>
        <div className="aboutUs__container">
          <div className={styles.aboutUs__title}>О нас</div>
          <div className={styles.aboutUs__wrapper}></div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default AboutUs
