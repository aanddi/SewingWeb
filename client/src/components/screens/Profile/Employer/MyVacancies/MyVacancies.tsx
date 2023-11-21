import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './MyVacancies.module.scss'

import LoadingDots from '@/components/elements/Loading/LoadingDots'
import LoadingSpinner from '@/components/elements/Loading/LoadingSpinner'
import WarningModal from '@/components/elements/Modal/WarningModal/WarningModal'
import VacanciesCard from '@/components/elements/Vacancy/VacanciesCard/VacanciesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import { IMyVacancy } from '@/core/services/vacancy/vacancy.interface'

import { useEmployer } from '@/core/hooks/useEmployer'
import { VacancyService } from '@/core/services/vacancy/vacancy.service'
import { formatDate } from '@/core/utils/format-date'

import { GoDotFill } from 'react-icons/go'
import { IoMdAddCircleOutline } from 'react-icons/io'

const MyVacancies: FC = () => {
  //======== Warning modal ===========
  const [modalAction, setModalAction] = useState<'delete' | 'unpublication' | null>(null)
  const [modalActive, setModalActive] = useState(false)
  const [targetId, setTargetId] = useState<number | undefined>(undefined)

  const handleAction = (type: 'delete' | 'unpublication', id: number | undefined) => {
    setModalAction(type)
    setTargetId(id)
    setModalActive(true)
  }

  const closeModal = () => {
    setModalActive(false)
    setTargetId(undefined)
  }

  //======== useQuery ===========
  const { data: employer, isLoading: isLoadingEmployer } = useEmployer()

  const { data: vacancies, isLoading: isLoadingVacancies } = useQuery<IMyVacancy[]>({
    queryKey: ['vacancies', employer?.id],
    queryFn: async () => {
      const response = VacancyService.getMyVacancies(employer?.id)
      return response
    },
    enabled: !!employer
  })

  //======== useMutation ===========
  const queryClient = useQueryClient()

  const mutationUnpublication = useMutation({
    mutationKey: ['vacancies'],
    mutationFn: async (id: number | undefined) => {
      const response = await VacancyService.unpublication(id)
    },
    onSuccess: () => {
      setModalActive(false)
      setTargetId(undefined)
      queryClient.invalidateQueries({ queryKey: ['vacancies'] })
    }
  })

  const mutationDelete = useMutation({
    mutationKey: ['vacancies'],
    mutationFn: async (id: number | undefined) => {
      const response = await VacancyService.deleteMyVacancy(id)
    },
    onSuccess: () => {
      setModalActive(false)
      setTargetId(undefined)
      queryClient.invalidateQueries({ queryKey: ['vacancies'] })
    }
  })

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.vacancies}>
        <div className="vacancies__container">
          <div className={styles.vacancies__wrapper}>
            <div className={styles.vacancies__header}>
              <div>
                <ProfileTitle title={'Мои вакансии'} />
              </div>
              <Link href={'/profile/e_add-vacancy'} className={styles.vacancies__add}>
                <IoMdAddCircleOutline size={16} style={{ color: '#2c8acc' }} />
                <span>Создать</span>
              </Link>
            </div>
            {isLoadingEmployer || isLoadingVacancies ? (
              <LoadingSpinner />
            ) : vacancies?.length ? (
              <div className={styles.vacancies__list}>
                {vacancies?.map((elem, index) => {
                  return (
                    <div key={index} className={styles.vacancies__listItem}>
                      <div className={styles.vacancies__controlPanel}>
                        <div className={styles.vacancies__panelWrapper}>
                          <div className={styles.vacancies__buttons}>
                            <Link href={'/'} className={[styles.vacancies__item, styles.vacancies__item_responses].join(' ')}>
                              Отклики
                            </Link>
                            {elem.status ? (
                              <>
                                <Link
                                  href={`/profile/e_edit-vacancy/${elem.id}`}
                                  className={[styles.vacancies__item, styles.vacancies__item_edit].join(' ')}
                                >
                                  Редактировать
                                </Link>
                                <div
                                  onClick={() => handleAction('unpublication', elem.id)}
                                  className={[styles.vacancies__item, styles.vacancies__item_toarchive].join(' ')}
                                >
                                  Снять с публикации
                                </div>
                              </>
                            ) : (
                              <>
                                <Link
                                  href={`/profile/e_edit-vacancy/${elem.id}`}
                                  className={[styles.vacancies__item, styles.vacancies__item_edit].join(' ')}
                                >
                                  Опубликовать
                                </Link>
                                <div
                                  onClick={() => handleAction('delete', elem.id)}
                                  className={[styles.vacancies__item, styles.vacancies__item_toarchive].join(' ')}
                                >
                                  Удалить
                                </div>
                              </>
                            )}
                          </div>

                          <div className={styles.vacancies__dates}>
                            <p className={styles.vacancies__date}>Начало: {formatDate(elem.dateStart)}</p>
                            <p className={styles.vacancies__date}>Конец: {formatDate(elem.dateEnd)}</p>
                          </div>
                          <div className={styles.vacancies__status}>
                            {elem.status ? (
                              <div className={styles.vacancies__statusItem}>
                                <GoDotFill size={20} style={{ color: '#00EB1F' }} />
                                <span>Активная</span>
                              </div>
                            ) : (
                              <div className={styles.vacancies__statusItem}>
                                <GoDotFill size={20} style={{ color: '#EB0C00' }} />
                                <span>Не активная</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <VacanciesCard vacancy={elem} />
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className={styles.vacancies__notVacancies}>У вас нет вакансий</p>
            )}
          </div>
          <WarningModal
            message={
              modalAction === 'unpublication'
                ? 'Если это платная вакансия, вам придется снова оплатить тариф, чтобы опубликовать.'
                : 'При удалении, вы потеряете базу откликов на эту вакансию.'
            }
            active={modalActive}
            setActive={closeModal}
          >
            {modalAction === 'delete' && (
              <div
                className={[styles.vacancies__item, styles.vacancies__item_toarchive].join(' ')}
                onClick={async () => mutationDelete.mutate(targetId)}
              >
                {mutationDelete.isPending ? <LoadingDots /> : 'Удалить'}
              </div>
            )}

            {modalAction === 'unpublication' && (
              <div
                className={[styles.vacancies__item, styles.vacancies__item_toarchive].join(' ')}
                onClick={() => mutationUnpublication.mutate(targetId)}
              >
                {mutationUnpublication.isPending ? <LoadingDots /> : 'Снять с публикации'}
              </div>
            )}
          </WarningModal>
        </div>
      </div>
    </SiteLayout>
  )
}

export default MyVacancies
