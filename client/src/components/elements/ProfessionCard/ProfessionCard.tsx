import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import IProfCard from './ProfessionCard.interface'

import styles from './ProfessionCard.module.scss'

import icon1 from 'public/Professions/icon1.svg'
//import icon2 from 'public/Professions/icon2.svg'
import icon3 from 'public/Professions/icon3.svg'
import icon4 from 'public/Professions/icon4.svg'
import icon5 from 'public/Professions/icon5.svg'

const icons = [icon1, icon3, icon4, icon5];

const ProfessionCard: FC<IProfCard> = props => {

  // рандомная иконка на карточке
  const randomIcon = icons[Math.floor(Math.random() * icons.length)];

  return (
    <Link href="/" className={styles.profCard}>
      <div className={styles.profCard__wrapper}>
        <div className={styles.profCard__content}>
          <div className={styles.profCard__header}>
            <h3 className={styles.profCard__title}>{props.title}</h3>
            <h4 className={styles.profCard__salary}>{props.salary == null ? 'Не заданно ' : props.salary + 'руб. в среднем'}</h4>
            <h5 className={styles.profCard__vacanciesCount}>{props.count} вакансий</h5>
          </div>
          <div className={styles.profCard__icon}>
            <Image src={randomIcon} alt={'icon'} />
          </div>
        </div>
        <p className={styles.profCard__desc}>{props.desc}</p>
      </div>
    </Link>
  )
}

export default ProfessionCard
