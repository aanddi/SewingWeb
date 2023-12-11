import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import styles from './ProfessionCard.module.scss'

import { IProfessionCard } from '@/core/services/profession/profession.interface'

import { formatPrice } from '@/core/utils/format-price'

//import icon2 from 'public/Professions/icon2.svg'
import icon1 from 'public/Professions/icon1.svg'
import icon3 from 'public/Professions/icon3.svg'
import icon4 from 'public/Professions/icon4.svg'
import icon5 from 'public/Professions/icon5.svg'

const icons = [icon1, icon3, icon4, icon5]

interface Props {
  profession: IProfessionCard
}

const ProfessionCard: FC<Props> = ({ profession }) => {
  const [randomIcon, setRandomIcon] = useState<string>(icon1)
  // рандомная иконка на карточке
  useEffect(() => {
    const randomIcon = icons[Math.floor(Math.random() * icons.length)]
    setRandomIcon(randomIcon)
  }, [])

  return (
    <Link href={`/vacancies?profession=${profession.id}`} className={styles.profCard}>
      <div className={styles.profCard__wrapper}>
        <div className={styles.profCard__content}>
          <div className={styles.profCard__header}>
            <h3 className={styles.profCard__title}>{profession.name}</h3>
            <h4 className={styles.profCard__salary}>
              {profession.averageSalary == null ? 'Не заданно ' : formatPrice(profession.averageSalary) + ' руб. в среднем'}
            </h4>
            <h5 className={styles.profCard__vacanciesCount}>{profession._count.vacancy} вакансий</h5>
          </div>
          <div className={styles.profCard__icon}>
            <Image src={randomIcon} alt={'icon'} title={profession.name} />
          </div>
        </div>
        <p className={styles.profCard__desc}>{profession.desc}</p>
      </div>
    </Link>
  )
}

export default ProfessionCard
