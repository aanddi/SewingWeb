import { Dispatch, FC, SetStateAction, useEffect } from 'react'

import styles from './RulesVacancyModal.module.scss'

import RulesVacancy from '../../RulesSite/RulesVacancy'

import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const RulesVacancyModal: FC<Props> = ({ active, setActive }) => {
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
          <RulesVacancy />
        </div>
      </div>
    </div>
  )
}

export default RulesVacancyModal
