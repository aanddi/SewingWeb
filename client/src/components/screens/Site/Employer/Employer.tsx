import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Employer.module.scss'

import SiteLayout from '@/components/layouts/Site/SiteLayout'

import { IEmployer } from './Employer.interface'

import { HiOutlineXMark } from 'react-icons/hi2'
import { IoMdCheckmark } from 'react-icons/io'

import number1 from 'public/Employers/01.svg'
import number2 from 'public/Employers/02.svg'
import number3 from 'public/Employers/03.svg'
import arrowBot from 'public/Employers/arrowBot.svg'
import arrowTop from 'public/Employers/arrowTop.svg'
import head_img1 from 'public/Employers/head_img1.svg'
import head_img2 from 'public/Employers/head_img2.svg'
import head_line from 'public/Employers/head_line.svg'
import pattern1 from 'public/Employers/pattern1.svg'
import pattern2 from 'public/Employers/pattern2.svg'
import pattern3 from 'public/Employers/pattern3.svg'
import pattern5 from 'public/Employers/pattern5.svg'

const Employer: FC<IEmployer> = props => {
  return (
    <SiteLayout>
      <div className={styles.employer}>
        <section className={[styles.employer__main, styles.main].join(' ')}>
          <div className="main__container">
            <div className={styles.main__wrapper}>
              <h1 className={styles.main__title}>
                {' '}
                Разместите <br /> вакансию на SewingWeb
              </h1>
              <h3 className={styles.main__subTitle}> Все необходимые инструменты для качественного найма </h3>
              <div className={styles.main__buttons}>
                <Link href="/" className={[styles.main__button, styles.main__button_blue].join(' ')}>
                  Разместить вакансию
                </Link>
                <Link href="/" className={[styles.main__button, styles.main__button_transparent].join(' ')}>
                  Найти резюме
                </Link>
              </div>
              <p className={styles.main__description}>
                Вакансия — это объявление о поиске сотрудника. Опишите, кто нужен, и выбирайте лучших среди
                откликнувшихся.
              </p>
              <Image src={head_line} alt="" className={[styles.main__pattern, styles.main__pattern_line].join(' ')} />
              <Image src={head_img1} alt="" className={[styles.main__pattern, styles.main__pattern_img1].join(' ')} />
              <Image src={head_img2} alt="" className={[styles.main__pattern, styles.main__pattern_img2].join(' ')} />
            </div>
          </div>
        </section>

        <section className={[styles.employer__info, styles.info].join(' ')}>
          <div className="info__container">
            <div className={styles.info__wrapper}>
              <Image src={pattern1} alt="" className={[styles.info__pattern, styles.info__pattern_top].join(' ')} />
              <Image
                src={pattern2}
                alt=""
                className={[styles.info__pattern, styles.info__pattern_rightTop].join(' ')}
              />
              <Image
                src={pattern3}
                alt=""
                className={[styles.info__pattern, styles.info__pattern_leftBottom].join(' ')}
              />
              {/*
               <Image src={pattern4} alt=""  className={[styles.info__pattern, styles.info__pattern_centerBottom].join(' ')}/>
              */}
              <Image
                src={pattern5}
                alt=""
                className={[styles.info__pattern, styles.info__pattern_rightBottom].join(' ')}
              />
              <h2 className={styles.info__title}>
                С чего начать поиск <br /> сотрудников?
              </h2>
              <div className={styles.info__cards}>
                <Image src={arrowTop} alt="" className={[styles.info__arrow, styles.info__arrow_top].join(' ')} />
                <Image src={arrowBot} alt="" className={[styles.info__arrow, styles.info__arrow_bot].join(' ')} />
                <div className={styles.info__card}>
                  <div className={styles.info__content}>
                    <div className={styles.info__number}>
                      <Image src={number1} alt="1" />
                    </div>
                    <h3 className={styles.info__cardTitle}>Зарегистрируйтесь</h3>
                    <p className={styles.info__cardSubTitle}>Откройте для себя все удобства нашего сервиса</p>
                  </div>
                </div>
                <div className={styles.info__card}>
                  <div className={styles.info__content}>
                    <div className={styles.info__number}>
                      <Image src={number2} alt="2" />
                    </div>
                    <h3 className={styles.info__cardTitle}>Разместите вакансию</h3>
                    <p className={styles.info__cardSubTitle}>Выберите подходящий для себя тариф</p>
                  </div>
                </div>
                <div className={styles.info__card}>
                  <div className={styles.info__content}>
                    <div className={styles.info__number}>
                      <Image src={number3} alt="3" />
                    </div>
                    <h3 className={styles.info__cardTitle}>Найдите работника</h3>
                    <p className={styles.info__cardSubTitle}>Читайте резюме откликнувшихся и выберайте лучших</p>
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
                      <p className={[styles.rates__efficiencyNumber, styles.rates__efficiencyNumber_one].join(' ')}>
                        x1
                      </p>
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
                        <p className={[styles.rates__text, styles.rates__text_unactive].join(' ')}>
                          Продвижение в рассылке
                        </p>
                      </div>
                      <div className={styles.rates__item}>
                        <div className={styles.rates__icon}>
                          <HiOutlineXMark style={{ color: '#C1C1C1' }} size={20} />
                        </div>
                        <p className={[styles.rates__text, styles.rates__text_unactive].join(' ')}>
                          Приоритет в поиске
                        </p>
                      </div>
                      <div className={styles.rates__item}>
                        <div className={styles.rates__icon}>
                          <HiOutlineXMark style={{ color: '#C1C1C1' }} size={20} />
                        </div>
                        <p className={[styles.rates__text, styles.rates__text_unactive].join(' ')}>Автоподбор резюме</p>
                      </div>
                      <div className={styles.rates__item}>
                        <div className={styles.rates__icon}>
                          <HiOutlineXMark style={{ color: '#C1C1C1' }} size={20} />
                        </div>
                        <p className={[styles.rates__text, styles.rates__text_unactive].join(' ')}>
                          Топ поиска на 7 дней
                        </p>
                      </div>
                    </div>
                    <div className={styles.rates__footer}>
                      <h3 className={styles.rates__salary}>0 рублей</h3>
                      <p className={styles.rates__time}>публикация на 7 дней</p>
                    </div>
                  </div>
                </div>
                <div className={styles.rates__card}>
                  <div className={styles.rates__content}>
                    <div className={styles.rates__cardTitle}>Вакансия Премиум</div>
                    <div className={styles.rates__efficiency}>
                      <div className={[styles.rates__efficiencyNumber, styles.rates__efficiencyNumber_two].join(' ')}>
                        x2
                      </div>
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
                        <p className={styles.rates__text}>Продвижение в рассылке</p>
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
                        <p className={[styles.rates__text, styles.rates__text_unactive].join(' ')}>Автоподбор резюме</p>
                      </div>
                      <div className={styles.rates__item}>
                        <div className={styles.rates__icon}>
                          <HiOutlineXMark style={{ color: '#C1C1C1' }} size={20} />
                        </div>
                        <p className={[styles.rates__text, styles.rates__text_unactive].join(' ')}>
                          Топ поиска на 7 дней
                        </p>
                      </div>
                    </div>
                    <div className={styles.rates__footer}>
                      <h3 className={styles.rates__salary}>1990 рублей</h3>
                      <p className={styles.rates__time}>публикация на 15 дней</p>
                    </div>
                  </div>
                </div>
                <div className={styles.rates__card}>
                  <div className={styles.rates__content}>
                    <div className={styles.rates__cardTitle}>Вакансия Pro</div>
                    <div className={styles.rates__efficiency}>
                      <div className={[styles.rates__efficiencyNumber, styles.rates__efficiencyNumber_three].join(' ')}>
                        x6
                      </div>
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
                        <p className={styles.rates__text}>Продвижение в рассылке</p>
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
                        <p className={styles.rates__text}>Автоподбор резюме</p>
                      </div>
                      <div className={styles.rates__item}>
                        <div className={styles.rates__icon}>
                          <IoMdCheckmark style={{ color: '#5CDA4A' }} size={20} />
                        </div>
                        <p className={styles.rates__text}>Топ поиска на 7 дней</p>
                      </div>
                    </div>
                    <div className={styles.rates__footer}>
                      <h3 className={styles.rates__salary}>3990 рублей</h3>
                      <p className={styles.rates__time}>публикация на 30 дней</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rates__button}>Опубликовать вакансию</div>
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
                      <p className={styles.feedback__desc}>
                        Техническая поддержка и менеджеры ответят на все ваши вопросы:
                      </p>
                      <div className={styles.feedback__contacts}>
                        <p className={styles.feedback__contactsItem}>+79780000000</p>
                        <p className={styles.feedback__contactsItem}>mailto:your@mail.ru</p>
                      </div>
                    </div>
                    <div className={styles.feedback__right}>
                      <input type="text" placeholder="Ваша электронная почта" className={styles.feedback__input} />
                      <textarea
                        cols={30}
                        rows={10}
                        placeholder="Вашe сообщение"
                        className={styles.feedback__textarea}
                      ></textarea>
                      <p className={styles.feedback__agreement}>
                        Нажимая кнопку «Отправить», вы принимаете условия <span>Правил</span> и <span>Соглашения</span>{' '}
                        об использовании сайта SewingWeb.ru
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
    </SiteLayout>
  )
}

export default Employer
