import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './Companies.module.scss'

import CompaniesCard from '@/components/elements/Company/CompaniesCard/CompaniesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import SortList from '@/components/ui/SortList/SortList'

import { IEmployer } from '@/core/types/employer.interface'

import { useOutside } from '@/core/hooks/useOutside'

import { sortCompany } from './sort-company.data'

import { BiSearchAlt } from 'react-icons/bi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Companies: FC<{ companies: IEmployer[] }> = ({ companies }) => {
  const { isShow, setIsShow, ref } = useOutside(false)
  const [sortValue, setSortValue] = useState('по популярности')

  return (
    <SiteLayout background={'#F6FAFF'}>
      <div className={styles.companies}>
        <section className={[styles.companies__head, styles.head].join(' ')}>
          <div className="head__container">
            <div className={styles.head__wrapper}>
              <h1 className={styles.head__title}>Каталог предприятий</h1>
              <p className={styles.head__subTitle}>Мы собрали для Вас все предприятия, которые работают с нами.</p>
              <div className={styles.head__searchBlock}>
                <div className={styles.head__search}>
                  <div className={styles.head__icon}>
                    <BiSearchAlt style={{ color: '#BCBCBC' }} size={20} />
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
              <div ref={ref}>
                <SortList data={sortCompany} active={isShow} setActive={setIsShow} />
              </div>
              <div className={styles.ribbon__cards}>
                {companies.length > 0 ? (
                  companies.map((company, index) => {
                    return <CompaniesCard key={index} name={company.companyName} count={17} adress={company.adress} reviews={10} id={company.id} />
                  })
                ) : (
                  <div className={styles.ribbon__error}>Ой! Ошибка. Предприятия не найдены</div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

export default Companies
