import Link from 'next/link'
import { FC, useState } from 'react'

import { IVacancies } from './VacanciesCard.interface'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'

import VacanciesTag from '../VacanciesTag/VacanciesTag'

import styles from './VacanciesCard.module.scss'

const VacanciesCard: FC<IVacancies> = props => {
  const [checkNumber, setCheckNumber] = useState(false)

  return (
    <div className={styles.VCard}>
      <div className={styles.VCard__content}>
        <Link href="vacancies/1" className={styles.VCard__title}>
          {props.title}
        </Link>
        <div className={styles.VCard__salary}>{props.salary}</div>
        <div className={styles.VCard__description}>{props.description}</div>
        <div className={styles.VCard__tags}>
          <VacanciesTag tags={props.tags} />
        </div>
        <div className={styles.VCard__company}>
          <div className={styles.VCard__company_svg}>
            <IoShieldCheckmarkSharp style={{ color: '#3490DF' }} />
          </div>
          <div className={styles.VCard__company_name}>{props.company}</div>
        </div>
        <div className={styles.VCard__adress}>
          <div className={styles.VCard__adress_svg}>
            <FaMapMarkerAlt style={{ color: '#B7B7B7' }} />
          </div>
          <div className={styles.VCard__adress_name}>{props.adress}</div>
        </div>
        <div className={styles.VCard__button}>
          <div className={styles.VCard__button_respond}>
            <Link href="vacancies/1">Посмотреть</Link>
          </div>
          {checkNumber ? (
            <div onClick={() => setCheckNumber(!checkNumber)} className={styles.VCard__button_checkphone}>
              {props.phone}
            </div>
          ) : (
            <div
              onClick={() => setCheckNumber(!checkNumber)}
              className={[styles.VCard__button_checkphone, styles.VCard__button_checkphone_text].join(' ')}
            >
              Показать номер
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VacanciesCard
