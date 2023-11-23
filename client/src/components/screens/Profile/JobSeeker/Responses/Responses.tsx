import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FC, useState } from 'react'

import styles from './Responses.module.scss'

import LoadingDots from '@/components/elements/Loading/LoadingDots'
import LoadingSpinner from '@/components/elements/Loading/LoadingSpinner'
import WarningModal from '@/components/elements/Modal/WarningModal/WarningModal'
import VacanciesCard from '@/components/elements/Vacancy/VacanciesCard/VacanciesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import NoElements from '@/components/ui/NoElements/NoElements'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import { useAuth } from '@/core/hooks/useAuth'
import { JobseekerService } from '@/core/services/jobseeker/jobseeker.service'
import { VacancyService } from '@/core/services/vacancy/vacancy.service'

const Responses: FC = () => {
  const [activeWarning, setActiveWarning] = useState(false)
  const [targetId, setTargetId] = useState<number | undefined>(undefined)
  const queryClient = useQueryClient()
  const { user } = useAuth()

  const { data: myResponses, isLoading: myResponsesLoading } = useQuery({
    queryKey: ['myResponses'],
    queryFn: async () => {
      const responses = await JobseekerService.getMyResponses(user?.id)
      return responses.data
    }
  })

  const mutationDelete = useMutation({
    mutationKey: ['myResponses'],
    mutationFn: async (id: number | undefined) => {
      const response = await JobseekerService.deleteResponse(id)
    },
    onSuccess: () => {
      setActiveWarning(false)
      setTargetId(undefined)
      queryClient.invalidateQueries({ queryKey: ['myResponses'] })
    }
  })

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.responses}>
        <div className="responses__container">
          <div className={styles.responses__header}>
            <ProfileTitle title={'Мои отклики'} />
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
                      </div>
                    </div>
                    <VacanciesCard key={index} vacancy={elem.vacancy} />
                  </div>
                )
              })
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
