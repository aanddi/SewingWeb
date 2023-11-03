import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './ProfileReviews.module.scss'

import { FaStar } from 'react-icons/fa'

import logo from 'public/Companies/logoCompany.svg'

const ResumeModal: FC = () => {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__company}>
        <div className={styles.reviews__logo}>
          <Image src={logo} alt={'Логотип'} width={40} height={40} />
        </div>
        <Link href={'/company/2'} className={styles.reviews__name}>
          SewingWeb
        </Link>
      </div>
      <div className={styles.reviews__content}>
        <div className={styles.reviews__ribbonItem}>
          <div className={styles.reviews__itemHead}>
            <span className={styles.reviews__proffession}>Профессия,</span>
            <span className={styles.reviews__post}>Должность</span>
            <span className={styles.reviews__date}>5 октября</span>
          </div>
          <div className={styles.reviews__starBlock}>
            <FaStar style={{ color: '#F4A815' }} size={15} />
            <FaStar style={{ color: '#F4A815' }} size={15} />
            <FaStar style={{ color: '#F4A815' }} size={15} />
            <FaStar style={{ color: '#F4A815' }} size={15} />
            <FaStar style={{ color: '#F4A815' }} size={15} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeModal
