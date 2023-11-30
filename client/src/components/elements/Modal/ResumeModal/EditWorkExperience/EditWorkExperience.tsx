import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select from 'react-select'

import styles from './EditWorkExperience.module.scss'

import LoadingDots from '@/components/elements/Loading/LoadingDots'
import ResumeModal from '@/components/elements/Modal/ResumeModal/Layout/ResumeModal'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'

import { IWorkExperience } from '@/core/types/work-experience.interface'

import { JobseekerService } from '@/core/services/jobseeker/jobseeker.service'
import { mouth } from '@/core/utils/select-resume-data'

interface Props {
  experience: IWorkExperience | undefined
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const EditWorkexperience: FC<Props> = ({ experience, active, setActive }) => {
  const [maxLength, setMaxLength] = useState(1000)
  const [sizeField, setSizeField] = useState(0)
  // ========== DATE =============================
  const [monthStart, setMonthStart] = useState<string>('')
  const [yearStart, setYearStart] = useState<string>('')
  const [monthEnd, setMonthEnd] = useState<string | undefined>('')
  const [yearEnd, setYearEnd] = useState<string | undefined>('')

  const [yearStartError, setYearStartError] = useState(false)
  const [yearEndError, setYearEndError] = useState(false)

  const [untilNow, setUntilNow] = useState(false)

  const handleYearStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length) {
      setYearStart(e.target.value)
      setValue('startTime', `${monthStart} ${e.target.value}`)
    }

    if (e.target.value.length > 4) {
      setYearStartError(true)
    } else {
      setYearStartError(false)
    }
  }

  const handleYearEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearEnd(e.target.value)
    setValue('endTime', `${monthEnd} ${e.target.value}`)
    if (e.target.value.length > 4) {
      setYearEndError(true)
    } else {
      setYearEndError(false)
    }
  }

  useEffect(() => {
    if (untilNow) {
      setYearEndError(false)
      setYearStartError(false)
    }
  }, [untilNow])
  // ========================================================
  const queryClient = useQueryClient()

  const mutationExperience = useMutation({
    mutationKey: ['deleteExperience'],
    mutationFn: async (id: number | undefined) => {
      const respone = await JobseekerService.deleteExperience(id)
      queryClient.invalidateQueries({ queryKey: ['experience'] })
      setActive(false)
      return respone
    }
  })

  // ========== REACT HOOK FORM =============================
  const [isLoading, setIsLoading] = useState(false)

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

  useEffect(() => {
    if (experience) {
      const [startMonth, startYear] = experience.startTime.split(' ')

      if (experience.endTime) {
        const [endMonth, endYear] = experience.endTime.split(' ')
        setMonthEnd(endMonth)
        setYearEnd(endYear)
        setValue('endTime', `${endMonth} ${endYear}`)
      } else {
        setMonthEnd(undefined)
        setYearEnd(undefined)
      }

      setMonthStart(startMonth)
      setYearStart(startYear)

      setValue('city', experience.city)
      setValue('company', experience.company)
      setValue('post', experience.post)
      setValue('startTime', `${startMonth} ${startYear}`)
      setValue('untilNow', experience.untilNow)

      setValue('experience', experience.experience)
      const size = experience.experience?.length
      if (size) {
        setSizeField(size)
      } else {
        setSizeField(0)
      }
    }
  }, [experience, setValue])

  const onSubmit: SubmitHandler<IWorkExperience> = async data => {
    setIsLoading(true)
    try {
      const respone = await JobseekerService.updateExperience(experience?.id, data)
      queryClient.invalidateQueries({ queryKey: ['experience'] })
      setActive(false)
      setIsLoading(false)
      reset()
    } catch (error: any) {
      setIsLoading(false)
      setErrorUpdate(error.response.data.message)
    }
  }

  const handleCancel = () => {
    reset()
    setActive(false)
  }

  const yearRules = {
    required: 'Укажите дату начало работы',
    pattern: {
      value: /^\d{4}$/,
      message: 'Год должен состоять из четырех цифр'
    }
  }
  // ========================================================
  return (
    <ResumeModal active={active} setActive={setActive}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.editModal}>
        <div className={styles.editModal__formContent}>
          <h2 className={styles.editModal__titleModal}>Редактировать информацию</h2>
          <FieldProfile
            {...register('city', {
              required: 'Укажите учебное заведение'
            })}
            type={'text'}
            title={'Город'}
            star={true}
            error={errors.city?.message}
          />
          <FieldProfile
            {...register('company', {
              required: 'Укажите название компании'
            })}
            type={'text'}
            title={'Компания'}
            star={true}
            error={errors.company?.message}
          />
          <FieldProfile
            {...register('post', {
              required: 'Укажите должность'
            })}
            type={'text'}
            title={'Должность'}
            star={true}
            error={errors.post?.message}
          />

          <div className={styles.editModal__dateBlock}>
            <div className={styles.editModal__dateLabel}>
              <span>Начало работы</span>
              <span className={styles.editModal__required}>*</span>
            </div>
            <div className={styles.editModal__inputs}>
              <div className={styles.editModal__input}>
                <Controller
                  name="startTime"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <Select
                        classNamePrefix="custom-select"
                        options={mouth ? mouth : []}
                        isMulti={false}
                        isSearchable={false}
                        placeholder="Месяц"
                        value={mouth.find(option => option.label == monthStart)}
                        onChange={selectedOption => {
                          if (selectedOption && typeof selectedOption !== 'string') {
                            setMonthStart(selectedOption.label)
                            setValue('startTime', `${selectedOption.label} ${yearStart}`)
                          }
                        }}
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            borderColor: errors.startTime ? '#EB0000' : provided.borderColor
                          })
                        }}
                      />
                      <input
                        type="number"
                        placeholder="Год"
                        value={yearStart}
                        onChange={e => handleYearStartChange(e)}
                        style={errors.startTime || yearStartError ? { borderColor: 'red' } : undefined}
                      />
                    </>
                  )}
                />
              </div>
              {yearStartError ? <span className={styles.editModal__error}>Укажите действительный год</span> : null}
              {errors.startTime && <span className={styles.editModal__error}>Укажите дату начало работы</span>}
            </div>
          </div>

          <div className={styles.editModal__dateBlock}>
            <div className={styles.editModal__dateLabel}>
              <span>Конец работы</span>
              {untilNow ? null : <span className={styles.editModal__required}>*</span>}
            </div>
            <div className={styles.editModal__inputs}>
              <div className={styles.editModal__input}>
                <Controller
                  name="endTime"
                  control={control}
                  rules={{ required: !untilNow }}
                  render={({ field }) => (
                    <>
                      <Select
                        classNamePrefix="custom-select"
                        options={mouth ? mouth : []}
                        isMulti={false}
                        isSearchable={false}
                        value={untilNow ? '' : mouth.find(option => option.label == monthEnd)}
                        placeholder="Месяц"
                        isDisabled={untilNow}
                        onChange={selectedOption => {
                          if (selectedOption && typeof selectedOption !== 'string') {
                            setMonthEnd(selectedOption.label)
                            setValue('endTime', `${selectedOption.label} ${yearEnd}`)
                          }
                        }}
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            borderColor: errors.endTime ? '#EB0000' : provided.borderColor
                          })
                        }}
                      />
                      <input
                        type="number"
                        placeholder="Год"
                        onChange={e => handleYearEndChange(e)}
                        style={errors.endTime || yearEndError ? { borderColor: 'red' } : undefined}
                        disabled={untilNow}
                        value={untilNow ? '' : yearEnd}
                      />
                    </>
                  )}
                />
              </div>
              {yearEndError ? <span className={styles.editModal__error}>Укажите действительный год</span> : null}
              {errors.endTime && <span className={styles.editModal__error}>Укажите дату начало работы</span>}
              <div className={styles.editModal__checkbox}>
                <input
                  {...register('untilNow')}
                  type="checkbox"
                  checked={untilNow}
                  onChange={() => {
                    setUntilNow(!untilNow)
                  }}
                />
                <span>По настоящее время</span>
              </div>
            </div>
          </div>

          <div className={styles.editModal__block}>
            <div className={styles.editModal__label}>Обязанности, функции и достижения</div>
            <div className={styles.editModal__textarea}>
              <textarea maxLength={maxLength} {...register('experience')} onChange={e => setSizeField(e.target.value.length)} />
              <div className={styles.editModal__size}>
                {sizeField}/{maxLength} символов
              </div>
            </div>
          </div>
        </div>

        <div className={styles.editModal__modalFooter}>
          <div className={styles.editModal__footerWrapper}>
            <button className={styles.editModal__saveButton}>{isLoading ? <LoadingDots color="#fff" /> : 'Сохранить'}</button>
            <div className={styles.editModal__resetButton} onClick={handleCancel}>
              Отменить
            </div>
            <span className={styles.editModal__footerError}>{errorUpdate}</span>
          </div>
          <div className={styles.editModal__deleteButton} onClick={() => mutationExperience.mutate(experience?.id)}>
            {mutationExperience.isPending ? <LoadingDots color={'red'} /> : 'Удалить'}
          </div>
        </div>
      </form>
    </ResumeModal>
  )
}

export default EditWorkexperience
