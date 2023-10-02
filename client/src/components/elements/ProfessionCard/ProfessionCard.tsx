import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import IProfCard from './ProfessionCard.interface'

import styles from './ProfessionCard.module.scss'

import icon from 'public/Professions/iconProfCard.svg'

const ProfessionCard: FC<IProfCard> = props => {
  return (
    <Link href="/" className={styles.profCard}>
      <div className={styles.profCard__wrapper}>
        <div className={styles.profCard__content}>
          <div className={styles.profCard__header}>
            <h3 className={styles.profCard__title}>{props.title}</h3>
            <h4 className={styles.profCard__salary}>
              {props.salary} руб. в среднем
            </h4>
            <h5 className={styles.profCard__vacanciesCount}>
              {props.count} вакансий
            </h5>
          </div>
          <div className={styles.profCard__icon}>
            <Image src={icon} alt={'icon'} />
          </div>
        </div>
        <p className={styles.profCard__desc}>{props.desc}</p>
      </div>
    </Link>
  )
}

export default ProfessionCard
