import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren, useState } from 'react'

import styles from './AuthLayout.module.scss'

import close from 'public/Auth/close.svg'
import logo from 'public/Logo/swId.svg'

interface IAuthLayout {
  children: any
}

const AuthLayout: FC<IAuthLayout> = props => {
  const path = usePathname()
  const pathElem = String(path).split('/')

  return (
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
                  <Link href="/" className={styles.auth__closeBg}>
                    <Image src={close} alt={'x'} />
                  </Link>
                </div>
              </header>
              {/*
             
              */}
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
