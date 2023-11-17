import { Dispatch, FC, PropsWithChildren, SetStateAction, useEffect } from 'react'

import styles from './ResumeModal.module.scss'

interface Props {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const ResumeModal: FC<PropsWithChildren<Props>> = ({ active, setActive, children }) => {
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
    <>
      <div className={active ? [styles.modal, styles.modal__active].join(' ') : [styles.modal, styles.modal__unactive].join(' ')}>
        <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>
  )
}

export default ResumeModal
