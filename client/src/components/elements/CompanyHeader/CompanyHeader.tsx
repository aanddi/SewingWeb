import ICompanyHeader from './CompanyHeader.intraface'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './CompanyHeader.module.scss'

import logo from 'public/Companies/logoCompany.svg'
import i from 'public/icons/i.svg'
import mark from 'public/icons/mark.svg'

const CompanyHeader: FC<ICompanyHeader> = props => {
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__content}>
          <div className={styles.header__name}>
            <Image src={mark} alt={'Проверенно'} width={30} height={30} />
            <h1 className={styles.header__title}>Арттекс Крым</h1>
          </div>
          <div className={styles.header__menu}>
            <Link
              href="/"
              className={[
                styles.header__menuBlock,
                styles.header__menuBlock_line
              ].join(' ')}
            >
              <span className={styles.header__top}>
                <Image src={i} alt={'i'} height={18} />
              </span>
              <span className={styles.header__bot}>о компании</span>
            </Link>
            <Link
              href="/"
              className={[
                styles.header__menuBlock,
                styles.header__menuBlock_line
              ].join(' ')}
            >
              <span className={styles.header__top}>17</span>
              <span className={styles.header__bot}>вакансий</span>
            </Link>
            <Link href="/" className={styles.header__menuBlock}>
              <span className={styles.header__top}>10</span>
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
