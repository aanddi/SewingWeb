import { FC } from 'react'

import VacanciesCard from '@/components/elements/Vacancy/VacanciesCard/VacanciesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import styles from './Responses.module.scss'

const Responses: FC = () => {
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.responses}>
        <div className="responses__container">
          <div className={styles.responses__header}>
            <ProfileTitle title={'Мои отклики'} />
          </div>
          <div className={styles.responses__wrapper}>
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

export default Responses
