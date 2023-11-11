import { Dispatch, FC, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './Education.module.scss'

import ResumeModal from '@/components/elements/Modal/ResumeModal/Layout/ResumeModal'

import { IEducation } from '@/core/types/education.interface'

interface Props {
  resumeId: number | undefined
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const Education: FC<Props> = ({ resumeId, active, setActive }) => {
  // ========== REACT HOOK FORM =============================

  // save error server
  const [errorUpdate, setErrorUpdate] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors }
  } = useForm<IEducation>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IEducation> = async data => {
    console.log(data)
  }

  const handleCancel = () => {
    reset()
    setActive(false)
  }

  return (
    <ResumeModal active={active} setActive={setActive}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.education}>
        <div className={styles.education__formContent}>
          <h2 className={styles.education__titleModal}>Добавить место учебы</h2>
        </div>
        <div className={styles.education__modalFooter}>
          <button className={styles.education__saveButton}>Сохранить</button>
          <div className={styles.education__resetButton} onClick={handleCancel}>
            Отменить
          </div>
          <span className={styles.education__footerError}>{errorUpdate}</span>
        </div>
      </form>
    </ResumeModal>
  )
}

export default Education
