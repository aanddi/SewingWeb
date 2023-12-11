import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import styles from './RibbonVacancies.module.scss'

import { IRibbonResponse } from '@/core/services/vacancy/vacancy.interface'

import FilterModal from '../Modal/FilterModal/FilterModal'
import Pagination from '../Pagination/Pagination'

import { FaArrowUpLong } from 'react-icons/fa6'

import head_img1 from 'public/Employers/head_img1.svg'
import ad from 'public/ad/ad.png'

const RibbonVacancies: FC<IRibbonResponse> = ({ vacancies, totalPages, countVacanciesReturn }, settingsAd?: boolean) => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState(false)
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

  const [totalFilter, setTotalFilter] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const queryTags = router.query.tags as string
    const queryWorkExperience = router.query.experience as string
    const queryWorkTimetable = router.query.timetable as string
    const queryEducation = router.query.education as string

    const newArrayTags = queryTags ? queryTags?.split(',').length : 0
    const newArrayExperience = queryWorkExperience ? queryWorkExperience?.split(',').length : 0
    const newArrayTimetable = queryWorkTimetable ? queryWorkTimetable?.split(',').length : 0
    const newArrayEducation = queryEducation ? queryEducation?.split(',').length : 0

    const totalFilterCount = newArrayTags + newArrayExperience + newArrayTimetable + newArrayEducation
    setTotalFilter(totalFilterCount)
  }, [router])

  console.log(totalFilter)

  return (
    <section className={styles.ribbon}>
      <div className="ribbon__container">
        <div className={styles.ribbon__wrapper}>
          {vacancies.length > 0 ? (
            <>
              <div className={styles.ribbon__vacansiesList}>
                <div className={styles.ribbon__vacansiesTop}>
                  <h3 className={styles.ribbon__vacansiesTop_count}>Найдено {countVacanciesReturn} вакансий</h3>
                  <div className={styles.ribbon__vacansiesTop_filter} onClick={() => setActiveFilter(true)}>
                    <span className={styles.ribbon__totalFilter}>{totalFilter ? totalFilter : '0'}</span> Фильтр
                  </div>
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
      <FilterModal active={activeFilter} setActive={setActiveFilter} />
    </section>
  )
}

export default RibbonVacancies
