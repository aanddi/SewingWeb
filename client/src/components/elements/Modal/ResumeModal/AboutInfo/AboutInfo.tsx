import { useQueryClient } from '@tanstack/react-query'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './AboutInfo.module.scss'

import ResumeModal from '@/components/elements/Modal/ResumeModal/Layout/ResumeModal'

import { useAuth } from '@/core/hooks/useAuth'
import { UpdateAbout } from '@/core/services/jobseeker/jobseeker.helper'
import { jobseekerService } from '@/core/services/jobseeker/jobseeker.service'

interface Props {
  about: string | undefined
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const AboutInfo: FC<Props> = ({ about, active, setActive }) => {
  const { user } = useAuth()

  // ========== REACT HOOK FORM =============================
  const queryClient = useQueryClient()
  // save error server
  const [errorUpdate, setErrorUpdate] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors }
  } = useForm<UpdateAbout>({
    mode: 'onChange',
    defaultValues: {}
  })

  useEffect(() => {
    if (about !== undefined) {
      setValue('about', about)
    }
  }, [about])

  const onSubmit: SubmitHandler<UpdateAbout> = async (data: UpdateAbout) => {
    try {
      const updateAbout = await jobseekerService.updateAboutResume(user?.id, data)
      queryClient.invalidateQueries({ queryKey: ['resume'] })
      setActive(false)
    } catch (error: any) {
      setErrorUpdate(error.response.data.message)
    }
  }

  const handleCancel = () => {
    reset()
    setActive(false)
  }

  return (
    <ResumeModal active={active} setActive={setActive}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.aboutInfo}>
        <div className={styles.aboutInfo__formContent}>
          <h2 className={styles.aboutInfo__titleModal}>Информацию о себе</h2>
          <p>расскажите о ваших достоинствах, ....</p>
          <div className={styles.aboutInfo__block}>
            <textarea className={styles.aboutInfo__textarea} {...register('about')} />
          </div>
          {errors.about && <span className={styles.aboutInfo__error}>{errors.about.message}</span>}
        </div>
        <div className={styles.aboutInfo__modalFooter}>
          <button className={styles.aboutInfo__saveButton}>Сохранить</button>
          <div className={styles.aboutInfo__resetButton} onClick={handleCancel}>
            Отменить
          </div>
          <span className={styles.aboutInfo__footerError}>{errorUpdate}</span>
        </div>
      </form>
    </ResumeModal>
  )
}

export default AboutInfo
