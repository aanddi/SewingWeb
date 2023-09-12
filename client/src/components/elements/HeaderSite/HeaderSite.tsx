import { NextPage } from "next";
import Image from "next/image";
import Link from 'next/link';

import styles from "./HeaderSite.module.scss"

import logoMenu from "public/Logo/logoMenu.svg"

interface Props {
  
}

const HeaderSite: NextPage<Props> = (props) => {
  return (
    <header className={styles.header}>
      <div className="header__container">
        <div className={styles.header__content}>
          <div className={styles.header__logo}>
            <Image 
              src={logoMenu} 
              alt="SewingWeb"  
            />
          </div>

          <div className={styles.header__menu}>
            <nav className={styles.header__menuNav}>
              <ul className={styles.header__menuList}>
                <li className={styles.header__menuItem}>
                  <Link href="/" className={styles.header__menuLink}>Найти работу</Link>
                </li>
                <li className={styles.header__menuItem}>
                  <Link href="/employer" className={styles.header__menuLink}>Работодателю</Link>
                </li>
                <li className={styles.header__menuItem}>
                  <Link href="/professions" className={styles.header__menuLink}>Профессии</Link>
                </li>
                <li className={styles.header__menuItem}>
                  <Link href="/companies" className={styles.header__menuLink}>Предприятия</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.header__control}>
            <div className={styles.header__city}>
              <div className={styles.header__cityText}>Город</div>
              <div className={styles.header__cityIcon}></div>
            </div>
            <div className={styles.header__login}>
              <div className={styles.header__loginBtn}>Войти</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  ) 
};

export default HeaderSite;