import notFound from '/public/404/404.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './NotFound.module.scss'

import SiteLayout from '@/components/layouts/Site/SiteLayout'

const NotFound: FC = () => {
  const router = useRouter()
  return (
    <SiteLayout>
      <div className={styles.notFound}>
        <div className="notFound__container">
          <div className={styles.notFound__content}>
            <div className={styles.notFound__img}>
              <Image src={notFound} alt={'404'} width={250} />
            </div>
            <div className={styles.notFound__title}>К сожалению, такой страницы нет</div>
            <div className={styles.notFound__subTitle}>Но у нас много других страниц, где можно найти работу или сотрудника</div>
            <div className={styles.notFound__footer}>
              <button onClick={() => router.back()} className={[styles.notFound__button, styles.notFound__button_toBack].join(' ')}>
                Вернутся назад
              </button>
              <button onClick={() => router.replace('/')} className={[styles.notFound__button, styles.notFound__button_toHome].join(' ')}>
                На главную
              </button>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default NotFound
