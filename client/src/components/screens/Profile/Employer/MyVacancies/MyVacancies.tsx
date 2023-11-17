import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './MyVacancies.module.scss'

import VacanciesCard from '@/components/elements/Vacancy/VacanciesCard/VacanciesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import { GoDotFill } from 'react-icons/go'
import { IoIosAddCircle } from 'react-icons/io'
import { IoMdAddCircleOutline } from 'react-icons/io'

const MyVacancies: FC = () => {
  const [status, setStatus] = useState(true)
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.vacancies}>
        <div className="vacancies__container">
          <div className={styles.vacancies__wrapper}>
            <div className={styles.vacancies__header}>
              <div>
                <ProfileTitle title={'Мои вакансии'} />
              </div>
              <Link href={'/profile/e_add-vacancy'} className={styles.vacancies__add}>
                <IoMdAddCircleOutline size={16} style={{ color: '#2c8acc' }} />
                <span>Создать</span>
              </Link>
            </div>
            <div className={styles.vacancies__list}>
              <div className={styles.vacancies__listItem}>
                <div className={styles.vacancies__controlPanel}>
                  <div className={styles.vacancies__panelWrapper}>
                    <div className={styles.vacancies__buttons}>
                      <Link href={'/'} className={[styles.vacancies__item, styles.vacancies__item_responses].join(' ')}>
                        Отклики
                      </Link>
                      <Link href={'/'} className={[styles.vacancies__item, styles.vacancies__item_edit].join(' ')}>
                        Редактировать
                      </Link>
                      <div className={[styles.vacancies__item, styles.vacancies__item_toarchive].join(' ')}>Снять с публикации</div>
                    </div>
                    <div className={styles.vacancies__dates}>
                      <p className={styles.vacancies__date}>Начало: 14.03.2003</p>
                      <p className={styles.vacancies__date}>Конец: 14.03.2003</p>
                    </div>
                    <div className={styles.vacancies__status}>
                      {status ? (
                        <div className={styles.vacancies__statusItem}>
                          <GoDotFill size={20} style={{ color: '#00EB1F' }} />
                          <span>Активная</span>
                        </div>
                      ) : (
                        <div className={styles.vacancies__statusItem}>
                          <GoDotFill size={20} style={{ color: '#EB0C00' }} />
                          <span>Не активная</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
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
              <div className={styles.vacancies__listItem}>
                <div className={styles.vacancies__controlPanel}>
                  <div className={styles.vacancies__panelWrapper}>
                    <div className={styles.vacancies__buttons}>
                      <Link href={'/'} className={[styles.vacancies__item, styles.vacancies__item_responses].join(' ')}>
                        Отклики
                      </Link>
                      <Link href={'/'} className={[styles.vacancies__item, styles.vacancies__item_edit].join(' ')}>
                        Редактировать
                      </Link>
                      {!status ? (
                        <div className={[styles.vacancies__item, styles.vacancies__item_toarchive].join(' ')}>Снять с публикации</div>
                      ) : (
                        <div className={[styles.vacancies__item, styles.vacancies__item_toactive].join(' ')}>Опубликовать</div>
                      )}
                    </div>
                    <div className={styles.vacancies__dates}>
                      <p className={styles.vacancies__date}>Начало: 14.03.2003</p>
                      <p className={styles.vacancies__date}>Конец: 14.03.2003</p>
                    </div>
                    <div className={styles.vacancies__status}>
                      {!status ? (
                        <div className={styles.vacancies__statusItem}>
                          <GoDotFill size={20} style={{ color: '#00EB1F' }} />
                          <span>Активная</span>
                        </div>
                      ) : (
                        <div className={styles.vacancies__statusItem}>
                          <GoDotFill size={20} style={{ color: '#EB0C00' }} />
                          <span>Не активная</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
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
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default MyVacancies
