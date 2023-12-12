import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './Reviews.module.scss'

import CompanyReviews from '@/components/elements/Company/CompanyReviews/CompanyReviews'
import LoadingDots from '@/components/elements/Loading/LoadingDots'
import LoadingSpinner from '@/components/elements/Loading/LoadingSpinner'
import WarningModal from '@/components/elements/Modal/WarningModal/WarningModal'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import NoElements from '@/components/ui/NoElements/NoElements'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import { useAuth } from '@/core/hooks/useAuth'
import { ReviewsService } from '@/core/services/reviews/reviews.service'

const Reviews: FC = () => {
  const { user } = useAuth()
  const queryClient = useQueryClient()

  const [activeWarning, setActiveWarning] = useState(false)
  const [targetId, setTargetId] = useState<number | undefined>(undefined)

  const { data: myReviews, isLoading: isLoadingReviews } = useQuery({
    queryKey: ['myReviews'],
    queryFn: async () => {
      const response = await ReviewsService.getMyReviews(user?.id)
      return response.data
    },
    enabled: !!user?.id
  })

  const mutationDelete = useMutation({
    mutationKey: ['reviewsDelete'],
    mutationFn: async (idReviews: number | undefined) => {
      const response = await ReviewsService.delete(idReviews)
      queryClient.invalidateQueries({ queryKey: ['myReviews'] })
      setActiveWarning(false)
    }
  })
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.reviews}>
        <div className="reviews__container">
          <div className={styles.reviews__header}>
            <ProfileTitle title={'Оставленные отзывы'} />
          </div>

          <div className={styles.reviews__wrapper}>
            {isLoadingReviews ? (
              <LoadingSpinner />
            ) : myReviews && myReviews.length > 0 ? (
              myReviews.map((elem, index) => {
                return (
                  <div className={styles.reviews__item}>
                    <div className={styles.reviews__panel}>
                      <Link href={`/company/${elem.employerId}`} className={styles.reviews__company}>
                        {elem.employer.companyName}
                      </Link>
                      <div
                        onClick={() => {
                          setTargetId(elem.id)
                          setActiveWarning(true)
                        }}
                        className={styles.reviews__delete}
                      >
                        Удалить отзыв
                      </div>
                    </div>
                    <CompanyReviews key={elem.id} reviews={elem} />
                  </div>
                )
              })
            ) : (
              <NoElements message="Вы не оставляли отзывы на предприятия" />
            )}
          </div>
          <WarningModal
            message={'Если это платная вакансия, вам придется снова оплатить тариф, чтобы опубликовать.'}
            active={activeWarning}
            setActive={setActiveWarning}
          >
            <div className={styles.reviews__delete} onClick={async () => mutationDelete.mutate(targetId)}>
              {mutationDelete.isPending ? <LoadingDots color="red"/> : 'Удалить'}
            </div>
          </WarningModal>
        </div>
      </div>
    </SiteLayout>
  )
}

export default Reviews
