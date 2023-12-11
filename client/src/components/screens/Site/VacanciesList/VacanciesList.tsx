import { useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import styles from './VacanciesList.module.scss'

import LoadingDots from '@/components/elements/Loading/LoadingDots'
import FilterModal from '@/components/elements/Modal/FilterModal/FilterModal'
import RibbonVacancies from '@/components/elements/RibbonVacancies/RibbonVacancies'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import { IRibbonResponse } from '@/core/services/vacancy/vacancy.interface'

import { useOutside } from '@/core/hooks/useOutside'
import { VacancyService } from '@/core/services/vacancy/vacancy.service'

import { AiOutlineClose } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { LuSettings2 } from 'react-icons/lu'
import { MdOutlineDelete } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'

const VacanciesList: FC<IRibbonResponse> = ({ vacancies, totalPages, countVacanciesReturn }) => {
  const { isShow: isShowSearchTitle, setIsShow: setIsShowSearchTitle, ref: refSearchTitle } = useOutside(false)
  const { isShow: isShowSearchCity, setIsShow: setIsShowSearchCity, ref: refSearchCity } = useOutside(false)

  const [activeFilter, setActiveFilter] = useState(false)

  const [querySearch, setQuerySearch] = useState<string>('')
  const [queryCity, setQueryCity] = useState<string>('')
  const [queryProfession, setQueryProfession] = useState<string>('')

  const queryClient = useQueryClient()

  const router = useRouter()

  const [searchMain, setSearchMain] = useState<string>('')
  const [city, setCity] = useState<string>('')

  const { data: search, isLoading } = useQuery({
    queryKey: ['searchVacancies', searchMain, city],
    queryFn: async () => {
      const response = await VacancyService.getSuggest(searchMain, city)
      return response.data
    },
    enabled: !!city || !!searchMain
  })

  useEffect(() => {
    const querySearch = router.query.search as string
    const queryCity = router.query.city as string
    const queryProfession = router.query.profession as string
    setQueryProfession(queryProfession)
    setQuerySearch(querySearch)
    setSearchMain(querySearch)

    setQueryCity(queryCity)
    setCity(queryCity)
  }, [router])

  return (
    <SiteLayout background={'#F6FAFF'}>
      <div className={styles.vacancies}>
        <section className={[styles.vacancies__head, styles.head].join(' ')}>
          <div className="head__container">
            <div className={styles.head__wrapper}>
              <h1 className={styles.head__title}>Каталог вакансий</h1>
              <p className={styles.head__subTitle}>Мы собрали для Вас все вакансии, которые имеются у нас на платформе.</p>
              {querySearch && (
                <div className={styles.head__resultSearch}>
                  <span>Вакансии {querySearch}</span>
                </div>
              )}
              <div className={styles.search}>
                <div className={styles.search__block}>
                  <div className={styles.search__input}>
                    <div className={styles.search__inputBlock}>
                      <div className={styles.search__icons}>
                        <BiSearchAlt style={{ color: '#BCBCBC' }} size={20} />
                      </div>
                      <input
                        onChange={e => {
                          setSearchMain(e.target.value)
                          setIsShowSearchTitle(true)
                          queryClient.invalidateQueries({ queryKey: ['searchVacancies', searchMain, city] })
                        }}
                        value={searchMain}
                        type="text"
                        placeholder="Название или ключевые слова"
                      />

                      <div
                        onClick={() => setSearchMain('')}
                        className={
                          searchMain ? styles.search__resetSearch : [styles.search__resetSearch, styles.search__resetSearch_unactive].join(' ')
                        }
                      >
                        <RxCross1 />
                      </div>
                      <div
                        ref={refSearchTitle}
                        className={
                          isShowSearchTitle
                            ? [styles.search__list, styles.search__list_active].join(' ')
                            : [styles.search__list, styles.search__list_unactive].join(' ')
                        }
                      >
                        <div className={styles.search__listWrapper}>
                          <ul className={styles.search__items}>
                            {search?.map((elem, index) => {
                              return (
                                <li onClick={() => setIsShowSearchTitle(false)} key={index} className={styles.search__item}>
                                  <Link href={{ query: { ...router.query, search: elem.title } }} replace={true} className={styles.search__link}>
                                    {elem.title}
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

                    <div className={[styles.search__inputBlock, styles.search__inputBlock_city].join(' ')}>
                      <div className={styles.search__icons}>
                        <FaMapMarkerAlt style={{ color: '#B7B7B7' }} />
                      </div>
                      <input
                        onChange={e => {
                          setCity(e.target.value)
                          setIsShowSearchCity(true)
                          queryClient.invalidateQueries({ queryKey: ['searchVacancies', searchMain, city] })
                        }}
                        value={city}
                        type="text"
                        placeholder="Город"
                      />

                      <div
                        onClick={() => setCity('')}
                        className={city ? styles.search__resetSearch : [styles.search__resetSearch, styles.search__resetSearch_unactive].join(' ')}
                      >
                        <RxCross1 />
                      </div>
                      <div
                        ref={refSearchCity}
                        className={
                          isShowSearchCity
                            ? [styles.search__list, styles.search__listCity_active].join(' ')
                            : [styles.search__list, styles.search__listCity_unactive].join(' ')
                        }
                      >
                        <div className={styles.search__listWrapper}>
                          <ul className={styles.search__items}>
                            {search?.map((elem, index) => {
                              return (
                                <li onClick={() => setIsShowSearchCity(false)} key={index} className={styles.search__item}>
                                  <Link href={{ query: { ...router.query, city: elem.city } }} replace={true} className={styles.search__link}>
                                    {elem.city}
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

                  <div className={[styles.search__button, styles.search__button_filter].join(' ')} onClick={() => setActiveFilter(true)}>
                    <LuSettings2 size={20} style={{ color: '#3490DF' }} />
                  </div>
                  <Link
                    href={{ query: { ...router.query, search: searchMain, city: city } }}
                    onClick={() => {
                      setIsShowSearchTitle(false)
                      setIsShowSearchCity(false)
                    }}
                    className={[styles.search__button, styles.search__button_search].join(' ')}
                  >
                    Найти
                  </Link>
                </div>
              </div>
              <div className={styles.head__resetFilters}>
                {queryCity || querySearch ? (
                  <div
                    className={styles.head__resetFilter}
                    onClick={() => {
                      const query: any = { ...router.query }
                      delete query.city
                      delete query.search

                      router.push({ pathname: 'vacancies', query: query })
                      setSearchMain('')
                      setCity('')
                    }}
                  >
                    <span> Сбросить поиск</span>
                    <AiOutlineClose size={18} style={{ color: '#BCBCBC' }} />
                  </div>
                ) : null}
                {router.query.tags || router.query.experience || router.query.timetable || router.query.education ? (
                  <div
                    className={styles.head__resetFilter}
                    onClick={() => {
                      const query: any = { ...router.query }
                      delete query.tags
                      delete query.experience
                      delete query.timetable
                      delete query.education

                      router.push({ pathname: 'vacancies', query: query })
                      setSearchMain('')
                      setCity('')
                    }}
                  >
                    <span>Сбросить фильтры</span>
                    <AiOutlineClose size={18} style={{ color: '#BCBCBC' }} />
                  </div>
                ) : null}
                {queryProfession ? (
                  <div
                    className={styles.head__resetFilter}
                    onClick={() => {
                      const query: any = {
                        ...router.query
                      }
                      delete query.profession
                      router.push({ pathname: 'vacancies', query: query })
                    }}
                  >
                    <span>Сбросить профессию</span>
                    <AiOutlineClose size={18} style={{ color: '#BCBCBC' }} />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
        <FilterModal active={activeFilter} setActive={setActiveFilter} />
        <RibbonVacancies vacancies={vacancies} totalPages={totalPages} countVacanciesReturn={countVacanciesReturn} />
      </div>
    </SiteLayout>
  )
}

export default VacanciesList
