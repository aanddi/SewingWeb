import Image from 'next/image'
import { FC } from 'react'

import styles from './CompanyVacancies.module.scss'

import CompanyHeader from '@/components/elements/Company/CompanyHeader/CompanyHeader'
import VacanciesCard from '@/components/elements/Vacancy/VacanciesCard/VacanciesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import { IEmployerHeader } from '@/core/services/employer/employer.interface'
import { IVacancyCard } from '@/core/services/vacancy/vacancy.interface'

import { FcDocument } from 'react-icons/fc'

import ad from 'public/ad/ad.png'

interface Props {
  header: IEmployerHeader
  vacancies: IVacancyCard[]
}

const CompanyVacancies: FC<Props> = ({ header, vacancies }) => {
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.companyVacancies}>
        <div className="companyVacancies__container">
          <div className={styles.companyVacancies__wrapper}>
            <div className={styles.companyVacancies__content}>
              <section className={styles.companyVacancies__header}>
                <CompanyHeader header={header} />
              </section>
              <section className={styles.companyVacancies__ribbon}>
                {vacancies.length > 0 ? (
                  <>
                    <div className={styles.companyVacancies__title}>Вакансии</div>
                    {vacancies.map((vacancy, index) => (
                      <div key={index} className={styles.companyVacancies__item}>
                        <VacanciesCard vacancy={vacancy} />
                      </div>
                    ))}
                  </>
                ) : (
                  <div className={styles.companyVacancies__noVacancies}>
                    <FcDocument size={30} style={{ color: '#3490DF' }} />
                    <div>
                      <span className={styles.companyVacancies__noVacancies_title}>У {header.companyName} пока нет вакансий</span>
                      <p className={styles.companyVacancies__noVacancies_text}>Мы уверены, в скором времени вакансии будут опубликованы</p>
                    </div>
                  </div>
                )}
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

export default CompanyVacancies
