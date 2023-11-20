import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import styles from './Vacancies.module.scss'

import TextToHTML from '@/components/elements/EditText/TextToHTML'
import VacanciesTag from '@/components/elements/Vacancy/VacanciesTag/VacanciesTag'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import { IVacancyResponse } from '@/core/services/vacancy/vacancy.interface'

import { formatDate } from '@/core/utils/format-date'
import { formatPrice } from '@/core/utils/format-price'

import { FaStar } from 'react-icons/fa'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'

import logo from 'public/Companies/logoCompany.svg'

const AboutVacancy: FC<{ vacancy: IVacancyResponse }> = ({ vacancy }) => {
  console.log(vacancy)

  const [skillArray, setSkillArray] = useState<string[]>([])

  useEffect(() => {
    if (vacancy.skills) setSkillArray(vacancy.skills.split(',').map(skills => skills.trim()))
  }, [vacancy])
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.vacancies}>
        <div className={[styles.vacancies__about, styles.about].join(' ')}>
          <div className="about__container">
            <div className={styles.about__wrapper}>
              <div className={styles.about__info}>
                <div className={styles.about__name}>{vacancy.title}</div>
                <div className={styles.about__header}>
                  <div className={styles.about__requirements}>
                    <div className={styles.about__item}>
                      <h3 className={styles.about__item_title}>Опыт работы:</h3>
                      <p className={styles.about__item_subTitle}>{vacancy.workExperience}</p>
                    </div>
                    <div className={styles.about__item}>
                      <h3 className={styles.about__item_title}>Тип занятости:</h3>
                      <p className={styles.about__item_subTitle}>{vacancy.employmentType}</p>
                    </div>
                    <div className={styles.about__item}>
                      <h3 className={styles.about__item_title}>График работы:</h3>
                      <p className={styles.about__item_subTitle}>{vacancy.workTimetable}</p>
                    </div>
                    <div className={styles.about__item}>
                      <h3 className={styles.about__item_title}>Образование</h3>
                      <p className={styles.about__item_subTitle}>{vacancy.education}</p>
                    </div>
                  </div>
                  {/* <div className={styles.about__favorites}>
                    <div className={styles.about__favorites_button}>
                      <AiOutlineHeart />
                      <span>Добавить в избраное</span>
                    </div>
                  </div> */}
                </div>

                <div className={styles.about__tags}>
                  <VacanciesTag tarif={vacancy.tarifId} tags={vacancy.tags} />
                </div>
                <div className={styles.about__favorites_date}>Вакансия опубликована {formatDate(vacancy.dateStart)}</div>
                <div className={styles.about__description}>
                  <TextToHTML text={vacancy.descMain} />
                </div>
                <div className={styles.about__skills}>
                  <h3 className={styles.about__title}>Ключевые навыки:</h3>
                  <div className={styles.about__skillsBlock}>
                    {skillArray.map((skill, index) => {
                      return (
                        <p key={index} className={styles.about__skillsItem}>
                          {skill}
                        </p>
                      )
                    })}
                  </div>
                </div>
                <div className={styles.about__map}>
                  <div className={styles.about__title}>Адрес:</div>
                  <p>
                    {vacancy.city}, {vacancy.adress}
                  </p>

                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A1d4d9c1c194c130a58410eb949d712316553ac943af0a52a114b4d263ab7e0f3&amp;source=constructor"
                    width="100%"
                    height="325"
                  ></iframe>
                </div>
              </div>
              <aside className={styles.about__sideBar}>
                {vacancy.minSalary && vacancy.maxSalary ? (
                  <div className={styles.about__salary}>
                    {formatPrice(vacancy.minSalary)} - {formatPrice(vacancy.maxSalary)} руб.
                  </div>
                ) : vacancy.minSalary && !vacancy.maxSalary ? (
                  <div className={styles.about__salary}>от {formatPrice(vacancy.minSalary)} руб.</div>
                ) : !vacancy.minSalary && vacancy.maxSalary ? (
                  <div className={styles.about__salary}>до {formatPrice(vacancy.maxSalary)} руб.</div>
                ) : !vacancy.minSalary && !vacancy.maxSalary ? (
                  <div className={styles.about__salary}>по договоренности</div>
                ) : null}
                <div className={styles.about__control}>
                  <div className={styles.about__responds}>Откликнуться</div>
                  <div className={styles.about__companyCard}>
                    <div className={styles.about__companyWrapper}>
                      <div className={styles.about__companyHeader}>
                        <div className={styles.about__companyName}>
                          <IoShieldCheckmarkSharp style={{ color: '#3490DF' }} />
                          <Link href={`/company/${vacancy.employerId}`}>{vacancy.companyName}</Link>
                        </div>
                        <div className={styles.about__companyLogo}>
                          <Image src={logo} alt={'Логотип'} />
                        </div>
                      </div>
                      <div className={styles.about__contactItem}>
                        <span className={styles.about__contactItem_title}>Контактное лицо:</span> <div>{vacancy.fullName}</div>
                      </div>
                      <div className={styles.about__contactItem}>
                        <span className={styles.about__contactItem_title}>Номер:</span> {vacancy.phoneNumber}
                      </div>
                      {vacancy.contact ? (
                        <div className={styles.about__contactItem}>
                          <span className={styles.about__contactItem_title}>Доп. контакт:</span> {vacancy.contact}
                        </div>
                      ) : null}
                      <div className={styles.about__reiting}>
                        <FaStar style={{ color: '#F4A815' }} size={15} />
                        <FaStar style={{ color: '#F4A815' }} size={15} />
                        <FaStar style={{ color: '#F4A815' }} size={15} />
                        <FaStar style={{ color: '#F4A815' }} size={15} />
                        <FaStar style={{ color: '#F4A815' }} size={15} />
                        <p>10 отзывов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <div className={[styles.vacancies__ribbon, styles.ribbon].join(' ')}></div>
      </div>
    </SiteLayout>
  )
}

export default AboutVacancy
