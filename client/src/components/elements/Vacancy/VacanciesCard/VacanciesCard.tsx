import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import styles from './VacanciesCard.module.scss'

import { IResponsesList } from '@/core/services/responses/response.interface'
import { IVacancyCard } from '@/core/services/vacancy/vacancy.interface'
import { IFavorite } from '@/core/types/favorite.interface'
import { IResponses } from '@/core/types/responses.interface'

import { useAuth } from '@/core/hooks/useAuth'
import { useCheckRole } from '@/core/hooks/useCheckRole'
import { ResponsesService } from '@/core/services/responses/responses.service'
import { VacancyService } from '@/core/services/vacancy/vacancy.service'
import { formatDate } from '@/core/utils/format-date'
import { formatPrice } from '@/core/utils/format-price'

import LoadingDots from '../../Loading/LoadingDots'
import VacanciesTag from '../VacanciesTag/VacanciesTag'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdHeart } from 'react-icons/io'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'

interface Props {
  vacancy: IVacancyCard
}

const VacanciesCard: FC<Props> = ({ vacancy }) => {
  const [checkNumber, setCheckNumber] = useState(false)

  const router = useRouter()
  const { user } = useAuth()
  const role = useCheckRole()
  const queryClient = useQueryClient()

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
    enabled: role == '_JOBSEEKER_'
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
    <div onClick={() => router.push(`/vacancy/${vacancy.id}`)} className={styles.VCard}>
      <div className={styles.VCard__content}>
        <div className={styles.VCard__header}>
          <div className={styles.VCard__mainHeader}>
            <Link target="_blank" href={`/vacancy/${vacancy.id}`} className={styles.VCard__title}>
              {vacancy.title}
            </Link>

            {vacancy.minSalary && vacancy.maxSalary ? (
              <div className={styles.VCard__salary}>
                {formatPrice(vacancy.minSalary)} - {formatPrice(vacancy.maxSalary)} руб.
              </div>
            ) : vacancy.minSalary && !vacancy.maxSalary ? (
              <div className={styles.VCard__salary}>от {formatPrice(vacancy.minSalary)} руб.</div>
            ) : !vacancy.minSalary && vacancy.maxSalary ? (
              <div className={styles.VCard__salary}>до {formatPrice(vacancy.maxSalary)} руб.</div>
            ) : !vacancy.minSalary && !vacancy.maxSalary ? (
              <div className={styles.VCard__salary}>по договоренности</div>
            ) : null}
          </div>
          {activeFavorite ? (
            <div
              onClick={e => {
                e.stopPropagation()
                if (user) mutationDeleteFavorites.mutate(activeFavorite.id)
              }}
              className={styles.VCard__favorite_active}
            >
              <IoMdHeart size={23} />
            </div>
          ) : (
            <div
              onClick={e => {
                e.stopPropagation()
                if (!user) router.push('/auth/login')
                const vacancyId = vacancy.id
                const userId = user?.id
                const data = { userId, vacancyId }
                mutationCreateFavorites.mutate(data)
              }}
              className={styles.VCard__favorite}
            >
              <IoMdHeart size={23} />
            </div>
          )}
        </div>

        <div onClick={e => e.stopPropagation()} className={styles.VCard__description}>
          {vacancy.descCard}
        </div>
        <div className={styles.VCard__tags}>
          <VacanciesTag tarif={vacancy.tarifId} tags={vacancy.tags} />
        </div>
        <div onClick={e => e.stopPropagation()} className={styles.VCard__company}>
          <div className={styles.VCard__company_svg}>
            <IoShieldCheckmarkSharp style={{ color: '#3490DF' }} />
          </div>
          <Link href={`/company/${vacancy.employer.id}`} className={styles.VCard__company_name}>
            {vacancy.employer.companyName}
          </Link>
        </div>
        <div onClick={e => e.stopPropagation()} className={styles.VCard__adress}>
          <div className={styles.VCard__adress_svg}>
            <FaMapMarkerAlt style={{ color: '#B7B7B7' }} />
          </div>
          <div className={styles.VCard__adress_name}>
            {vacancy.city}, {vacancy.adress}
          </div>
        </div>
        <div onClick={e => e.stopPropagation()} className={styles.VCard__button}>
          {role == '_JOBSEEKER_' ? (
            <div
              onClick={() => {
                if (!user) router.push('/auth/login')
                else {
                  const vacancyId = vacancy.id
                  const userId = user?.id
                  const createdAt = new Date()
                  const data = { userId, vacancyId, createdAt }
                  mutationResponse.mutate(data)
                }
              }}
              className={styles.VCard__button_respond}
            >
              {myResponsesLoading ? (
                <LoadingDots color="#fff" />
              ) : activeResponse ? (
                <Link href={'/profile/my-responses'}>Мои отклики</Link>
              ) : (
                <div>{mutationResponse.isPending ? <LoadingDots color="#fff" /> : 'Откликнуться'}</div>
              )}
            </div>
          ) : !user ? (
            <div
              onClick={() => {
                router.push('/auth/login')
              }}
              className={styles.VCard__button_respond}
            >
              <div>Откликнуться</div>
            </div>
          ) : (
            <div className={styles.VCard__button_respond}>
              <Link href={`/vacancies/${vacancy.id}`}>Посмотреть</Link>
            </div>
          )}

          <div
            onClick={e => {
              e.stopPropagation()
              setCheckNumber(!checkNumber)
            }}
            className={[styles.VCard__button_checkphone, styles.VCard__button_checkphone_text].join(' ')}
          >
            {checkNumber ? <span>{vacancy.phoneNumber}</span> : 'Показать номер'}
          </div>
        </div>
        {activeResponse ? <div className={styles.VCard__date}>Вы откликнулись {formatDate(activeResponse.createdAt)}</div> : null}
      </div>
    </div>
  )
}

export default VacanciesCard
