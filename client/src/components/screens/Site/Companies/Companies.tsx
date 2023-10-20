import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import ICompanies from './Companies.interface'

import CompaniesCard from '@/components/elements/CompaniesCard/CompaniesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import styles from './Companies.module.scss'

import arrowBot from 'public/Professions/arrowBot.svg'
import arrowTop from 'public/Professions/arrowTop.svg'
import search from 'public/Professions/search.svg'

const Companies: FC<ICompanies> = props => {
  const [sortActive, setSortActive] = useState(false)
  const [sortValue, setSortValue] = useState('по популярности')

  return (
    <SiteLayout>
      <div className={styles.companies}>
        <section onClick={() => setSortActive(false)} className={[styles.companies__head, styles.head].join(' ')}>
          <div className="head__container">
            <div className={styles.head__wrapper}>
              <h1 className={styles.head__title}>Каталог предприятий</h1>
              <p className={styles.head__subTitle}>Мы собрали для Вас все предприятия, которые работают с нами.</p>
              <div className={styles.head__searchBlock}>
                <div className={styles.head__search}>
                  <div className={styles.head__icon}>
                    <Image src={search} alt={'Поиск'} />
                  </div>
                  <input type="text" placeholder="Введите предприятие" />
                </div>
                <div className={styles.head__button}>Найти</div>
              </div>
              <div className={styles.head__typeCompany}>
                <Link
                  href={{
                    pathname: '/companies',
                    query: { params: 'Швейные фабрики' }
                  }}
                  className={styles.head__typeItem}
                >
                  Швейные фабрики <span>34</span>
                </Link>
                <Link
                  href={{
                    pathname: '/companies',
                    query: { params: 'Швейные фабрики' }
                  }}
                  className={styles.head__typeItem}
                >
                  Ателье <span>18</span>
                </Link>
                <Link
                  href={{
                    pathname: '/companies',
                    query: { params: 'Ателье' }
                  }}
                  className={styles.head__typeItem}
                >
                  Швейные предприятия <span>30</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={[styles.companies__ribbon, styles.ribbon].join(' ')}>
          <div className="ribbon__container">
            <div className={styles.ribbon__wrapper}>
              <div className={styles.ribbon__sort} onClick={() => setSortActive(!sortActive)}>
                <div className={styles.ribbon__text}>
                  Сортировка <span>{sortValue}</span>
                </div>
                <div
                  className={
                    sortActive
                      ? [styles.ribbon__sortMenu, styles.ribbon__sortMenu_active].join(' ')
                      : [styles.ribbon__sortMenu, styles.ribbon__sortMenu_unactive].join(' ')
                  }
                >
                  <div className={styles.ribbon__sortWrapper}>
                    <ul className={styles.ribbon__sortList}>
                      <li className={styles.ribbon__sortItem} onClick={() => setSortValue('по популярности')}>
                        <Link className={styles.ribbon__sortLink} href="/professions">
                          по количеству вакансий
                        </Link>
                      </li>
                      <li className={styles.ribbon__sortItem} onClick={() => setSortValue('по возрастанию зарплаты')}>
                        <Link className={styles.ribbon__sortLink} href="/professions">
                          по возрастанию размера предприятия
                        </Link>
                      </li>
                      <li className={styles.ribbon__sortItem} onClick={() => setSortValue('по убыванию зарплаты')}>
                        <Link className={styles.ribbon__sortLink} href="/professions">
                          по убыванию размера предприятия
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.ribbon__icon}>
                  <Image src={sortActive ? arrowTop : arrowBot} alt={sortActive ? 'Вверх' : 'Вниз'} />
                </div>
              </div>
              <div className={styles.ribbon__cards}>
                <CompaniesCard
                  name={'Арттекс Крым'}
                  count={17}
                  adress={'Симферополь, Учебный переулок 8'}
                  reviews={10}
                />
                <CompaniesCard
                  name={'Арттекс Крым'}
                  count={17}
                  adress={'Симферополь, Учебный переулок 8'}
                  reviews={10}
                />
                <CompaniesCard
                  name={'Арттекс Крым'}
                  count={17}
                  adress={'Симферополь, Учебный переулок 8'}
                  reviews={10}
                />
                <CompaniesCard
                  name={'Арттекс Крым'}
                  count={17}
                  adress={'Симферополь, Учебный переулок 8'}
                  reviews={10}
                />
                <CompaniesCard
                  name={'Арттекс Крым'}
                  count={17}
                  adress={'Симферополь, Учебный переулок 8'}
                  reviews={10}
                />
                <CompaniesCard
                  name={'Арттекс Крым'}
                  count={17}
                  adress={'Симферополь, Учебный переулок 8'}
                  reviews={10}
                />
                <CompaniesCard
                  name={'Арттекс Крым'}
                  count={17}
                  adress={'Симферополь, Учебный переулок 8'}
                  reviews={10}
                />
                <CompaniesCard
                  name={'Арттекс Крым'}
                  count={17}
                  adress={'Симферополь, Учебный переулок 8'}
                  reviews={10}
                />
                <CompaniesCard
                  name={'Арттекс Крым'}
                  count={17}
                  adress={'Симферополь, Учебный переулок 8'}
                  reviews={10}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

export default Companies
