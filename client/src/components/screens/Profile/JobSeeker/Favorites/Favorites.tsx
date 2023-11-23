import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import styles from './Favorites.module.scss'

import LoadingSpinner from '@/components/elements/Loading/LoadingSpinner'
import VacanciesCard from '@/components/elements/Vacancy/VacanciesCard/VacanciesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import NoElements from '@/components/ui/NoElements/NoElements'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import { useAuth } from '@/core/hooks/useAuth'
import { VacancyService } from '@/core/services/vacancy/vacancy.service'

const Favorites: FC = () => {
  const { user } = useAuth()

  const { data: myFavorites, isLoading: myFavoritesLoading } = useQuery({
    queryKey: ['myFavorites'],
    queryFn: async () => {
      const responses = await VacancyService.getFavorites(user?.id)
      return responses.data
    }
  })

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.favorites}>
        <div className="favorites__container">
          <div className={styles.favorites__header}>
            <ProfileTitle title={'Избранные вакансии'} />
          </div>
          <div className={styles.favorites__wrapper}>
            {myFavoritesLoading ? (
              <LoadingSpinner />
            ) : myFavorites && myFavorites?.length > 0 ? (
              myFavorites?.map((elem, index) => {
                return <VacanciesCard key={index} vacancy={elem.vacancy} />
              })
            ) : (
              <NoElements message="У вас нет избранных вакансий" />
            )}
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default Favorites
