import { useQueryClient } from '@tanstack/react-query'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './AboutInfo.module.scss'

import LoadingDots from '@/components/elements/Loading/LoadingDots'
import ResumeModal from '@/components/elements/Modal/ResumeModal/Layout/ResumeModal'

import { UpdateAbout } from '@/core/services/jobseeker/jobseeker.interface'

import { useAuth } from '@/core/hooks/useAuth'
import { JobseekerService } from '@/core/services/jobseeker/jobseeker.service'

interface Props {
  about: string | undefined
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const AboutInfo: FC<Props> = ({ about, active, setActive }) => {
  const { user } = useAuth()
  const [maxLength, setMaxLength] = useState(3000)
  const [sizeField, setSizeField] = useState(0)

  // ========== REACT HOOK FORM =============================
  const [isLoading, setIsLoading] = useState(false)

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
    if (about) {
      setValue('about', about)
      setSizeField(about.length)
    }
  }, [about])

  const onSubmit: SubmitHandler<UpdateAbout> = async (data: UpdateAbout) => {
    setIsLoading(true)
    try {
      const updateAbout = await JobseekerService.updateAboutResume(user?.id, data)
      queryClient.invalidateQueries({ queryKey: ['resume'] })
      setIsLoading(false)
      setActive(false)
      reset()
    } catch (error: any) {
      setErrorUpdate(error.response.data.message)
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    reset({
      about: about
    })
    setActive(false)
  }

  return (
    <ResumeModal active={active} setActive={setActive}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.aboutInfo}>
        <div className={styles.aboutInfo__formContent}>
          <h2 className={styles.aboutInfo__titleModal}>Информация о себе</h2>
          <div className={styles.aboutInfo__block}>
            <textarea
              maxLength={maxLength}
              className={styles.aboutInfo__textarea}
              {...register('about')}
              onChange={e => setSizeField(e.target.value.length)}
            />
            <div className={styles.aboutInfo__size}>
              {sizeField}/{maxLength} символов
            </div>
          </div>
          {errors.about && <span className={styles.aboutInfo__error}>{errors.about.message}</span>}
        </div>
        <div className={styles.aboutInfo__modalFooter}>
          <button className={styles.aboutInfo__saveButton}>{isLoading ? <LoadingDots color="#fff" /> : 'Сохранить'}</button>
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
