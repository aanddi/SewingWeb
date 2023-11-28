import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import styles from './Home.module.scss'

import FilterModal from '@/components/elements/Modal/FilterModal/FilterModal'
import Pagination from '@/components/elements/Pagination/Pagination'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import { IRibbonResponse } from '@/core/services/vacancy/vacancy.interface'

import { FaArrowUpLong } from 'react-icons/fa6'
import { FcDocument } from 'react-icons/fc'
import { IoIosArrowDown } from 'react-icons/io'
import { LuSettings2 } from 'react-icons/lu'

import ad from 'public/ad/ad.png'

const Home: FC<IRibbonResponse> = ({ vacancies, totalVacancies, totalResume, totalPages }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
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

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.home}>
        <section className={[styles.home__mainScreen, styles.mainScreen].join(' ')}>
          <div className="mainScreen__container">
            <div className={styles.mainScreen__wrapper}>
              <div className={styles.mainScreen__search}>
                <div className={styles.mainScreen__search_content}>
                  <div className={styles.mainScreen__search_input}>
                    <input type="text" placeholder="Должность или предприятие" />
                  </div>
                  <div onClick={() => setActiveFilter(true)} className={styles.mainScreen__search_filter}>
                    <LuSettings2 size={20} style={{ color: '#454B54' }} />
                  </div>
                  <div className={styles.mainScreen__search_button}>Найти</div>
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
                      <h3 className={styles.ribbon__vacansiesTop_count}>Найдено 5 вакансий</h3>
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
                    <FcDocument size={40} style={{ color: '#3490DF' }} />
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
