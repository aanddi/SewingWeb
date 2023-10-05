import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren, useState } from 'react'

import styles from './AuthLayout.module.scss'

import logo from 'public/Logo/swId.svg'

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  const path = usePathname()
  const pathElem = String(path).split('/')

  return (
    <>
      <main className="page">
        <div className={styles.auth}>
          <div className={styles.auth__image}></div>
          <div className={styles.auth__content}>
            <div className={styles.auth__wrapper}>
              <div className={styles.auth__main}>
                <header className={styles.auth__header}>
                  <div className={styles.auth__logo}>
                    <Image src={logo} alt={'SewingWeb ID'} />
                  </div>
                  <div className={styles.auth__back}>
                    <span>x</span>
                  </div>
                </header>
                <div className={styles.auth__choice}>
                  <Link
                    href="/login/applicant"
                    className={
                      pathElem[2] == 'applicant'
                        ? [styles.auth__applicant, styles.auth__active].join(
                            ' '
                          )
                        : styles.auth__applicant
                    }
                  >
                    <span>Я соискатель</span>
                  </Link>
                  <Link
                    href="/login/employer"
                    className={
                      pathElem[2] == 'employer'
                        ? [styles.auth__employer, styles.auth__active].join(' ')
                        : styles.auth__employer
                    }
                  >
                    <span>Я работодатель</span>
                  </Link>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AuthLayout
