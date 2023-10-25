import Image from 'next/image'
import { FC } from 'react'

import IAboutCompanies from './AboutCompanies.interface'

import { FaStar } from 'react-icons/fa'

import CompanyHeader from '@/components/elements/CompanyHeader/CompanyHeader'
import VacanciesCard from '@/components/elements/VacanciesCard/VacanciesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import styles from './AboutCompanies.module.scss'

import pattern from 'public/Companies/pattern.svg'
import ad from 'public/ad/ad.png'

const AboutCompanies: FC<IAboutCompanies> = props => {
  return (
    <SiteLayout>
      <div className={styles.aboutCompany}>
        <div className="aboutCompany__container">
          <div className={styles.aboutCompany__wrapper}>
            <div className={styles.aboutCompany__content}>
              <section className={styles.aboutCompany__header}>
                <CompanyHeader />
              </section>
              <section className={[styles.aboutCompany__info, styles.info].join(' ')}>
                <div className={styles.info__left}>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>Тип предприятия: </h3>
                    <p className={styles.info__desc}>Ателье</p>
                  </div>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>Сайт компании: </h3>
                    <p className={styles.info__desc}>sportsfactory.ru</p>
                  </div>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>Размер компании: </h3>
                    <p className={styles.info__desc}>Больше 50</p>
                  </div>
                </div>
                <div className={styles.info__right}>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>Офис: </h3>
                    <p className={styles.info__desc}>г. Симферополь, ул Тринева, д2</p>
                  </div>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>Контакты </h3>
                    <p className={styles.info__desc}>+7(916)-757-27-82</p>
                  </div>
                </div>
              </section>
              <section className={[styles.aboutCompany__desc, styles.desc].join(' ')}>
                «Магнит» – не просто один из крупнейших частных работодателей России. Мы – семья магазинов, поэтому
                ценим каждого из 360 тысяч сотрудников. И очень гордимся, что люди остаются с нами надолго: ежегодно
                около 5 000 человек отмечают 10-летие работы в «Магните», получая «Золотой значок». Всего в компании
                работает 21 000 «золотых» сотрудников! «Магнит» — лидер по количеству магазинов и географии их
                расположения. Наша сеть включает в себя 26 077 торговых объектов в 67 регионах. А значит, вы можете
                работать ближе к дому, семье и детям. А ещё в семью «Магнита» входят 13 предприятий по производству
                продуктов, 4 агропромышленных комплекса, 45 складских и 37 автотранспортных центров. Какой формат
                притягивает вас больше? Выбирайте работу по душе! Станьте частью семьи «Магнит»!
              </section>
              <section className={[styles.aboutCompany__reviews, styles.reviews].join(' ')}>
                <h3 className={styles.reviews__title}>Отзывы о предприятии</h3>
                <div className={styles.reviews__content}>
                  <div className={[styles.reviews__cardReviews, styles.reviews__card].join(' ')}>
                    <div className={styles.reviews__wrapper}>
                      <div className={styles.reviews__grade}>
                        <span>4.2</span>
                        <div className={styles.reviews__star}>
                          <FaStar style={{ color: '#F4A815' }} size={25} />
                          <FaStar style={{ color: '#F4A815' }} size={25} />
                          <FaStar style={{ color: '#F4A815' }} size={25} />
                          <FaStar style={{ color: '#F4A815' }} size={25} />
                          <FaStar style={{ color: '#F4A815' }} size={25} />
                        </div>
                      </div>
                      <p className={styles.reviews__desc}>На основе 103 оценок</p>
                      <p className={styles.reviews__link}>Показать отзывы</p>
                    </div>
                  </div>
                  <div className={[styles.reviews__cardAd, styles.reviews__card].join(' ')}>
                    <Image className={styles.reviews__pattern} src={pattern} alt={' '} />
                    <div className={styles.reviews__wrapper}>
                      <p className={styles.reviews__text}>
                        Ваши отзывы помогают людям принимать взвешенные карьерные решения.
                      </p>
                      <div className={styles.reviews__btn}>Оставить отзыв</div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={[styles.aboutCompany__vacancies, styles.vacancies].join(' ')}>
                <div className={styles.vacancies__title}>Вакансии</div>
                <div className={styles.vacancies__ribbon}>
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
                </div>
              </section>
            </div>
            <aside className={styles.aboutCompany__aside}>
              <Image src={ad} alt={'Реклама'} />
            </aside>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default AboutCompanies
