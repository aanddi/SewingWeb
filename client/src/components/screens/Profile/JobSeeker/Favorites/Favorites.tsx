import { FC } from 'react'

import styles from './Favorites.module.scss'

import VacanciesCard from '@/components/elements/Vacancy/VacanciesCard/VacanciesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

const Favorites: FC = () => {
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.favorites}>
        <div className="favorites__container">
          <div className={styles.favorites__header}>
            <ProfileTitle title={'Избранные вакансии'} />
          </div>
          <div className={styles.favorites__wrapper}>
            <VacanciesCard
              _id={1}
              title={'Швея'}
              salary={'от 30 000 руб.'}
              description={
                'Вот уже 20 лет мы шьём чехлы для салонов автомобилей, всегда поддерживая качество на высоком уровне. В связи с этим у нас всё больше клиентов. И нашему производству требуется швея.'
              }
              tags={['Вакансия недели', 'Студенты', 'Пенсионерам']}
              company={'ООО Легпром'}
              adress={'Симферополь, Учебный переулок 8'}
              phone={'+7978754645'}
            />
            <VacanciesCard
              _id={1}
              title={'Швея'}
              salary={'от 30 000 руб.'}
              description={
                'Вот уже 20 лет мы шьём чехлы для салонов автомобилей, всегда поддерживая качество на высоком уровне. В связи с этим у нас всё больше клиентов. И нашему производству требуется швея.'
              }
              tags={['Вакансия недели', 'Студенты', 'Пенсионерам']}
              company={'ООО Легпром'}
              adress={'Симферополь, Учебный переулок 8'}
              phone={'+7978754645'}
            />
            <VacanciesCard
              _id={1}
              title={'Швея'}
              salary={'от 30 000 руб.'}
              description={
                'Вот уже 20 лет мы шьём чехлы для салонов автомобилей, всегда поддерживая качество на высоком уровне. В связи с этим у нас всё больше клиентов. И нашему производству требуется швея.'
              }
              tags={['Вакансия недели', 'Студенты', 'Пенсионерам']}
              company={'ООО Легпром'}
              adress={'Симферополь, Учебный переулок 8'}
              phone={'+7978754645'}
            />
            <VacanciesCard
              _id={1}
              title={'Швея'}
              salary={'от 30 000 руб.'}
              description={
                'Вот уже 20 лет мы шьём чехлы для салонов автомобилей, всегда поддерживая качество на высоком уровне. В связи с этим у нас всё больше клиентов. И нашему производству требуется швея.'
              }
              tags={['Вакансия недели', 'Студенты', 'Пенсионерам']}
              company={'ООО Легпром'}
              adress={'Симферополь, Учебный переулок 8'}
              phone={'+7978754645'}
            />
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default Favorites
