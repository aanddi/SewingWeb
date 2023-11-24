import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import styles from './Responses.module.scss'

import LoadingDots from '@/components/elements/Loading/LoadingDots'
import LoadingSpinner from '@/components/elements/Loading/LoadingSpinner'
import WarningModal from '@/components/elements/Modal/WarningModal/WarningModal'
import VacanciesCard from '@/components/elements/Vacancy/VacanciesCard/VacanciesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import NoElements from '@/components/ui/NoElements/NoElements'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'
import SortList from '@/components/ui/SortList/SortList'

import { useAuth } from '@/core/hooks/useAuth'
import { useOutside } from '@/core/hooks/useOutside'
import { ResponsesService } from '@/core/services/responses/responses.service'

import { GoDotFill } from 'react-icons/go'

const Responses: FC = () => {
  const [activeWarning, setActiveWarning] = useState(false)
  const [targetId, setTargetId] = useState<number | undefined>(undefined)
  const [queryParam, setQueryParam] = useState<string | undefined>(undefined)

  const { ref, isShow, setIsShow } = useOutside(false)

  const queryClient = useQueryClient()

  const { user } = useAuth()

  const router = useRouter()

  useEffect(() => {
    const query = router.query.show as string
    setQueryParam(query)
    queryClient.invalidateQueries({ queryKey: ['myResponses', queryParam] })
  }, [router])

  const { data: myResponses, isLoading: myResponsesLoading } = useQuery({
    queryKey: ['myResponses', queryParam],
    queryFn: async () => {
      const responses = await ResponsesService.getMyResponses(user?.id, queryParam)
      return responses.data
    }
  })

  const mutationDelete = useMutation({
    mutationKey: ['myResponses'],
    mutationFn: async (id: number | undefined) => {
      const response = await ResponsesService.delete(id)
    },
    onSuccess: () => {
      setActiveWarning(false)
      setTargetId(undefined)
      queryClient.invalidateQueries({ queryKey: ['myResponses'] })
    }
  })

  const sortResponsesList = [
    {
      name: 'все',
      href: `/profile/my-responses`
    },
    {
      name: 'приглашения',
      href: `/profile/my-responses/?show=interview`
    },
    {
      name: 'отказы',
      href: `/profile/my-responses/?show=rejected`
    },
    {
      name: 'ожидание',
      href: `/profile/my-responses/?show=wait`
    }
  ]

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.responses}>
        <div className="responses__container">
          <div className={styles.responses__header}>
            <ProfileTitle title={'Мои отклики'} />
          </div>
          <div className={styles.responses__sort} ref={ref}>
            <SortList title={'Показать'} data={sortResponsesList} active={isShow} setActive={setIsShow} />
          </div>
          <div className={styles.responses__wrapper}>
            {myResponsesLoading ? (
              <LoadingSpinner />
            ) : myResponses && myResponses?.length > 0 ? (
              myResponses?.map((elem, index) => {
                return (
                  <div className={styles.responses__item}>
                    <div className={styles.responses__controll}>
                      <div className={styles.responses__wrapperControll}>
                        <div
                          onClick={() => {
                            setTargetId(elem.id)
                            setActiveWarning(true)
                          }}
                          className={styles.responses__delete}
                        >
                          Удалить из откликов
                        </div>
                        <div className={styles.responses__status}>
                          {elem.status == 'На рассмотрении' ? (
                            <>
                              <GoDotFill size={20} style={{ color: '#FCA50F' }} />
                              <span>{elem.status}</span>
                            </>
                          ) : elem.status == 'Отклонено' ? (
                            <>
                              <GoDotFill size={20} style={{ color: '#FC0800' }} />
                              <span>{elem.status}</span>
                            </>
                          ) : (
                            <>
                              <GoDotFill size={20} style={{ color: '#00EB1F' }} />
                              <span>{elem.status}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <VacanciesCard key={index} vacancy={elem.vacancy} />
                  </div>
                )
              })
            ) : myResponses && myResponses.length == 0 && queryParam ? (
              <NoElements message="Нет откликов с таким параметром" />
            ) : (
              <NoElements message="Вы не откликались на вакансии" />
            )}
          </div>
        </div>
      </div>
      <WarningModal message={'Отклик будет удален. Вы действительно хотите удалить отклик?'} active={activeWarning} setActive={setActiveWarning}>
        <div className={styles.responses__delete} onClick={async () => mutationDelete.mutate(targetId)}>
          {mutationDelete.isPending ? <LoadingDots /> : 'Удалить'}
        </div>
      </WarningModal>
    </SiteLayout>
  )
}

export default Responses
