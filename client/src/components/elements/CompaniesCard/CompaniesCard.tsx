import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import ICompaniesCard from './CompaniesCard.interface'

import styles from './CompaniesCard.module.scss'

import count from 'public/Companies/countVacancies.svg'
import logo from 'public/Companies/logoCompany.svg'
import adress from 'public/icons/adress.svg'
import mark from 'public/icons/mark.svg'
import star from 'public/icons/star.svg'

const CompaniesCard: FC<ICompaniesCard> = props => {
  return (
    <Link href={`/company/${props.name}`} className={styles.companiesCard}>
      <div className={styles.companiesCard__wrapper}>
        <div className={styles.companiesCard__content}>
          <div className={styles.companiesCard__items}>
            <div className={styles.companiesCard__item}>
              <Image src={mark} alt="Подтверждено" />
              <span className={styles.companiesCard__name}>{props.name}</span>
            </div>
            <div className={styles.companiesCard__item}>
              <Image src={count} alt="Подтверждено" />
              <span className={styles.companiesCard__count}>
                {props.count} вакансий
              </span>
            </div>
            <div className={styles.companiesCard__item}>
              <Image src={adress} alt="Подтверждено" />
              <span>{props.adress}</span>
            </div>
            <div className={styles.companiesCard__reviews}>
              <div className={styles.companiesCard__reviewsStar}>
                <Image src={star} alt="Подтверждено" />
                <Image src={star} alt="Подтверждено" />
                <Image src={star} alt="Подтверждено" />
                <Image src={star} alt="Подтверждено" />
                <Image src={star} alt="Подтверждено" />
              </div>
              <span>{props.reviews} отзывов</span>
            </div>
          </div>
          <div className={styles.companiesCard__logo}>
            <Image src={logo} alt={'Логотип'} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CompaniesCard
