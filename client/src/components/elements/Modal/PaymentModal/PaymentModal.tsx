import { Dispatch, FC, PropsWithChildren, SetStateAction, useEffect } from 'react'

import styles from './PaymentModal.module.scss'

import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  tarif: string | undefined
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const PaymentModal: FC<PropsWithChildren<Props>> = ({ tarif, children, active, setActive }) => {
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
  return (
    <div className={active ? [styles.modal, styles.modal__active].join(' ') : styles.modal} onClick={() => setActive(false)}>
      <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
        <div className={styles.modal__close} onClick={() => setActive(false)}>
          <AiOutlineClose size={20} />
        </div>
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__title}>Оплата</div>
          <p className={styles.modal__descItem}>Номер заказа: 4353</p>
          <p className={styles.modal__descItem}>Описание заказа: оплата платного тарифа вакансии</p>
          <p className={styles.modal__descItem}>Тариф: {tarif ? tarif : ''}</p>

          <div className={styles.modal__cart}>
            <div className={styles.modal__cardInfo}>
              <div className={styles.modal__number}>
                <p className={styles.modal__label}>Номер карты</p>
                <input type="text" value={'2200 1111 2222 3333'} />
              </div>
              <div className={styles.modal__term}>
                <div className={styles.modal__month}>
                  <p className={styles.modal__label}>Месяц</p>
                  <input type="text" value={'12'} />
                </div>
                <div className={styles.modal__year}>
                  <p className={styles.modal__label}>Год</p>
                  <input type="text" value={'2023'} />
                </div>
              </div>
            </div>
            <div className={styles.modal__cardCvv}>
              <div className={styles.modal__cvv}>
                <p className={styles.modal__label}>cvv/cvc</p>
                <input type="text" value={'123'} />
              </div>
            </div>
          </div>
          {children}
          <p className={styles.modal__warning}>Оплачивая, вы соглашаетесь с договором офферты</p>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal
