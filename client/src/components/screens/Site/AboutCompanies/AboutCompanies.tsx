import Image from 'next/image'
import { FC } from 'react'

import styles from './AboutCompanies.module.scss'

import CompanyHeader from '@/components/elements/Company/CompanyHeader/CompanyHeader'
import VacanciesCard from '@/components/elements/Vacancy/VacanciesCard/VacanciesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import { IEmployer } from '@/core/types/employer.interface'

import { FaStar } from 'react-icons/fa'

import pattern from 'public/Companies/pattern.svg'
import ad from 'public/ad/ad.png'

const AboutCompanies: FC<{ company: IEmployer }> = ({ company }) => {
  console.log(company)
  return (
    <SiteLayout>
      <div className={styles.aboutCompany}>
        <div className="aboutCompany__container">
          <div className={styles.aboutCompany__wrapper}>
            <div className={styles.aboutCompany__content}>
              <section className={styles.aboutCompany__header}>
                <CompanyHeader companyName={company.companyName} vacancy={2} reviews={2} />
              </section>
              <section className={[styles.aboutCompany__info, styles.info].join(' ')}>
                <div className={styles.info__left}>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>ИНН: </h3>
                    <p className={styles.info__desc}>{company.inn}</p>
                  </div>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>Тип предприятия: </h3>
                    <p className={styles.info__desc}>{company.type}</p>
                  </div>

                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>Размер компании: </h3>
                    <p className={styles.info__desc}>{company.size}</p>
                  </div>
                </div>
                <div className={styles.info__right}>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>Адрес: </h3>
                    <p className={styles.info__desc}>{company.adress}</p>
                  </div>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>Контакты </h3>
                    <p className={styles.info__desc}>{company.contact}</p>
                  </div>
                </div>
              </section>
              <section className={[styles.aboutCompany__desc, styles.desc].join(' ')}>
                <h3 className={styles.reviews__title}>О компании</h3>
                {company.about ? <div>{company.about}</div> : <div>Описание компании не указано</div>}
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
