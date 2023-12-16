import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './styles/AboutUs.module.scss'

import SiteLayout from '@/components/layouts/Site/SiteLayout'

import { AiOutlineRise } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { BsViewList } from 'react-icons/bs'
import { HiOutlineXMark } from 'react-icons/hi2'
import { IoMdCheckmark } from 'react-icons/io'
import { IoDocumentTextOutline, IoSearchOutline } from 'react-icons/io5'
import { PiUsersThree } from 'react-icons/pi'

import employer from 'public/About/employer.svg'
import jobseeker from 'public/About/jobseeker.svg'
import img from 'public/Employers/imageBaner01.svg'

const AboutUs: FC = () => {
  return (
    <SiteLayout>
      <div className={styles.aboutUs}>
        <div className={styles.aboutUs__wrapper}>
          <section className={[styles.employer__main, styles.main].join(' ')}>
            <div className="main__container">
              <h1 className={styles.main__title}>Платформа для поиска рабочих мест и подбора кандидатов для легкой промышленности</h1>
              <div className={styles.main__byttons}>
                <Link href={'/profile/add-vacancy'} className={[styles.main__button, styles.main__button_vacancy].join(' ')}>
                  Разместить вакансию
                </Link>
                <Link href={'/profile/my-resume'} className={[styles.main__button, styles.main__button_resume].join(' ')}>
                  Разместить резюме
                </Link>
              </div>
            </div>
          </section>

          <section className={[styles.addVacancy__tarif, styles.tarif].join(' ')}>
            <div className="rates__container">
              <div className={styles.tarif__card}>
                <div className={styles.tarif__tarifWrapper}>
                  <div className={styles.tarif__mainText}>
                    <span>SewingWeb</span> - это специализированный портал по трудоустройству, ориентированный на вакансии ведущих предприятий легкой
                    промышленности и образовательных учреждений. <br /> Мы стремимся помочь людям найти идеальную работу и внести значительный вклад в
                    совершенствование легкой промышленности в России.
                  </div>
                </div>
                <div className={styles.tarif__img}>
                  <Image src={img} alt={''} />
                </div>
              </div>
            </div>
          </section>

          <section className={[styles.addVacancy__func, styles.func].join(' ')}>
            <div className="func__container">
              <div className={styles.func__cards}>
                <div className={styles.func__card}>
                  <div className={styles.func__wrapper}>
                    <div className={styles.func__header}>
                      <Image src={employer} alt={''} />
                      <h3 className={styles.func__title}>Для работодателей</h3>
                      <p className={styles.func__subTitle}>
                        Наша основная цель заключается в том, чтобы стать ведущей платформой для поиска работы в легкой промышленности, где поиск
                        сотрудников происходит быстро и эффективно
                      </p>
                    </div>
                    <div className={styles.func__list}>
                      <div className={styles.func__item}>
                        <div className={styles.func__icon}>
                          <IoDocumentTextOutline size={30} style={{ color: '#42B9F8FF' }} />
                        </div>
                        <div className={styles.func__desc}>
                          <h4 className={styles.func__descTitle}>Размещение вакансий</h4>
                          <p className={styles.func__descSubTitle}>Удобное управление предложениями о работе.</p>
                        </div>
                      </div>
                      <div className={styles.func__item}>
                        <div className={styles.func__icon}>
                          <AiOutlineRise size={30} style={{ color: '#42B9F8FF' }} />
                        </div>
                        <div className={styles.func__desc}>
                          <h4 className={styles.func__descTitle}>Продвижение вакансий</h4>
                          <p className={styles.func__descSubTitle}>Выберите подходящий тариф и получите масимальную отдачу соискателй работы.</p>
                        </div>
                      </div>
                      <div className={styles.func__item}>
                        <div className={styles.func__icon}>
                          <BiLike size={30} style={{ color: '#42B9F8FF' }} />
                        </div>
                        <div className={styles.func__desc}>
                          <h4 className={styles.func__descTitle}>Оценки и отзывы</h4>
                          <p className={styles.func__descSubTitle}>Отзывы о взаимодействии с компаниями.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.func__card}>
                  <div className={styles.func__wrapper}>
                    <div className={styles.func__header}>
                      <Image src={jobseeker} alt={''} />
                      <h3 className={styles.func__title}>Для соискателей</h3>
                      <p className={styles.func__subTitle}>
                        Мы предоставляем возможность подобрать вам работу, которая вас вдохновляет, зарабатывать хорошие деньги и строить стратегию
                        для развития вашей карьеры
                      </p>
                    </div>
                    <div className={styles.func__list}>
                      <div className={styles.func__item}>
                        <div className={styles.func__icon}>
                          <BsViewList size={30} style={{ color: '#A928C4FF' }} />
                        </div>
                        <div className={styles.func__desc}>
                          <h4 className={styles.func__descTitle}>Удобная лента ваканий</h4>
                          <p className={styles.func__descSubTitle}>Выберите фильтры или найдите вакансию в поисковой строке.</p>
                        </div>
                      </div>
                      <div className={styles.func__item}>
                        <div className={styles.func__icon}>
                          <IoSearchOutline size={30} style={{ color: '#A928C4FF' }} />
                        </div>
                        <div className={styles.func__desc}>
                          <h4 className={styles.func__descTitle}>Поиск по профессиям</h4>
                          <p className={styles.func__descSubTitle}>Зайдите на страницу профессий и выберите подходящюю профессию.</p>
                        </div>
                      </div>
                      <div className={styles.func__item}>
                        <div className={styles.func__icon}>
                          <PiUsersThree size={30} style={{ color: '#A928C4FF' }} />
                        </div>
                        <div className={styles.func__desc}>
                          <h4 className={styles.func__descTitle}>Вакансии для всех</h4>
                          <p className={styles.func__descSubTitle}>Cтуденты, пенсионеры, люди с особенностями здоровья и др.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={[styles.employer__rates, styles.rates].join(' ')}>
            <div className="rates__container">
              <div className={styles.rates__wrapper}>
                <h2 className={styles.rates__title}>Выберите свой тариф</h2>
                <div className={styles.rates__cards}>
                  <div className={styles.rates__card}>
                    <div className={styles.rates__content}>
                      <div className={styles.rates__cardTitle}>Вакансия Стандарт</div>
                      <div className={styles.rates__efficiency}>
                        <p className={[styles.rates__efficiencyNumber, styles.rates__efficiencyNumber_one].join(' ')}>x1</p>
                        <p className={[styles.rates__efficiencyDesc, styles.rates__efficiencyDesc_one].join(' ')}>
                          обычная <br /> эффективность
                        </p>
                      </div>
                      <div className={styles.rates__list}>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <IoMdCheckmark style={{ color: '#5CDA4A' }} size={20} />
                          </div>
                          <p className={styles.rates__text}>Просмотр резюме соискателей</p>
                        </div>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <IoMdCheckmark style={{ color: '#5CDA4A' }} size={20} />
                          </div>
                          <p className={styles.rates__text}>Отклик по телефону</p>
                        </div>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <HiOutlineXMark style={{ color: '#C1C1C1' }} size={20} />
                          </div>
                          <p className={[styles.rates__text, styles.rates__text_unactive].join(' ')}>Продвижение в вакансии в ленте</p>
                        </div>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <HiOutlineXMark style={{ color: '#C1C1C1' }} size={20} />
                          </div>
                          <p className={[styles.rates__text, styles.rates__text_unactive].join(' ')}>Приоритет в поиске</p>
                        </div>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <HiOutlineXMark style={{ color: '#C1C1C1' }} size={20} />
                          </div>
                          <p className={[styles.rates__text, styles.rates__text_unactive].join(' ')}>Рекомендации вакансии</p>
                        </div>
                      </div>
                      <div className={styles.rates__footer}>
                        <h3 className={styles.rates__salary}>0 рублей</h3>
                        <p className={styles.rates__time}>
                          публикация на <span>7 дней</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rates__card}>
                    <div className={styles.rates__content}>
                      <div className={styles.rates__cardTitle}>Вакансия Премиум</div>
                      <div className={styles.rates__efficiency}>
                        <div className={[styles.rates__efficiencyNumber, styles.rates__efficiencyNumber_two].join(' ')}>x2</div>
                        <div className={[styles.rates__efficiencyDesc, styles.rates__efficiencyDesc_two].join(' ')}>
                          в 3 раза <br /> эффективность
                        </div>
                      </div>
                      <div className={styles.rates__list}>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <IoMdCheckmark style={{ color: '#5CDA4A' }} size={20} />
                          </div>
                          <p className={styles.rates__text}>Просмотр резюме соискателей</p>
                        </div>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <IoMdCheckmark style={{ color: '#5CDA4A' }} size={20} />
                          </div>
                          <p className={styles.rates__text}>Отклик по телефону</p>
                        </div>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <IoMdCheckmark style={{ color: '#5CDA4A' }} size={20} />
                          </div>
                          <p className={styles.rates__text}>Продвижение в вакансии в ленте</p>
                        </div>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <IoMdCheckmark style={{ color: '#5CDA4A' }} size={20} />
                          </div>
                          <p className={styles.rates__text}>Приоритет в поиске</p>
                        </div>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <HiOutlineXMark style={{ color: '#C1C1C1' }} size={20} />
                          </div>
                          <p className={[styles.rates__text, styles.rates__text_unactive].join(' ')}>Рекомендации вакансии</p>
                        </div>
                      </div>
                      <div className={styles.rates__footer}>
                        <h3 className={styles.rates__salary}>1990 рублей</h3>
                        <p className={styles.rates__time}>
                          публикация на <span>15 дней</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rates__card}>
                    <div className={styles.rates__content}>
                      <div className={styles.rates__cardTitle}>Вакансия Pro</div>
                      <div className={styles.rates__efficiency}>
                        <div className={[styles.rates__efficiencyNumber, styles.rates__efficiencyNumber_three].join(' ')}>x6</div>
                        <div className={[styles.rates__efficiencyDesc, styles.rates__efficiencyDesc_three].join(' ')}>
                          в 6 раз <br /> эффективность
                        </div>
                      </div>
                      <div className={styles.rates__list}>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <IoMdCheckmark style={{ color: '#5CDA4A' }} size={20} />
                          </div>
                          <p className={styles.rates__text}>Просмотр резюме соискателей</p>
                        </div>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <IoMdCheckmark style={{ color: '#5CDA4A' }} size={20} />
                          </div>
                          <p className={styles.rates__text}>Отклик по телефону</p>
                        </div>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <IoMdCheckmark style={{ color: '#5CDA4A' }} size={20} />
                          </div>
                          <p className={styles.rates__text}>Продвижение в вакансии в ленте</p>
                        </div>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <IoMdCheckmark style={{ color: '#5CDA4A' }} size={20} />
                          </div>
                          <p className={styles.rates__text}>Приоритет в поиске</p>
                        </div>
                        <div className={styles.rates__item}>
                          <div className={styles.rates__icon}>
                            <IoMdCheckmark style={{ color: '#5CDA4A' }} size={20} />
                          </div>
                          <p className={styles.rates__text}>Рекомендации вакансии</p>
                        </div>
                      </div>
                      <div className={styles.rates__footer}>
                        <h3 className={styles.rates__salary}>3990 рублей</h3>
                        <p className={styles.rates__time}>
                          публикация на <span>30 дней</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href={'/profile/add-vacancy'} className={styles.rates__button}>
                  Опубликовать вакансию
                </Link>
              </div>
            </div>
          </section>

          <section className={[styles.employer__feedback, styles.feedback].join(' ')}>
            <div className="feedback__container">
              <div className={styles.feedback__wrapper}>
                <div className={styles.feedback__card}>
                  <div className={styles.feedback__content}>
                    <div className={styles.feedback__title}>Остались вопросы?</div>
                    <div className={styles.feedback__contentWrapper}>
                      <div className={styles.feedback__left}>
                        <h4 className={styles.feedback__write}>Напишите или позвоните</h4>
                        <p className={styles.feedback__desc}>Техническая поддержка и менеджеры ответят на все ваши вопросы:</p>
                        <div className={styles.feedback__contacts}>
                          <p className={styles.feedback__contactsItem}>+79780000000</p>
                          <p className={styles.feedback__contactsItem}>mailto:your@mail.ru</p>
                        </div>
                      </div>
                      <div className={styles.feedback__right}>
                        <input type="text" placeholder="Ваша электронная почта" className={styles.feedback__input} />
                        <textarea cols={30} rows={10} placeholder="Вашe сообщение" className={styles.feedback__textarea}></textarea>
                        <p className={styles.feedback__agreement}>
                          Нажимая кнопку «Отправить», вы принимаете условия <span>Правил</span> и <span>Соглашения</span> об использовании сайта
                          SewingWeb.ru
                        </p>
                        <div className={styles.feedback__submit}>Отправить</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </SiteLayout>
  )
}

export default AboutUs
