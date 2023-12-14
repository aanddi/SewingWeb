import { useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import styles from './Companies.module.scss'

import CompaniesCard from '@/components/elements/Company/CompaniesCard/CompaniesCard'
import LoadingDots from '@/components/elements/Loading/LoadingDots'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import SortList from '@/components/ui/SortList/SortList'

import { IEmployerCard } from '@/core/services/employer/employer.interface'

import { useOutside } from '@/core/hooks/useOutside'
import { EmployerService } from '@/core/services/employer/employer.service'

import { sortCompany } from './sort-company.data'

import { BiSearchAlt } from 'react-icons/bi'
import { LuSearchX } from 'react-icons/lu'
import { RxCross1 } from 'react-icons/rx'

const CompaniesList: FC<IEmployerCard> = ({ companies, types }) => {
  const { isShow, setIsShow, ref } = useOutside(false)

  const { isShow: isShowSearch, setIsShow: setIsShowSearch, ref: refSearch } = useOutside(false)

  const [value, setValue] = useState<string>('')
  const [querySearch, setQuerySearch] = useState<string>('')
  const queryClient = useQueryClient()

  const router = useRouter()

  const { data: search, isLoading } = useQuery({
    queryKey: ['searchCompanies', value],
    queryFn: async () => {
      const response = await EmployerService.getSuggest(value)
      return response.data
    },
    enabled: !!value
  })

  useEffect(() => {
    const query = router.query.search as string
    setQuerySearch(query)
    setValue(query)
  }, [router])

  return (
    <SiteLayout background={'#F6FAFF'}>
      <div className={styles.companies}>
        <section className={[styles.companies__head, styles.head].join(' ')}>
          <div className="head__container">
            <div className={styles.head__wrapper}>
              <h1 className={styles.head__title}>Каталог предприятий</h1>
              <p className={styles.head__subTitle}>Мы собрали для Вас все предприятия, которые работают с нами.</p>
              <div className={styles.search}>
                <div className={styles.search__block}>
                  <div className={styles.search__input}>
                    <div className={styles.search__icons}>
                      <BiSearchAlt style={{ color: '#BCBCBC' }} size={20} />
                    </div>
                    <div className={styles.search__inputBlock}>
                      <input
                        onChange={e => {
                          setValue(e.target.value)
                          setIsShowSearch(true)
                          queryClient.invalidateQueries({ queryKey: ['searchCompanies', value] })
                        }}
                        value={value}
                        type="text"
                        placeholder="Введите предприятие или город"
                      />
                      <div
                        onClick={() => setValue('')}
                        className={value ? styles.search__resetSearch : [styles.search__resetSearch, styles.search__resetSearch_unactive].join(' ')}
                      >
                        <RxCross1 />
                      </div>
                      <div
                        ref={refSearch}
                        className={
                          isShowSearch
                            ? [styles.search__list, styles.search__list_active].join(' ')
                            : [styles.search__list, styles.search__list_unactive].join(' ')
                        }
                      >
                        <div className={styles.search__listWrapper}>
                          <ul className={styles.search__items}>
                            {search?.map((elem, index) => {
                              return (
                                <li onClick={() => setIsShowSearch(false)} key={index} className={styles.search__item}>
                                  <Link href={`/companies/?search=${elem.companyName}`} className={styles.search__link}>
                                    {elem.companyName}
                                  </Link>
                                </li>
                              )
                            })}
                            <div className={styles.search__loading}>
                              {isLoading && <LoadingDots />}
                              {search?.length === 0 && <div>Нет результатов</div>}
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link onClick={() => setIsShowSearch(false)} href={`/companies/?search=${value}`} className={styles.search__button}>
                    Найти
                  </Link>
                  {querySearch && (
                    <span
                      className={styles.search__reset}
                      onClick={() => {
                        router.push('companies')
                        setValue('')
                      }}
                    >
                      Сбросить поиск
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.head__typeCompany}>
                {types.map((elem, index) => {
                  return (
                    <div key={index} className={styles.head__typeList}>
                      <Link href={`/companies/?search=${elem.type}`} className={styles.head__typeItem}>
                        {elem.type} <span>{elem._count}</span>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className={[styles.companies__ribbon, styles.ribbon].join(' ')}>
          <div className="ribbon__container">
            <div className={styles.ribbon__wrapper}>
              {querySearch ? <div className={styles.ribbon__search}>Результат поиска по названию: {value}</div> : null}
              <div ref={ref}>
                <SortList data={sortCompany} active={isShow} setActive={setIsShow} />
              </div>
              <div className={styles.ribbon__cards}>
                {companies.length > 0 ? (
                  companies.map((company, index) => {
                    return <CompaniesCard key={index} employer={company.employer} count={company.count} averageGrade={company.averageGrade} />
                  })
                ) : (
                  <div className={styles.ribbon__error}>
                    <div className={styles.ribbon__error_icon}>
                      <LuSearchX size={30} style={{ color: '#FD7791' }} />
                    </div>
                    <div className={styles.ribbon__error_message}>
                      <span className={styles.ribbon__error_title}>Упс... не удалось найти предприятие.</span>
                      <span>Попробуйте изменить условия поиска или попробовать чуть позже.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

export default CompaniesList
