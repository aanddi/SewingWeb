import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import styles from './AuthLayout.module.scss'

import { AiOutlineClose } from 'react-icons/ai'

import logo from 'public/Logo/logoAuth.svg'

interface IAuthLayout {
  children: any
}

const AuthLayout: FC<IAuthLayout> = props => {
  const path = usePathname()
  const pathElem = String(path).split('/')

  return (
    <main className="page" style={{ backgroundColor: '#fff' }}>
      <div className={styles.auth}>
        <div className={styles.auth__image}></div>
        <div className={styles.auth__content}>
          <div className={styles.auth__wrapper}>
            <div className={styles.auth__main}>
              <header className={styles.auth__header}>
                <div className={styles.auth__logo}>
                  <Image src={logo} alt={'SewingWeb ID'} priority={true} />
                </div>
                <div className={styles.auth__back}>
                  <Link href="/" className={styles.auth__closeBg}>
                    <AiOutlineClose size={18} />
                  </Link>
                </div>
              </header>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
