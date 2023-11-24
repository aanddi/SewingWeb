import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, FC, PropsWithChildren, SetStateAction, useEffect } from 'react'

import styles from './SuccessVacancy.module.scss'

import { AiOutlineClose } from 'react-icons/ai'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

interface Props {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const SuccessVacancy: FC<Props> = ({ active, setActive }) => {
  // блок скролла
  useEffect(() => {
    const headerElement = document.getElementById('header')
    const scrollbarWidth = window.innerWidth - document.body.clientWidth

    if (active) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`

      if (headerElement) {
        headerElement.style.right = `${scrollbarWidth}px`
      }
    } else {
      document.body.style.overflow = 'initial'
      document.body.style.paddingRight = '0px'

      if (headerElement) {
        headerElement.style.right = '0px'
      }
    }
  }, [active])

  const router = useRouter()

  const myVacancies = () => {
    setActive(false)
    router.push('/profile/my-vacancies')
  }
  return (
    <div className={active ? [styles.modal, styles.modal__active].join(' ') : styles.modal} onClick={() => setActive(false)}>
      <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
        <div className={styles.modal__close} onClick={() => setActive(false)}>
          <AiOutlineClose size={20} />
        </div>
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__success}>
            <IoMdCheckmarkCircleOutline size={150} style={{ color: 'green' }} />
          </div>
          <h1 className={styles.modal__title}>Успешно</h1>
          <div className={styles.modal__text}>
            <p>Ваша вакансия опубликована!</p>
            <p>Отслеживайте активность и статус вакансии в вашем кабинете</p>
          </div>
          <div onClick={myVacancies} className={styles.modal__link}>
            Мои вакансии
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessVacancy
