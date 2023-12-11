import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import styles from './AboutVacancy.module.scss'

import TextToHTML from '@/components/elements/EditText/TextToHTML'
import LoadingDots from '@/components/elements/Loading/LoadingDots'
import VacanciesCard from '@/components/elements/Vacancy/VacanciesCard/VacanciesCard'
import VacanciesTag from '@/components/elements/Vacancy/VacanciesTag/VacanciesTag'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import { IResponsesList } from '@/core/services/responses/response.interface'
import { ISimilarResponse, IVacancyCard, IVacancyResponse } from '@/core/services/vacancy/vacancy.interface'
import { IFavorite } from '@/core/types/favorite.interface'
import { IResponses } from '@/core/types/responses.interface'

import { useAuth } from '@/core/hooks/useAuth'
import { useCheckRole } from '@/core/hooks/useCheckRole'
import { ResponsesService } from '@/core/services/responses/responses.service'
import { VacancyService } from '@/core/services/vacancy/vacancy.service'
import { formatDate } from '@/core/utils/format-date'
import { formatPrice } from '@/core/utils/format-price'

import { FaStar } from 'react-icons/fa'
import { IoMdHeart } from 'react-icons/io'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'
import { PiWarningThin } from 'react-icons/pi'

import logo from 'public/Companies/logoCompany.svg'

