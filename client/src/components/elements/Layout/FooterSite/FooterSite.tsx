import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './FooterSite.module.scss'

import dzen from 'public/Footer/dzen.svg'
import telegram from 'public/Footer/telegram.svg'
import vk from 'public/Footer/vk.svg'
import youtube from 'public/Footer/youtube.svg'

interface Props {}

const FooterSite: FC<Props> = props => {
  return (
    <footer className={styles.footer}>
      <div className="footer__container">
        <nav className={styles.footer__menu}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <h3 className={styles.footer__title}>Информация</h3>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                О SewingWeb
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Реклама на SewingWeb
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Правила сайта
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Защита персональных данных
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Панель Администратора
              </Link>
            </li>
          </ul>

          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <h3 className={styles.footer__title}>Соискателю</h3>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Кабинет
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Поиск вакансии
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Каталог компаний
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Каталог профессий
              </Link>
            </li>
          </ul>

          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <h3 className={styles.footer__title}>Работодателю</h3>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Кабинет
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Информация
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Найти сотрудников
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Каталог профессий
              </Link>
            </li>
          </ul>

          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <h3 className={styles.footer__title}>Профессии</h3>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Список профессий
              </Link>
            </li>
          </ul>

          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <h3 className={styles.footer__title}>Предприятия</h3>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Список предприятий
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.footer__social}>
          <Link href="/">
            <Image src={vk} alt="Вконтакте" />
          </Link>
          <Link href="/">
            <Image src={telegram} alt="Телеграм" />
          </Link>
          <Link href="/">
            <Image src={youtube} alt="Ютуб" />
          </Link>
          <Link href="/">
            <Image src={dzen} alt="Дзен" />
          </Link>
        </div>

        <div className={styles.footer__bottom}>
          <div className={styles.footer__textCompany}>© 2023 SewingWeb</div>
          <div className="footer__develop">
            <Link target="__blank" href="https://github.com/aanddi/SewingWeb">
              Anval Team
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSite
