import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import { IHome } from './Home.interface'

import VacanciesCard from '@/components/elements/VacanciesCard/VacanciesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import styles from './Home.module.scss'

import Arrow from 'public/Home/arrow.svg'
import Tools from 'public/Home/tools.svg'
import ad from 'public/ad/ad.png'

const Home: FC<IHome> = props => {
  return (
    <SiteLayout>
      <div className={styles.home}>
        <section className={[styles.home__mainScreen, styles.mainScreen].join(' ')}>
          <div className="mainScreen__container">
            <div className={styles.mainScreen__wrapper}>
              <div className={styles.mainScreen__search}>
                <div className={styles.mainScreen__search_content}>
                  <div className={styles.mainScreen__search_input}>
                    <input type="text" placeholder="Должность или предприятие" />
                  </div>
                  <div className={styles.mainScreen__search_filter}>
                    <Image src={Tools} alt="Фильтры" />
                  </div>
                  <div className={styles.mainScreen__search_button}>Найти</div>
                </div>
                <div className={styles.mainScreen__employee}>Я ищу сотрудника</div>
              </div>
              <div className={styles.mainScreen__bottom}>
                <div className={styles.mainScreen__statistics}>
                  <div className={styles.mainScreen__statistics_block}>
                    <h3 className={styles.mainScreen__statistics_count}>2103</h3>
                    <p className={styles.mainScreen__statistics_text}>вакансии</p>
                  </div>
                  <div className={styles.mainScreen__statistics_block}>
                    <h3 className={styles.mainScreen__statistics_count}>523</h3>
                    <p className={styles.mainScreen__statistics_text}>резюме</p>
                  </div>
                </div>
                <div className={styles.mainScreen__arrow}>
                  <Image src={Arrow} alt={'Вниз'} />
                </div>
                <div className={styles.mainScreen__button}>Создать резюме</div>
              </div>
            </div>
          </div>
        </section>

        <section className={[styles.home__ribbon, styles.ribbon].join(' ')}>
          <div className="ribbon__container">
            <div className={styles.ribbon__wrapper}>
              <div className={styles.ribbon__vacansiesList}>
                <div className={styles.ribbon__vacansiesTop}>
                  <h3 className={styles.ribbon__vacansiesTop_count}>Найдено 5 вакансий</h3>
                  <div className={styles.ribbon__vacansiesTop_filter}>Фильтр</div>
                </div>
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
                  tags={['Вакансия недели', 'Студенты']}
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
                  tags={['Вакансия недели', 'Студенты']}
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
                  tags={['Вакансия недели', 'Студенты']}
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
                  tags={['Вакансия недели', 'Студенты']}
                  company={'ООО Легпром'}
                  adress={'Симферополь, Учебный переулок 8'}
                  phone={'+7978754645'}
                />
                <div className={styles.ribbon__showVacancies}>Показать еще</div>
              </div>

              <aside className={styles.ribbon__ad}>
                <Link href="/employer">
                  <Image src={ad} alt={'Реклама'} />
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

export default Home