const AboutVacancy: FC<{ vacancy: IVacancyResponse }> = ({ vacancy }) => {
  const router = useRouter()
  const { user } = useAuth()
  const role = useCheckRole()
  const queryClient = useQueryClient()

  const [skillArray, setSkillArray] = useState<string[]>([])

  useEffect(() => {
    if (vacancy.skills) setSkillArray(vacancy.skills.split(',').map(skills => skills.trim()))
  }, [vacancy])

  //===== SIMILAR =========================================

  const { data: similarVacancies, isLoading: similarVacanciesLoading } = useQuery<IVacancyCard[]>({
    queryKey: ['similarVacancies'],
    queryFn: async () => {
      const similarData = {
        professionId: vacancy.professionId,
        city: vacancy.city
      }
      const responses = await VacancyService.getSimilar(similarData)
      return responses.data
    }
  })

  //===== RESPONSES =========================================

  const [activeResponse, setActiveResponse] = useState<IResponsesList | undefined>(undefined)

  const mutationResponse = useMutation({
    mutationKey: ['myResponses'],
    mutationFn: async (data: IResponses) => {
      const response = await ResponsesService.create(data)
      queryClient.invalidateQueries({ queryKey: ['myResponses'] })
    }
  })

  const { data: myResponses, isLoading: myResponsesLoading } = useQuery({
    queryKey: ['myResponses'],
    queryFn: async () => {
      const responses = await ResponsesService.getMyResponses(user?.id, undefined)
      return responses.data
    },
    enabled: !!user
  })

  useEffect(() => {
    const activeVacancy = myResponses?.filter(response => response.vacancyId === vacancy.id)
    setActiveResponse(activeVacancy?.[0])
  }, [myResponses, vacancy.id])

  //===== FAVORITES =========================================

  const [activeFavorite, setActiveFavorite] = useState<IFavorite | undefined>(undefined)

  const mutationCreateFavorites = useMutation({
    mutationKey: ['myFavorites'],
    mutationFn: async (data: IFavorite) => {
      const response = await VacancyService.createFavorite(data)
      queryClient.invalidateQueries({ queryKey: ['myFavorites'] })
    }
  })

  const mutationDeleteFavorites = useMutation({
    mutationKey: ['myFavorites'],
    mutationFn: async (id: number | undefined) => {
      const response = await VacancyService.deleteFavorite(id)
      queryClient.invalidateQueries({ queryKey: ['myFavorites'] })
    }
  })

  const { data: myFavorites } = useQuery({
    queryKey: ['myFavorites'],
    queryFn: async () => {
      const responses = await VacancyService.getFavorites(user?.id)
      return responses.data
    },
    enabled: !!user
  })

  useEffect(() => {
    const activeFavorite = myFavorites?.filter(favorite => favorite.vacancyId === vacancy.id)
    setActiveFavorite(activeFavorite?.[0])
  }, [myFavorites, vacancy.id])

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.vacancies}>
        <div className={[styles.vacancies__about, styles.about].join(' ')}>
          <div className="about__container">
            <div className={styles.about__wrapper}>
              <div className={styles.about__info}>
                <div className={styles.about__name}>{vacancy.title}</div>
                <div className={styles.about__header}>
                  <div className={styles.about__requirements}>
                    <div className={styles.about__item}>
                      <h3 className={styles.about__item_title}>Опыт работы:</h3>
                      <p className={styles.about__item_subTitle}>{vacancy.workExperience}</p>
                    </div>
                    <div className={styles.about__item}>
                      <h3 className={styles.about__item_title}>Тип занятости:</h3>
                      <p className={styles.about__item_subTitle}>{vacancy.employmentType}</p>
                    </div>
                    <div className={styles.about__item}>
                      <h3 className={styles.about__item_title}>График работы:</h3>
                      <p className={styles.about__item_subTitle}>{vacancy.workTimetable}</p>
                    </div>
                    <div className={styles.about__item}>
                      <h3 className={styles.about__item_title}>Образование</h3>
                      <p className={styles.about__item_subTitle}>{vacancy.education}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.about__tags}>
                  <VacanciesTag tarif={vacancy.tarifId} tags={vacancy.tags} />
                </div>
                <div className={styles.about__dateStart}>Вакансия опубликована {formatDate(vacancy.dateStart)}</div>
                <div className={styles.about__description}>
                  <TextToHTML text={vacancy.descMain} />
                </div>
                <div className={styles.about__skills}>
                  <h3 className={styles.about__title}>Ключевые навыки:</h3>
                  <div className={styles.about__skillsBlock}>
                    {skillArray.map((skill, index) => {
                      return (
                        <p key={index} className={styles.about__skillsItem}>
                          {skill}
                        </p>
                      )
                    })}
                  </div>
                </div>
                <div className={styles.about__map}>
                  <div className={styles.about__title}>Адрес:</div>
                  <p>
                    {vacancy.city}, {vacancy.adress}
                  </p>

                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A1d4d9c1c194c130a58410eb949d712316553ac943af0a52a114b4d263ab7e0f3&amp;source=constructor"
                    width="100%"
                    height="325"
                  ></iframe>
                </div>
              </div>
              <aside className={styles.about__sideBar}>
                {vacancy.minSalary && vacancy.maxSalary ? (
                  <div className={styles.about__salary}>
                    {formatPrice(vacancy.minSalary)} - {formatPrice(vacancy.maxSalary)} руб.
                  </div>
                ) : vacancy.minSalary && !vacancy.maxSalary ? (
                  <div className={styles.about__salary}>от {formatPrice(vacancy.minSalary)} руб.</div>
                ) : !vacancy.minSalary && vacancy.maxSalary ? (
                  <div className={styles.about__salary}>до {formatPrice(vacancy.maxSalary)} руб.</div>
                ) : !vacancy.minSalary && !vacancy.maxSalary ? (
                  <div className={styles.about__salary}>по договоренности</div>
                ) : null}
                <div className={styles.about__control}>
                  {role == '_JOBSEEKER_' ? (
                    <div
                      onClick={e => {
                        e.stopPropagation()
                        if (!user) router.push('/auth/login')
                        else {
                          const vacancyId = vacancy.id
                          const userId = user?.id
                          const createdAt = new Date()
                          const data = { userId, vacancyId, createdAt }
                          mutationResponse.mutate(data)
                        }
                      }}
                      className={[styles.about__button, styles.about__button_responds].join(' ')}
                    >
                      {myResponsesLoading ? (
                        <LoadingDots color="#fff" />
                      ) : activeResponse ? (
                        <Link href={'/profile/j_responses'}>Мои отклики</Link>
                      ) : (
                        <div>{mutationResponse.isPending ? <LoadingDots color="#fff" /> : 'Откликнуться'}</div>
                      )}
                    </div>
                  ) : null}
                  {activeResponse ? <div className={styles.about__dateResponse}>Вы откликнулись {formatDate(activeResponse.createdAt)}</div> : null}

                  {activeFavorite ? (
                    <div
                      onClick={() => {
                        if (user) mutationDeleteFavorites.mutate(activeFavorite.id)
                      }}
                      className={[styles.about__button, styles.about__button_favorites, styles.about__button_favoritesActive].join(' ')}
                    >
                      <IoMdHeart size={20} />
                      <span>В избранном</span>
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        if (!user) router.push('/auth/login')
                        const vacancyId = vacancy.id
                        const userId = user?.id
                        const data = { userId, vacancyId }
                        mutationCreateFavorites.mutate(data)
                      }}
                      className={[styles.about__button, styles.about__button_favorites].join(' ')}
                    >
                      <IoMdHeart size={20} />
                      <span>Добавить в избранное</span>
                    </div>
                  )}

                  <div className={[styles.about__button, styles.about__button_report].join(' ')}>
                    <PiWarningThin size={20} />
                    <span>Пожаловаться</span>
                  </div>
                  <div className={styles.about__companyCard}>
                    <div className={styles.about__companyWrapper}>
                      <div className={styles.about__companyHeader}>
                        <div className={styles.about__companyName}>
                          <IoShieldCheckmarkSharp style={{ color: '#3490DF' }} />
                          <Link href={`/company/${vacancy.employerId}`}>{vacancy.companyName}</Link>
                        </div>
                        <div className={styles.about__companyLogo}>
                          <Image src={logo} alt={'Логотип'} />
                        </div>
                      </div>
                      <div className={styles.about__contactItem}>
                        <span className={styles.about__contactItem_title}>Контактное лицо:</span> <div>{vacancy.fullName}</div>
                      </div>
                      <div className={styles.about__contactItem}>
                        <span className={styles.about__contactItem_title}>Номер:</span> {vacancy.phoneNumber}
                      </div>
                      {vacancy.contact ? (
                        <div className={styles.about__contactItem}>
                          <span className={styles.about__contactItem_title}>Доп. контакт:</span> {vacancy.contact}
                        </div>
                      ) : null}
                      <div className={styles.about__reiting}>
                        <FaStar style={{ color: '#F4A815' }} size={15} />
                        <FaStar style={{ color: '#F4A815' }} size={15} />
                        <FaStar style={{ color: '#F4A815' }} size={15} />
                        <FaStar style={{ color: '#F4A815' }} size={15} />
                        <FaStar style={{ color: '#F4A815' }} size={15} />
                        <p>10 отзывов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        {similarVacancies && similarVacancies?.length > 0 ? (
          <div className={[styles.vacancies__ribbon, styles.ribbon].join(' ')}>
            <div className="ribbon__container">
              <div className={styles.ribbon__wrapper}>
                <div className={styles.ribbon__content}>
                  <div className={styles.ribbon__title}>Рекомендуем откликнуться:</div>
                  <div className={styles.ribbon__vacancies}>
                    {similarVacancies?.map((vacancy, index) => {
                      return <VacanciesCard key={index} vacancy={vacancy} />
                    })}
                  </div>
                </div>
                <aside className={styles.ribbon__aside}></aside>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </SiteLayout>
  )
}

export default AboutVacancy
