import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './CompaniesCard.module.scss'

import ReviewsStar from '@/components/ui/ReviewsStart/ReviewsStar'

import ICompaniesCard from './CompaniesCard.interface'
import { IEmployerResponse, IResponseCard } from '@/core/services/employer/employer.interface'

import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { IoDocumentTextOutline, IoShieldCheckmarkSharp } from 'react-icons/io5'

import logo from 'public/Companies/logoCompany.svg'

const CompaniesCard: FC<IResponseCard> = ({ employer, count, averageGrade }) => {
  return (
    <Link href={`/company/${employer.id}`} className={styles.companiesCard}>
      <div className={styles.companiesCard__wrapper}>
        <div className={styles.companiesCard__content}>
          <div className={styles.companiesCard__items}>
            <div className={styles.companiesCard__item}>
              <IoShieldCheckmarkSharp style={{ color: '#3490DF' }} />
              <span className={styles.companiesCard__name}>{employer.companyName}</span>
            </div>
            <div className={styles.companiesCard__item}>
              <IoDocumentTextOutline style={{ color: '#B7B7B7' }} />
              {count.countVacancy !== 0 ? (
                <span className={styles.companiesCard__count}>{count.countVacancy} вакансий</span>
              ) : (
                <span className={styles.companiesCard__count}>нет вакансий</span>
              )}
            </div>
            <div className={styles.companiesCard__item}>
              <FaMapMarkerAlt style={{ color: '#B7B7B7' }} />
              <span>{employer.adress}</span>
            </div>
            <div className={styles.companiesCard__reviews}>
              <div className={styles.companiesCard__reviewsStar}>
                <ReviewsStar grade={averageGrade} sizeStar={15} />
              </div>
              {count.countReviews !== 0 ? <span>{count.countReviews} отзывов</span> : <span>нет отзывов</span>}
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
