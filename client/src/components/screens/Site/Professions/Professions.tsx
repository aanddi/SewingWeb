import Link from 'next/link'
import { FC, useState } from 'react'

import { IProfession } from '@/core/types/profession.interface'

import { BiSearchAlt } from 'react-icons/bi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { useOutside } from '@/core/hooks/useOutside'

import ProfessionCard from '@/components/elements/ProfessionCard/ProfessionCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import styles from './Professions.module.scss'

const Professions: FC<{ professions: IProfession[] }> = ({ professions }) => {
  const { isShow, setIsShow, ref } = useOutside(false)
  const [sortValue, setSortValue] = useState('по популярности')

  console.log(professions)
  return (
    <SiteLayout background={'#F6FAFF'}>
      <div className={styles.professions}>
        <section className={[styles.professions__head, styles.head].join(' ')}>
          <div className="head__container">
            <div className={styles.head__wrapper}>
              <h1 className={styles.head__title}>Каталог профессий</h1>
              <p className={styles.head__subTitle}>
                Мы собрали для Вас все профессии, которые имеются у нас на платформе.
              </p>
              <div className={styles.head__searchBlock}>
                <div className={styles.head__search}>
                  <div className={styles.head__icon}>
                    <BiSearchAlt style={{ color: '#BCBCBC' }} size={20} />
                  </div>
                  <input type="text" placeholder="Введите профессию" />
                </div>
                <div className={styles.head__button}>Найти</div>
              </div>
            </div>
          </div>
        </section>

        <section className={[styles.professions__ribbon, styles.ribbon].join(' ')}>
          <div className="ribbon__container">
            <div className={styles.ribbon__wrapper}>
              <div className={styles.ribbon__sort} onClick={() => setIsShow(!isShow)} ref={ref}>
                <div className={styles.ribbon__text}>
                  Сортировка <span>{sortValue}</span>
                </div>
                <div
                  className={
                    isShow
                      ? [styles.ribbon__sortMenu, styles.ribbon__sortMenu_active].join(' ')
                      : [styles.ribbon__sortMenu, styles.ribbon__sortMenu_unactive].join(' ')
                  }
                >
                  <div className={styles.ribbon__sortWrapper}>
                    <ul className={styles.ribbon__sortList}>
                      <li className={styles.ribbon__sortItem} onClick={() => setSortValue('по популярности')}>
                        <Link className={styles.ribbon__sortLink} href="/professions">
                          по популярности
                        </Link>
                      </li>
                      <li className={styles.ribbon__sortItem} onClick={() => setSortValue('по возрастанию зарплаты')}>
                        <Link className={styles.ribbon__sortLink} href="/professions?sort=asc">
                          по возрастанию зарплаты
                        </Link>
                      </li>
                      <li className={styles.ribbon__sortItem} onClick={() => setSortValue('по убыванию зарплаты')}>
                        <Link className={styles.ribbon__sortLink} href="/professions?sort=desc">
                          по убыванию зарплаты
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.ribbon__icon}>
                  {isShow ? (
                    <IoIosArrowUp style={{ color: '#242424' }} size={20} />
                  ) : (
                    <IoIosArrowDown style={{ color: '#242424' }} size={20} />
                  )}
                </div>
              </div>

              <div className={styles.ribbon__cards}>
                {professions.length > 0 ? (
                  professions.map((profession, index) => {
                    return (
                      <ProfessionCard
                        title={profession.name}
                        salary={profession.averageSalary}
                        count={17}
                        desc={profession.desc}
                      />
                    )
                  })
                ) : (
                  <div className={styles.ribbon__error}>Ой! Ошибка. Профессии не найдены</div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

export default Professions
