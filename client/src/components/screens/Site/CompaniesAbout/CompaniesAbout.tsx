import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './CompaniesAbout.module.scss'

import CompanyHeader from '@/components/elements/Company/CompanyHeader/CompanyHeader'
import TextToHTML from '@/components/elements/EditText/TextToHTML'
import VacanciesCard from '@/components/elements/Vacancy/VacanciesCard/VacanciesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ReviewsStar from '@/components/ui/ReviewsStart/ReviewsStar'

import { IEmployerHeader } from '@/core/services/employer/employer.interface'
import { IEmployer } from '@/core/types/employer.interface'

import { ReviewsService } from '@/core/services/reviews/reviews.service'
import { VacancyService } from '@/core/services/vacancy/vacancy.service'

import pattern from 'public/Companies/pattern.svg'
import ad from 'public/ad/ad.png'

interface Props {
  header: IEmployerHeader
  company: IEmployer
}

const AboutCompanies: FC<Props> = ({ company, header }) => {
  const { data: ribbonVacancies } = useQuery({
    queryKey: ['vacancies'],
    queryFn: async () => {
      const response = await VacancyService.getRibbonById(company.id)
      return response.data
    },
    enabled: !!company
  })

  const { data: reviews, isLoading: isLoadingReviews } = useQuery({
    queryKey: ['getReviews', company.id],
    queryFn: async () => {
      const response = await ReviewsService.getReviewsList(company.id)
      return response.data
    },
    enabled: !!company
  })

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.aboutCompany}>
        <div className="aboutCompany__container">
          <div className={styles.aboutCompany__wrapper}>
            <div className={styles.aboutCompany__content}>
              <section className={styles.aboutCompany__header}>
                <CompanyHeader header={header} />
              </section>
              <section className={[styles.aboutCompany__info, styles.info].join(' ')}>
                <div className={styles.info__left}>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>ИНН: </h3>
                    <p className={styles.info__desc}>{company.inn ? company.inn : 'Не указано'}</p>
                  </div>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>Адрес: </h3>
                    <p className={styles.info__desc}>{company.adress ? company.adress : 'Не указано'}</p>
                  </div>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>Контакты: </h3>
                    <p className={styles.info__desc}>{company.contact ? company.contact : 'Не указано'}</p>
                  </div>
                </div>
                <div className={styles.info__right}>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>Тип предприятия: </h3>
                    <p className={styles.info__desc}>{company.type ? company.type : 'Не указано'}</p>
                  </div>

                  <div className={styles.info__block} title="Количество сотрудников на предприятии">
                    <h3 className={styles.info__title}>Размер компании: </h3>
                    <p className={styles.info__desc}>{company.size ? company.size : 'Не указано'}</p>
                  </div>
                  <div className={styles.info__block}>
                    <h3 className={styles.info__title}>Город регистрации: </h3>
                    <p className={styles.info__desc}>{company.registrCity ? company.registrCity : 'Не указано'}</p>
                  </div>
                </div>
              </section>
              <section className={[styles.aboutCompany__desc, styles.desc].join(' ')}>
                <h3 className={styles.reviews__title}>О компании</h3>
                {company.about ? <TextToHTML text={company.about} /> : <div className={styles.desc__noDesc}>Описание компании не указано</div>}
              </section>
              <section className={[styles.aboutCompany__reviews, styles.reviews].join(' ')}>
                <h3 className={styles.reviews__title}>Отзывы о предприятии</h3>
                <div className={styles.reviews__content}>
                  <div className={[styles.reviews__cardReviews, styles.reviews__card].join(' ')}>
                    <div className={styles.reviews__wrapper}>
                      <div className={styles.reviews__grade}>
                        <span>{reviews?.averageRating}</span>
                        <div className={styles.reviews__star}>{reviews && <ReviewsStar grade={reviews?.averageRating} sizeStar={25} />}</div>
                      </div>
                      {reviews?.countReviews ? (
                        <p className={styles.reviews__desc}>На основе {reviews?.countReviews} оценок</p>
                      ) : (
                        <p className={styles.reviews__desc}>Нет оценок</p>
                      )}

                      <Link href={`/company/${header.id}/reviews`} className={styles.reviews__link}>
                        Показать отзывы
                      </Link>
                    </div>
                  </div>
                  <div className={[styles.reviews__cardAd, styles.reviews__card].join(' ')}>
                    <Image className={styles.reviews__pattern} src={pattern} alt={' '} />
                    <div className={styles.reviews__wrapper}>
                      <p className={styles.reviews__text}>Ваши отзывы помогают людям принимать взвешенные карьерные решения.</p>
                      <Link href={`/company/${header.id}/add-reviews`} className={styles.reviews__btn}>
                        Оставить отзыв
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {ribbonVacancies && ribbonVacancies.vacancies.length > 0 ? (
                <section className={[styles.aboutCompany__vacancies, styles.vacancies].join(' ')}>
                  <div className={styles.vacancies__title}>Вакансии</div>
                  <div className={styles.vacancies__ribbon}>
                    {ribbonVacancies?.vacancies.map((vacancy, index) => {
                      return <VacanciesCard key={index} vacancy={vacancy} />
                    })}
                  </div>
                </section>
              ) : null}
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
