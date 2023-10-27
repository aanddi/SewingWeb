import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import ICompaniesCard from './CompaniesCard.interface'

import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { IoDocumentTextOutline, IoShieldCheckmarkSharp } from 'react-icons/io5'

import styles from './CompaniesCard.module.scss'

import logo from 'public/Companies/logoCompany.svg'

const CompaniesCard: FC<ICompaniesCard> = props => {
  return (
    <Link href={`/company/${props.id}`} className={styles.companiesCard}>
      <div className={styles.companiesCard__wrapper}>
        <div className={styles.companiesCard__content}>
          <div className={styles.companiesCard__items}>
            <div className={styles.companiesCard__item}>
              <IoShieldCheckmarkSharp style={{ color: '#3490DF' }} />
              <span className={styles.companiesCard__name}>{props.name}</span>
            </div>
            <div className={styles.companiesCard__item}>
              <IoDocumentTextOutline style={{ color: '#B7B7B7' }} />
              <span className={styles.companiesCard__count}>{props.count} вакансий</span>
            </div>
            <div className={styles.companiesCard__item}>
              <FaMapMarkerAlt style={{ color: '#B7B7B7' }} />
              <span>{props.adress}</span>
            </div>
            <div className={styles.companiesCard__reviews}>
              <div className={styles.companiesCard__reviewsStar}>
                <FaStar style={{ color: '#F4A815' }} size={15} />
                <FaStar style={{ color: '#F4A815' }} size={15} />
                <FaStar style={{ color: '#F4A815' }} size={15} />
                <FaStar style={{ color: '#F4A815' }} size={15} />
                <FaStar style={{ color: '#F4A815' }} size={15} />
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
