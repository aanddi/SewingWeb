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
        className={
          active ? [styles.modal, styles.modal__active].join(' ') : [styles.modal, styles.modal__unactive].join(' ')
        }
      >
        <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>
  )
}

export default ResumeModal
