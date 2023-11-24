import { useQueryClient } from '@tanstack/react-query'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select from 'react-select'

import styles from './EditWorkExperience.module.scss'

import ResumeModal from '@/components/elements/Modal/ResumeModal/Layout/ResumeModal'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'

import { IWorkExperience } from '@/core/types/work-experience.interface'

import { JobseekerService } from '@/core/services/jobseeker/jobseeker.service'
import { mouth } from '@/core/utils/select-resume-data'

interface Props {
  experience: any
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const EditWorkexperience: FC<Props> = ({ experience, active, setActive }) => {
  // ========== DATE =============================
  const [monthStart, setMonthStart] = useState<string>('')
  const [yearStart, setYearStart] = useState<string>('')
  const [monthEnd, setMonthEnd] = useState<string | undefined>('')
  const [yearEnd, setYearEnd] = useState<string | undefined>('')

  const [untilNow, setUntilNow] = useState(false)

  const handleYearStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearStart(e.target.value)
  }

  const handleYearEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearEnd(e.target.value)
  }
  // ========================================================
  const queryClient = useQueryClient()

  // ========== REACT HOOK FORM =============================
  console.log(experience)
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
    }
  }, [experience, setValue])

  const onSubmit: SubmitHandler<IWorkExperience> = async data => {
    try {
      const respone = await JobseekerService.updateExperience(experience.id, data)
      queryClient.invalidateQueries({ queryKey: ['experience'] })
      setActive(false)
      reset()
    } catch (error: any) {
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
                        onChange={e => {
                          if (e.target.value.length) {
                            setYearStart(e.target.value)
                            setValue('startTime', `${monthStart} ${e.target.value}`)
                          }
                        }}
                        style={errors.startTime ? { borderColor: 'red' } : undefined}
                      />
                      {errors.startTime && <span className={styles.education__error}>Укажите дату начало работы</span>}
                    </>
                  )}
                />
              </div>
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
                        onChange={e => {
                          setYearEnd(e.target.value)
                          setValue('endTime', `${monthEnd} ${e.target.value}`)
                        }}
                        style={errors.endTime ? { borderColor: 'red' } : undefined}
                        disabled={untilNow}
                        value={untilNow ? '' : yearEnd}
                      />
                      {errors.endTime && <span className={styles.education__error}>Укажите дату начало работы</span>}
                    </>
                  )}
                />
              </div>
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
              <textarea {...register('experience')}></textarea>
            </div>
          </div>
        </div>

        <div className={styles.editModal__modalFooter}>
          <button className={styles.editModal__saveButton}>Сохранить</button>
          <div className={styles.editModal__resetButton} onClick={handleCancel}>
            Отменить
          </div>
          <span className={styles.editModal__footerError}>{errorUpdate}</span>
        </div>
      </form>
    </ResumeModal>
  )
}

export default EditWorkexperience
