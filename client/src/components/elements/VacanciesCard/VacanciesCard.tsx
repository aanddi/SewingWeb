import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import { IVacancies } from './VacanciesCard.interface'

import styles from './VacanciesCard.module.scss'

import adress from 'public/icons/adress.svg'
import crown from 'public/icons/crown.svg'
import mark from 'public/icons/mark.svg'
import pensioners from 'public/icons/pensioners.svg'
import student from 'public/icons/student.svg'

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
          {props.tags.map(elem => {
            return elem == 'Вакансия недели' ? (
              <div key={elem} className={styles.VCard__tagsRec}>
                <div className={styles.VCard__tagsRec_svg}>
                  <Image src={crown} alt={'Рекомендация'} />
                </div>
                <div className={styles.VCard__tagsRec_text}>Вакансия недели</div>
              </div>
            ) : elem == 'Студенты' ? (
              <div key={elem} className={styles.VCard__tagsElem}>
                <div className={styles.VCard__tagsElem_svg}>
                  <Image src={student} alt={'Рекомендация'} />
                </div>
                <div className={styles.VCard__tagsElem_text}>{elem}</div>
              </div>
            ) : elem == 'Пенсионерам' ? (
              <div key={elem} className={styles.VCard__tagsElem}>
                <div className={styles.VCard__tagsElem_svg}>
                  <Image src={pensioners} alt={'Рекомендация'} />
                </div>
                <div className={styles.VCard__tagsElem_text}>{elem}</div>
              </div>
            ) : null
          })}
        </div>
        <div className={styles.VCard__company}>
          <div className={styles.VCard__company_svg}>
            <Image src={mark} alt={'Компания подтверждена'} />
          </div>
          <div className={styles.VCard__company_name}>{props.company}</div>
        </div>
        <div className={styles.VCard__adress}>
          <div className={styles.VCard__adress_svg}>
            <Image src={adress} alt={'Адресс'} />
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
