import ICompanyHeader from './CompanyHeader.intraface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'

import styles from './CompanyHeader.module.scss'

import logo from 'public/Companies/logoCompany.svg'

const CompanyHeader: FC<ICompanyHeader> = ({ companyName, vacancy, reviews }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__content}>
          <div className={styles.header__name}>
            <IoShieldCheckmarkSharp style={{ color: '#3490DF' }} size={30} />
            <h1 className={styles.header__title}>{companyName}</h1>
          </div>
          <div className={styles.header__menu}>
            <Link href="/" className={[styles.header__menuBlock, styles.header__menuBlock_line].join(' ')}>
              <span className={styles.header__top}>
                <AiOutlineInfoCircle />
              </span>
              <span className={styles.header__bot}>о компании</span>
            </Link>
            <Link href="/" className={[styles.header__menuBlock, styles.header__menuBlock_line].join(' ')}>
              <span className={styles.header__top}>{vacancy}</span>
              <span className={styles.header__bot}>вакансий</span>
            </Link>
            <Link href="/company/reviews" className={styles.header__menuBlock}>
              <span className={styles.header__top}>{reviews}</span>
              <span className={styles.header__bot}>отзывы</span>
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
