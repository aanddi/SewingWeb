import Image from 'next/image'
import { FC, PropsWithChildren, useState } from 'react'

import styles from './AuthLayout.module.scss'

import logo from 'public/Logo/swId.svg'

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {

  const [activeItem, setActiveItem] = useState(false)
  
  return (
    <>
      <main className="page">
        <div className={styles.auth}>
          <div className={styles.auth__image}></div>
          <div className={styles.auth__content}>
            <div className={styles.auth__container}>
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
                  <div onClick={() => {setActiveItem(false)}} className={activeItem ? styles.auth__applicant : [styles.auth__applicant, styles.auth__active].join(' ')}>
                    <span>Я соискатель</span>
                  </div>
                  <div onClick={() => {setActiveItem(true)}} className={activeItem ? [styles.auth__employer, styles.auth__active].join(' ') : styles.auth__employer}>
                    <span>Я работодатель</span>
                  </div>
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
