import { useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import styles from './Home.module.scss'

import LoadingDots from '@/components/elements/Loading/LoadingDots'
import FilterModal from '@/components/elements/Modal/FilterModal/FilterModal'
import Pagination from '@/components/elements/Pagination/Pagination'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import { IRibbonResponse } from '@/core/services/vacancy/vacancy.interface'

import { useOutside } from '@/core/hooks/useOutside'
import { VacancyService } from '@/core/services/vacancy/vacancy.service'

import { FaArrowUpLong } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import { LuSettings2 } from 'react-icons/lu'
import { RxCross1 } from 'react-icons/rx'

import head_img1 from 'public/Employers/head_img1.svg'
import ad from 'public/ad/ad.png'

const Home: FC<IRibbonResponse> = ({ vacancies, totalVacancies, totalResume, totalPages }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState(false)
  const { isShow: isShowSearch, setIsShow: setIsShowSearch, ref: refSearch } = useOutside(false)

  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleVisibility = () => {
    if (window.scrollY > 700) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const { data: vacancy } = useQuery({
    queryKey: ['vacancy'],
    queryFn: async () => {
      const prevResponse = await VacancyService.getRibbon(1)

      return prevResponse.data
    }
  })

  const [valueSearch, setValueSearch] = useState('')
  const [querySearch, setQuerySearch] = useState<string>('')
  const queryClient = useQueryClient()

  const { data: vacancySearch, isLoading: isSearchLoading } = useQuery({
    queryKey: ['vacancySuggest', valueSearch],
    queryFn: async () => {
      const response = await VacancyService.getSeggest(valueSearch)

      return response.data
    },
    enabled: !!valueSearch
  })

  useEffect(() => {
    const query = router.query.search as string
    setQuerySearch(query)

    if (!valueSearch) setIsShowSearch(false)

    queryClient.invalidateQueries({ queryKey: ['searchProfession', valueSearch] })
  }, [valueSearch, vacancySearch, router])

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.home}>
        <section className={[styles.home__mainScreen, styles.mainScreen].join(' ')}>
          <div className="mainScreen__container">
            <div className={styles.mainScreen__wrapper}>
              <div className={[styles.mainScreen__search, styles.search].join(' ')}>
                <div className={styles.search__content}>
                  <div className={styles.search__inputBlock}>
                    <input
                      type="text"
                      placeholder="Должность или город"
                      value={valueSearch}
                      onChange={e => {
                        setValueSearch(e.target.value)
                        setIsShowSearch(true)
                        queryClient.invalidateQueries({ queryKey: ['vacancySuggest', valueSearch] })
                      }}
                    />
                    <div
                      onClick={() => setValueSearch('')}
                      className={
                        valueSearch ? styles.search__resetSearch : [styles.search__resetSearch, styles.search__resetSearch_unactive].join(' ')
                      }
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
                    ></div>
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
                        {vacancySearch?.map((elem, index) => {
                          return (
                            <li onClick={() => setIsShowSearch(false)} key={index} className={styles.search__item}>
                              <Link href={{ query: { ...router.query, search: elem.title } }} replace={true} className={styles.search__link}>
                                {elem.title}
                              </Link>
                            </li>
                          )
                        })}
                        <div className={styles.search__loading}>
                          {isSearchLoading && <LoadingDots />}
                          {vacancySearch?.length === 0 && <div>Нет результатов</div>}
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div onClick={() => setActiveFilter(true)} className={styles.search__filter}>
                    <LuSettings2 size={20} style={{ color: '#454B54' }} />
                  </div>
                  <Link href={{ query: { ...router.query, search: valueSearch } }} className={styles.search__buttonSearch}>
                    Найти
                  </Link>
                </div>
                <Link href={'/employer'} className={styles.mainScreen__employee}>
                  Я ищу сотрудника
                </Link>
              </div>

              <div className={styles.mainScreen__bottom}>
                <div className={styles.mainScreen__statistics}>
                  <div className={styles.mainScreen__statistics_block}>
                    <h3 className={styles.mainScreen__statistics_count}>{totalVacancies}</h3>
                    <p className={styles.mainScreen__statistics_text}>вакансии</p>
                  </div>
                  <div className={styles.mainScreen__statistics_block}>
                    <h3 className={styles.mainScreen__statistics_count}>{totalResume}</h3>
                    <p className={styles.mainScreen__statistics_text}>резюме</p>
                  </div>
                </div>
                <div className={styles.mainScreen__arrow}>
                  <IoIosArrowDown style={{ color: '#fff' }} size={40} />
                </div>
                <Link href={'/profile/my-resume'} className={styles.mainScreen__button}>
                  Создать резюме
                </Link>
              </div>
            </div>
          </div>
          <FilterModal active={activeFilter} setActive={setActiveFilter} />
        </section>

        <section className={[styles.home__ribbon, styles.ribbon].join(' ')} id="vacancy">
          <div className="ribbon__container">
            <div className={styles.ribbon__wrapper}>
              {vacancies.length > 0 ? (
                <>
                  <div className={styles.ribbon__vacansiesList}>
                    <div className={styles.ribbon__vacansiesTop}>
                      <h3 className={styles.ribbon__vacansiesTop_count}>Найдено 4 вакансий</h3>
                      <div className={styles.ribbon__vacansiesTop_filter}>Фильтр</div>
                    </div>
                    <div className={styles.ribbon__content}>
                      <div className={styles.ribbon__vacancies}>
                        <Pagination vacanciesData={vacancies} totalPages={totalPages} />
                      </div>
                    </div>
                  </div>
                  <aside className={styles.ribbon__ad}>
                    <Link href="/employer">
                      <Image src={ad} alt={'Реклама'} />
                    </Link>
                  </aside>
                </>
              ) : (
                <div className={styles.ribbon__error}>
                  <div className={styles.ribbon__error_icon}>
                    <Image src={head_img1} alt={''} width={300} />
                  </div>
                  <div className={styles.ribbon__error_message}>
                    <span className={styles.ribbon__error_title}>Упс... не удалось найти вакансии.</span>
                    <span>Попробуйте изменить условия поиска или попробовать чуть позже.</span>
                  </div>
                </div>
              )}
            </div>
            {isVisible && (
              <div onClick={scrollToTop} className={styles.ribbon__top}>
                <FaArrowUpLong size={25} />
              </div>
            )}
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

export default Home
