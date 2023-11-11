import { Dispatch, FC, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './WorkExperience.module.scss'

import ResumeModal from '@/components/elements/Modal/ResumeModal/Layout/ResumeModal'

import { IWorkExperience } from '@/core/types/work-experience.interface'

interface Props {
  resumeId: number | undefined
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const WorkExperience: FC<Props> = ({ resumeId, active, setActive }) => {
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
  } = useForm<IWorkExperience>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IWorkExperience> = async data => {
    console.log(data)
  }

  const handleCancel = () => {
    reset()
    setActive(false)
  }

  return (
    <ResumeModal active={active} setActive={setActive}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.workExperience}>
        <div className={styles.workExperience__formContent}>
          <h2 className={styles.workExperience__titleModal}>Добавить место работы</h2>
        </div>
        <div className={styles.workExperience__modalFooter}>
          <button className={styles.workExperience__saveButton}>Сохранить</button>
          <div className={styles.workExperience__resetButton} onClick={handleCancel}>
            Отменить
          </div>
          <span className={styles.workExperience__footerError}>{errorUpdate}</span>
        </div>
      </form>
    </ResumeModal>
  )
}

export default WorkExperience
