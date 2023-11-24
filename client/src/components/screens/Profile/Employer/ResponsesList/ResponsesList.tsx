import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import styles from './ResponsesList.module.scss'

import LoadingDots from '@/components/elements/Loading/LoadingDots'
import LoadingSpinner from '@/components/elements/Loading/LoadingSpinner'
import ResumeCard from '@/components/elements/ResumeCard/ResumeCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import NoElements from '@/components/ui/NoElements/NoElements'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'
import SortList from '@/components/ui/SortList/SortList'

import { IResponsesStatus } from '@/core/services/responses/response.interface'

import { INVITATION_RESPONSES, REFUSAL_RESPONSES } from '@/core/constants/sort-response'
import { useOutside } from '@/core/hooks/useOutside'
import { ResponsesService } from '@/core/services/responses/responses.service'

import { GoDotFill } from 'react-icons/go'
import { IoReturnDownBackOutline } from 'react-icons/io5'

const ResponsesList: FC = () => {
  const { ref, isShow, setIsShow } = useOutside(false)
  const [vacancyId, setVacancyId] = useState<string | undefined>(undefined)
  const [queryParam, setQueryParam] = useState<string | undefined>(undefined)

  const router = useRouter()
  const queryClient = useQueryClient()

  useEffect(() => {
    const id = router.query.id as string
    const query = router.query.show as string
    setVacancyId(id)
    setQueryParam(query)
    queryClient.removeQueries({ queryKey: ['responsesList', vacancyId, queryParam] })
  }, [router])

  const { data: responsesData, isLoading: isLoadingResume } = useQuery({
    queryKey: ['responsesList', vacancyId, queryParam],
    queryFn: async () => {
      const response = await ResponsesService.getByIdVacancy(vacancyId, queryParam)
      return response.data
    },
    enabled: !!vacancyId
  })

  const mutationStatus = useMutation({
    mutationKey: ['responsesStatus'],
    mutationFn: async (updateData: { id: number | undefined; statusData: IResponsesStatus }) => {
      const { id, statusData } = updateData
      const response = await ResponsesService.updateStatus(id, statusData)
      queryClient.invalidateQueries({ queryKey: ['responsesList'] })
      return response
    }
  })

  const sortResponsesList = [
    {
      name: 'всех',
      href: `/profile/responses/${vacancyId}`
    },
    {
      name: 'приглашенных',
      href: `/profile/responses/${vacancyId}/?show=interview`
    },
    {
      name: 'отказанных',
      href: `/profile/responses/${vacancyId}/?show=rejected`
    },
    {
      name: 'ожидающих',
      href: `/profile/responses/${vacancyId}/?show=wait`
    }
  ]

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.responses}>
        <div className="responses__container">
          <div className={styles.responses__wrapper}>
            <div className={styles.responses__header}>
              <ProfileTitle title={`Отклики на вакансию`} />
              <div onClick={() => router.replace('/profile/my-vacancies')} className={styles.responses__backList}>
                <IoReturnDownBackOutline size={20} />
                <span>К списку вакансий</span>
              </div>
            </div>

            <div className={styles.responses__filter}>
              <div className={styles.responses__wrapperFilter}>
                <div className={styles.responses__count}>{responsesData?.count} резюме</div>
                <div className={styles.responses__sort} ref={ref}>
                  <SortList title={'Показать'} data={sortResponsesList} active={isShow} setActive={setIsShow} />
                </div>
              </div>
            </div>

            <div className={styles.responses__list}>
              {isLoadingResume ? (
                <LoadingSpinner />
              ) : responsesData && responsesData.responses.length > 0 ? (
                responsesData?.responses.map((resume, index) => {
                  return (
                    <div key={index} className={styles.responses__item}>
                      <div className={styles.responses__panelControl}>
                        <div className={styles.responses__panelWrapper}>
                          <div className={styles.responses__panelActions}>
                            <div
                              onClick={() => {
                                mutationStatus.mutate({ id: resume.id, statusData: { status: INVITATION_RESPONSES } })
                              }}
                              className={styles.responses__interview}
                            >
                              Пригласить на собеседование
                            </div>
                            <div
                              onClick={() => {
                                mutationStatus.mutate({ id: resume.id, statusData: { status: REFUSAL_RESPONSES } })
                              }}
                              className={styles.responses__reject}
                            >
                              Отклонить
                            </div>
                          </div>
                          <div className={styles.responses__panelStatus}>
                            {resume.status == 'На рассмотрении' ? (
                              <>
                                <GoDotFill size={20} style={{ color: '#FCA50F' }} />
                                <span>{resume.status}</span>
                              </>
                            ) : resume.status == 'Отклонено' ? (
                              <>
                                <GoDotFill size={20} style={{ color: '#FC0800' }} />
                                <span>{resume.status}</span>
                              </>
                            ) : (
                              <>
                                <GoDotFill size={20} style={{ color: '#00EB1F' }} />
                                <span>{resume.status}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <ResumeCard resume={resume} />
                    </div>
                  )
                })
              ) : responsesData && responsesData.responses.length == 0 && queryParam ? (
                <NoElements message="Резюме не найдены по такому параметру" />
              ) : (
                <NoElements message="На эту вакансию пока что никто не откликнулся" />
              )}
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default ResponsesList
