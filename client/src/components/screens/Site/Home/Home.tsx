import SiteLayout from "@/src/components/layouts/Site/SiteLayout"
import { FC, useState } from 'react'
import { IHome } from './Home.interface'

import ad from 'public/ad/ad.png'

import Image from "next/image"

import styles from "./Home.module.scss"
import VacanciesCard from "@/src/components/elements/VacanciesCard/VacanciesCard";

const Home: FC<IHome> = (props) => {
  return (
    <SiteLayout>
      <div className={styles.home}>
        <section className={styles.home__mainScreen}></section>
        <section className={styles.home__prof}></section>
        <section className={styles.home__ribbon}>
          <div className={styles.home__vacansies}>
            <VacanciesCard 
              _id={1}
              title={'Швея'}
              salary={'от 30 000 руб.'}
              description={'Вот уже 20 лет мы шьём чехлы для салонов автомобилей, всегда поддерживая качество на высоком уровне. В связи с этим у нас всё больше клиентов. И нашему производству требуется швея.'}
              tags={['Вакансия недели', 'Студенты']}
              company={'ООО Легпром'}
              adress={'Симферополь, Учебный переулок 8'}
              phone={'+7978754645'}
            />
            <VacanciesCard 
              _id={1}
              title={'Швея'}
              salary={'от 30 000 руб.'}
              description={'Вот уже 20 лет мы шьём чехлы для салонов автомобилей, всегда поддерживая качество на высоком уровне. В связи с этим у нас всё больше клиентов. И нашему производству требуется швея.'}
              tags={['Вакансия недели', 'Студенты']}
              company={'ООО Легпром'}
              adress={'Симферополь, Учебный переулок 8'}
              phone={'+7978754645'}
            />
          </div>
          <div className={styles.home__ad}>
            <Image src={ad} alt={'Реклама'}/>
          </div>
        </section>
      </div>
    </SiteLayout>
  ) 
};

export default Home;