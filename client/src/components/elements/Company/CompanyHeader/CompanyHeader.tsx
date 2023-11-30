import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './CompanyHeader.module.scss'

import { IEmployerHeader } from '@/core/services/employer/employer.interface'

import ICompanyHeader from './CompanyHeader.intraface'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'

import logo from 'public/Companies/logoCompany.svg'

const CompanyHeader: FC<{ header: IEmployerHeader }> = ({ header }) => {
  const router = useRouter()
  const pathname = router.pathname
  const location = pathname.split('/')
  console.log(location[3])
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__content}>
          <div className={styles.header__name}>
            <IoShieldCheckmarkSharp style={{ color: '#3490DF' }} size={30} title={'Проверенно SewingWeb'} />
            <h1 className={styles.header__title}>{header.companyName}</h1>
          </div>
          <div className={styles.header__menu}>
            <Link href={`/company/${header.id}`} className={[styles.header__menuBlock, styles.header__menuBlock_line].join(' ')}>
              <span className={styles.header__top}>
                <AiOutlineInfoCircle />
              </span>
              <span className={location[3] == null ? [styles.header__bot, styles.header__bot_active].join(' ') : styles.header__bot}>о компании</span>
            </Link>
            <Link href={`/company/${header.id}/vacancies`} className={[styles.header__menuBlock, styles.header__menuBlock_line].join(' ')}>
              <span className={styles.header__top}>{header.vacanciesCount}</span>
              <span className={location[3] == 'vacancies' ? [styles.header__bot, styles.header__bot_active].join(' ') : styles.header__bot}>
                вакансий
              </span>
            </Link>
            <Link href={`/company/${header.id}/reviews`} className={styles.header__menuBlock}>
              <span className={styles.header__top}>{header.reviewsCount}</span>
              <span className={location[3] == 'reviews' ? [styles.header__bot, styles.header__bot_active].join(' ') : styles.header__bot}>
                отзывы
              </span>
            </Link>
          </div>
        </div>

        <div className={styles.header__logo}>
          <Image src={logo} alt={'Логотип'} width={80} height={80} />
        </div>
      </div>
    </div>
  )
}

export default CompanyHeader
