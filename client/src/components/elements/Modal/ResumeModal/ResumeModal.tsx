import { Dispatch, FC, PropsWithChildren, SetStateAction, useEffect } from 'react'

import styles from './ResumeModal.module.scss'

interface Props {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const ResumeModal: FC<PropsWithChildren<Props>> = ({ active, setActive, children }) => {
  // блок скролла
  useEffect(() => {
    if (active) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'visible'
  }, [active])

  return (
    <>
      <div
        className={active ? [styles.modal, styles.modal__active].join(' ') : styles.modal}
        onClick={() => setActive(false)}
      >
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
            {children}
          </div>
          <div className={styles.modal__footer}>
            <div className={[styles.modal__button, styles.modal__button_save].join(' ')}>Сохранить</div>
            <div
              className={[styles.modal__button, styles.modal__button_close].join(' ')}
              onClick={() => setActive(false)}
            >
              Отмена
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResumeModal
