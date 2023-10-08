import { applicant, employer } from './menu.data'
import Image from 'next/image'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

import styles from './ProfilesLayout.module.scss'

import logo from 'public/Logo/swId.svg'
import photo from 'public/Profiles/photoUser.svg'

const ProfilesLauout: FC<PropsWithChildren> = ({ children }) => {
  const roll = 'USER_APPLICANT' /* USER_APPLICANT   USER_EMPLOYER*/
  return (
    <main style={{ backgroundColor: '#EFF7FE' }} className="page">
      <div className={styles.profile}>
        <div className={styles.profile__nav}>
          <div className={styles.profile__navWrapper}>
            <div className={styles.profile__head}>
              <div className={styles.profile__photo}>
                <Image src={photo} alt={'Фотография'} />
              </div>
              <div className={styles.profile__name}>Пётр Петров</div>
              <div className={styles.profile__id}>ID: 123567</div>
            </div>
            <nav>
              <ul className={styles.profile__list}>
                {roll == 'USER_APPLICANT'
                  ? applicant.map((item, index) => {
                      return (
                        <li className={styles.profile__item} key={index}>
                          <Link href={item.href}>{item.views}</Link>
                        </li>
                      )
                    })
                  : employer.map((item, index) => {
                      return (
                        <li className={styles.profile__item} key={index}>
                          <Link href={item.href}>{item.views}</Link>
                        </li>
                      )
                    })}
                <li
                  className={[
                    styles.profile__item,
                    styles.profile__item_exit
                  ].join(' ')}
                >
                  <Link href={'/'}>Выход</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.profile__wrapper}>
          <div className={styles.profile__header}>
            <div className={styles.profile__pContainer}>
              <Link href="/" className={styles.profile__logo}>
                <Image src={logo} alt={'SewingWeb ID'} />
              </Link>
            </div>
          </div>
          <div className={styles.profile__content}>
            <div className={styles.profile__pContainer}>{children}</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProfilesLauout
