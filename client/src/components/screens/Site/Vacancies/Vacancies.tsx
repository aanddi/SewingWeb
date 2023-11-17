import Image from 'next/image'
import { FC } from 'react'

import styles from './Vacancies.module.scss'

import VacanciesTag from '@/components/elements/Vacancy/VacanciesTag/VacanciesTag'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import { IVacancies } from './Vacancies.interface'

import { AiOutlineHeart } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'

import logo from 'public/Companies/logoCompany.svg'

const Vacancies: FC<IVacancies> = () => {
  return (
    <SiteLayout background={'#F6FAFF'}>
      <div className={styles.vacancies}>
        <div className={[styles.vacancies__about, styles.about].join(' ')}>
          <div className="about__container">
            <div className={styles.about__wrapper}>
              <div className={styles.about__info}>
                <div className={styles.about__name}>Швея</div>
                <div className={styles.about__header}>
                  <div className={styles.about__requirements}>
                    <div className={styles.about__item}>
                      <h3 className={styles.about__item_title}>Опыт работы:</h3>
                      <p className={styles.about__item_subTitle}>от 1 года</p>
                    </div>
                    <div className={styles.about__item}>
                      <h3 className={styles.about__item_title}>Тип занятости:</h3>
                      <p className={styles.about__item_subTitle}>полная занятость</p>
                    </div>
                    <div className={styles.about__item}>
                      <h3 className={styles.about__item_title}>График работы:</h3>
                      <p className={styles.about__item_subTitle}>полный день</p>
                    </div>
                    <div className={styles.about__item}>
                      <h3 className={styles.about__item_title}>Образование</h3>
                      <p className={styles.about__item_subTitle}>любое</p>
                    </div>
                  </div>
                  <div className={styles.about__favorites}>
                    <div className={styles.about__favorites_button}>
                      <AiOutlineHeart />
                      <span>Добавить в избраное</span>
                    </div>
                    <div className={styles.about__favorites_date}>Вакансия опубликована 18.01.2023</div>
                  </div>
                </div>
                <div className={styles.about__tags}>
                  <VacanciesTag tags={['Вакансия недели', 'Студенты']} />
                </div>
                <div className={styles.about__description}>
                  <div className={styles.about__textBlock}>
                    <div className={styles.about__title}>О нас</div>
                    <p>
                      Набираем как на постоянную работу, так и на подработку. Просторный, светлый цех с высокими потолками, большими окнами,
                      принудительной вытяжкой и свежим ремонтом, теплое производство с самым новым автоматическим оборудованием в шаговой доступности
                      от метро. Благодаря самому новому оборудованию скорость пошива изделий увеличивается на 20-30%, что выражается в вашем доходе.
                    </p>
                  </div>
                  <div className={styles.about__textBlock}>
                    <div className={styles.about__title}>Требования:</div>
                    <p>
                      Качество пошива; Знание и умение работать на промышленном швейном оборудовании; Внимательность и добросовестность;
                      Рассматриваются кандидаты с опытом и без опыта работы
                    </p>
                  </div>
                  <div className={styles.about__textBlock}>
                    <div className={styles.about__title}>Обязаности:</div>
                    <p>
                      Проведение мероприятий по пошиву одежды Отслеживание соответствия качества кроя требуемым параметрам Регулирование натяжение
                      нитей и своевременная замена катушек Применение соответствующих методов пошива для разных типов изделий Подготовка материала к
                      пошиву Чистка изготовленных изделий от мусора Оперативный контроль соответствия цвета материала, его типа и фактуры
                      изготавливаемым изделиям Мониторинг состояния используемого оборудования
                    </p>
                  </div>
                  <div className={styles.about__textBlock}>
                    <div className={styles.about__title}>Условия:</div>
                    <p>
                      Комфортное и просторное швейное производство, расположенное в шаговой доступности от метро (15 мин.п), с новым оборудованием,
                      ремонтом, хорошим светом и промышленными кондиционерами во всех помещениях; Сдельная форма оплаты труда. Выплаты 2 раза в месяц
                      без задержек; официальное оформление;
                    </p>
                  </div>
                </div>
                <div className={styles.about__skills}>
                  <h3 className={styles.about__title}>Ключевые навыки:</h3>
                  <div className={styles.about__skillsBlock}>
                    <p className={styles.about__skillsItem}>массовое производство</p>
                    <p className={styles.about__skillsItem}>работа в команде</p>
                    <p className={styles.about__skillsItem}>массовое производство</p>
                    <p className={styles.about__skillsItem}>работа в команде</p>
                    <p className={styles.about__skillsItem}>массовое производство</p>
                  </div>
                </div>
                <div className={styles.about__map}>
                  <div className={styles.about__title}>Адрес:</div>
                  <p>г. Симферополь, Учебный переулок 8</p>
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A1d4d9c1c194c130a58410eb949d712316553ac943af0a52a114b4d263ab7e0f3&amp;source=constructor"
                    width="100%"
                    height="325"
                  ></iframe>
                </div>
              </div>
              <aside className={styles.about__sideBar}>
                <h3 className={styles.about__salary}> от 30 000 руб.</h3>
                <div className={styles.about__control}>
                  <div className={styles.about__responds}>Откликнуться</div>
                  <div className={styles.about__phone}>Показать номер</div>
                  <div className={styles.about__companyCard}>
                    <div className={styles.about__companyWrapper}>
                      <div className={styles.about__companyHeader}>
                        <div className={styles.about__companyName}>
                          <IoShieldCheckmarkSharp style={{ color: '#3490DF' }} />
                          <span>ООО ТканьРФ</span>
                        </div>
                        <div className={styles.about__companyLogo}>
                          <Image src={logo} alt={'Логотип'} />
                        </div>
                      </div>
                      <p className={styles.about__contactPerson}>
                        <span>Контактное лицо:</span> Мария Иванова
                      </p>
                      <h4 className={styles.about__countVacancies}>3 вакансии на сайте</h4>
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

export default Vacancies
