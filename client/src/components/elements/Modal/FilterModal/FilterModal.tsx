import { useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useState } from 'react'

import styles from './FilterModal.module.scss'

import { VacancyService } from '@/core/services/vacancy/vacancy.service'
import { workTimetable } from '@/core/utils/select-resume-data'
import { education, tagsList, workExperience } from '@/core/utils/select-vacancy-data'

import LoadingDots from '../../Loading/LoadingDots'

import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const FilterModal: FC<PropsWithChildren<Props>> = ({ children, active, setActive }) => {
  // блок скролла
  useEffect(() => {
    const headerElement = document.getElementById('header')
    const scrollbarWidth = window.innerWidth - document.body.clientWidth

    if (active) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`

      if (headerElement) {
        headerElement.style.right = `${scrollbarWidth}px`
      }
    } else {
      document.body.style.overflow = 'initial'
      document.body.style.paddingRight = '0px'

      if (headerElement) {
        headerElement.style.right = '0px'
      }
    }
  }, [active])

  //==========================
  const router = useRouter()

  const [tagsFilter, setTagsFilter] = useState<string[]>([])
  const [workExperienceFilter, setWorkExperienceFilter] = useState<string[]>([])
  const [workTimetableFilter, setWorkTimetableFilter] = useState<string[]>([])
  const [educationFilter, setEducationFilter] = useState<string[]>([])

  useEffect(() => {
    const queryTags = router.query.tags as string
    const queryWorkExperience = router.query.experience as string
    const queryWorkTimetable = router.query.timetable as string
    const queryEducation = router.query.education as string
    setTagsFilter(queryTags ? queryTags.split(',') : [])
    setWorkExperienceFilter(queryWorkExperience ? queryWorkExperience.split(',') : [])
    setWorkTimetableFilter(queryWorkTimetable ? queryWorkTimetable.split(',') : [])
    setEducationFilter(queryEducation ? queryEducation.split(',') : [])
  }, [router])

  const handleWorkExperienceClick = (label: string) => {
    if (workExperienceFilter.includes(label)) {
      setWorkExperienceFilter(workExperienceFilter.filter(item => item !== label))
    } else {
      setWorkExperienceFilter([...workExperienceFilter, label])
    }
  }

  const handleTagsClick = (label: string) => {
    if (tagsFilter.includes(label)) {
      setTagsFilter(tagsFilter.filter(item => item !== label))
    } else {
      setTagsFilter([...tagsFilter, label])
    }
  }

  const handleWorkTimetableClick = (label: string) => {
    if (workTimetableFilter.includes(label)) {
      setWorkTimetableFilter(workTimetableFilter.filter(item => item !== label))
    } else {
      setWorkTimetableFilter([...workTimetableFilter, label])
    }
  }

  const handleEducationClick = (label: string) => {
    if (educationFilter.includes(label)) {
      setEducationFilter(educationFilter.filter(item => item !== label))
    } else {
      setEducationFilter([...educationFilter, label])
    }
  }

  const handleResetFilters = () => {
    setTagsFilter([])
    setWorkExperienceFilter([])
    setWorkTimetableFilter([])
    setEducationFilter([])
  }

  const [totalFilter, setTotalFilter] = useState(0)
  const queryClient = useQueryClient()

  const { data: countSearchFilter, isLoading } = useQuery({
    queryKey: ['countFilter', educationFilter, workExperienceFilter, tagsFilter, workTimetableFilter],
    queryFn: async () => {
      const response = await VacancyService.getCountFilter(
        educationFilter.join(','),
        workExperienceFilter.join(','),
        tagsFilter.join(','),
        workTimetableFilter.join(',')
      )
      return response.data
    }
  })

  useEffect(() => {
    setTotalFilter(tagsFilter.length + workExperienceFilter.length + workTimetableFilter.length + educationFilter.length)

    queryClient.invalidateQueries({ queryKey: ['countFilter', educationFilter, workExperienceFilter, tagsFilter, workTimetableFilter] })
  }, [tagsFilter, workExperienceFilter, workTimetableFilter, educationFilter])

  return (
    <div className={active ? [styles.modal, styles.modal__active].join(' ') : styles.modal} onClick={() => setActive(false)}>
      <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
        <div className={styles.modal__close} onClick={() => setActive(false)}>
          <AiOutlineClose size={20} />
        </div>
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__title}>
            <span>Фильтры</span>
            <span className={styles.modal__countFilter}>{totalFilter}</span>
          </div>
          <div className={styles.modal__filters}>
            <div className={styles.modal__block}>
              <div className={styles.modal__blockTitle}>Опыт работы</div>

              <div className={styles.modal__buttons}>
                {workExperience.map((elem, index) => {
                  const isActive = workExperienceFilter.includes(elem.label)
                  return (
                    <div
                      key={index}
                      onClick={() => handleWorkExperienceClick(elem.label)}
                      className={isActive ? [styles.modal__button, styles.modal__button_active].join(' ') : styles.modal__button}
                    >
                      {elem.label}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className={styles.modal__block}>
              <div className={styles.modal__blockTitle}>График работы</div>
              <div className={styles.modal__buttons}>
                {workTimetable.map((elem, index) => {
                  const isActive = workTimetableFilter.includes(elem.label)
                  return (
                    <div
                      key={index}
                      onClick={() => handleWorkTimetableClick(elem.label)}
                      className={isActive ? [styles.modal__button, styles.modal__button_active].join(' ') : styles.modal__button}
                    >
                      {elem.label}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className={styles.modal__block}>
              <div className={styles.modal__blockTitle}>Образование</div>
              <div className={styles.modal__buttons}>
                {education.map((elem, index) => {
                  const isActive = educationFilter.includes(elem.label)

                  return (
                    <div
                      key={index}
                      onClick={() => handleEducationClick(elem.label)}
                      className={isActive ? [styles.modal__button, styles.modal__button_active].join(' ') : styles.modal__button}
                    >
                      {elem.label}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className={styles.modal__block}>
              <div className={styles.modal__blockTitle}>Тэги</div>
              <div className={styles.modal__buttons}>
                {tagsList.map((elem, index) => {
                  const isActive = tagsFilter.includes(elem.value)
                  return (
                    <div
                      key={index}
                      onClick={() => handleTagsClick(elem.value)}
                      className={isActive ? [styles.modal__button, styles.modal__button_active].join(' ') : styles.modal__button}
                    >
                      {elem.label}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className={styles.modal__footer}>
            <button
              onClick={() => {
                setActive(false)
                const query: any = {}
                if (tagsFilter.length > 0) {
                  query.tags = tagsFilter.join(',')
                }
                if (workExperienceFilter.length > 0) {
                  query.experience = workExperienceFilter.join(',')
                }
                if (workTimetableFilter.length > 0) {
                  query.timetable = workTimetableFilter.join(',')
                }
                if (educationFilter.length > 0) {
                  query.education = educationFilter.join(',')
                }

                router.push({
                  pathname: 'vacancies',
                  query: query
                })
              }}
              className={styles.modal__search}
            >
              {isLoading ? (
                <LoadingDots color="#fff" />
              ) : (
                <span>
                  Смотреть <span>{countSearchFilter}</span> вакансий
                </span>
              )}
            </button>

            <div className={styles.modal__reset} onClick={handleResetFilters}>
              Сбросить фильтры
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterModal
