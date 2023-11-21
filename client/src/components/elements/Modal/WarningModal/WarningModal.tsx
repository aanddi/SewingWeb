import { Dispatch, FC, PropsWithChildren, SetStateAction, useEffect } from 'react'

import styles from './WarningModal.module.scss'

import { AiOutlineClose } from 'react-icons/ai'
import { PiSealWarning } from 'react-icons/pi'

interface Props {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  message?: string
}

const SuccessVacancy: FC<PropsWithChildren<Props>> = ({ children, active, setActive, message }) => {
  return (
    <div className={active ? [styles.modal, styles.modal__active].join(' ') : styles.modal} onClick={() => setActive(false)}>
      <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
        <div className={styles.modal__close} onClick={() => setActive(false)}>
          <AiOutlineClose size={20} />
        </div>

        <div className={styles.modal__wrapper}>
          <div className={styles.modal__header}>
            <PiSealWarning style={{ color: '#3490DF' }} size={100} />
            <h2 className={styles.modal__title}>Вы уверены?</h2>
            <p className={styles.modal__subTitle}>Данное действие не обратимо</p>
            <p className={styles.modal__message}>{message}</p>
          </div>
          <div className={styles.modal__button}>
            {children}
            <span onClick={() => setActive(false)} className={styles.modal__closeButton}>
              Отменить
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessVacancy
