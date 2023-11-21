import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import styles from './VacanciesCard.module.scss'

import { IVacancyCard } from '@/core/services/vacancy/vacancy.interface'

import { formatPrice } from '@/core/utils/format-price'

import VacanciesTag from '../VacanciesTag/VacanciesTag'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'

interface Props {
  vacancy: IVacancyCard
}

const VacanciesCard: FC<Props> = ({ vacancy }) => {
  const [checkNumber, setCheckNumber] = useState(false)
  const router = useRouter()
  //
  return (
    <div onClick={() => router.push(`/vacancies/${vacancy.id}`)} className={styles.VCard}>
      <div className={styles.VCard__content}>
        <Link href={`/vacancies/${vacancy.id}`} className={styles.VCard__title}>
          {vacancy.title}
        </Link>

        {vacancy.minSalary && vacancy.maxSalary ? (
          <div className={styles.VCard__salary}>
            {formatPrice(vacancy.minSalary)} - {formatPrice(vacancy.maxSalary)} руб.
          </div>
        ) : vacancy.minSalary && !vacancy.maxSalary ? (
          <div className={styles.VCard__salary}>от {formatPrice(vacancy.minSalary)} руб.</div>
        ) : !vacancy.minSalary && vacancy.maxSalary ? (
          <div className={styles.VCard__salary}>до {formatPrice(vacancy.maxSalary)} руб.</div>
        ) : !vacancy.minSalary && !vacancy.maxSalary ? (
          <div className={styles.VCard__salary}>по договоренности</div>
        ) : null}

        <div onClick={e => e.stopPropagation()} className={styles.VCard__description}>
          {vacancy.descCard}
        </div>
        <div className={styles.VCard__tags}>
          <VacanciesTag tarif={vacancy.tarifId} tags={vacancy.tags} />
        </div>
        <div onClick={e => e.stopPropagation()} className={styles.VCard__company}>
          <div className={styles.VCard__company_svg}>
            <IoShieldCheckmarkSharp style={{ color: '#3490DF' }} />
          </div>
          <Link href={`/company/${vacancy.employer.id}`} className={styles.VCard__company_name}>
            {vacancy.employer.companyName}
          </Link>
        </div>
        <div onClick={e => e.stopPropagation()} className={styles.VCard__adress}>
          <div className={styles.VCard__adress_svg}>
            <FaMapMarkerAlt style={{ color: '#B7B7B7' }} />
          </div>
          <div className={styles.VCard__adress_name}>
            {vacancy.city}, {vacancy.adress}
          </div>
        </div>
        <div className={styles.VCard__button}>
          <div className={styles.VCard__button_respond}>
            <div>Откликнуться</div>
          </div>
          <div
            onClick={e => {
              e.stopPropagation()
              setCheckNumber(!checkNumber)
            }}
            className={[styles.VCard__button_checkphone, styles.VCard__button_checkphone_text].join(' ')}
          >
            {checkNumber ? <span>{vacancy.phoneNumber}</span> : 'Показать номер'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VacanciesCard
