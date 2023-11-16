import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select, { MultiValue } from 'react-select'

import styles from './PersonalInfo.module.scss'

import ResumeModal from '@/components/elements/Modal/ResumeModal/Layout/ResumeModal'
import Error from '@/components/ui/ErrorForm/ErrorForm'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'

import { IResume } from '@/core/types/resume.interface'

import { validMail, validPhone } from '@/core/helpers/valid-field'
import { useAuth } from '@/core/hooks/useAuth'
import { JobseekerService } from '@/core/services/jobseeker/jobseeker.service'
import { ProfessionService } from '@/core/services/profession/profession.service'
import { citizenship, languages, mouth, workTimetable } from '@/core/utils/select-resume-data'

interface IPersonalInfo {
  resume: IResume | undefined
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const PersonalInfo: FC<IPersonalInfo> = ({ resume, active, setActive }) => {
  // ========== Professions =============================
  const { data: professions } = useQuery({
    queryKey: ['profession'],
    queryFn: async () => {
      const response = await ProfessionService.getAll()
      return response.data
    }
  })

  const profession = professions?.map(elem => ({
    value: elem.name,
    label: elem.name
  }))

  // ======================================
  const { user } = useAuth()
  const [gender, setGender] = useState('Мужчина')
  const queryClient = useQueryClient()

  // ========== DOB =============================

  useEffect(() => {
    const dobParts = (resume?.DOB || '').split('.')

    const defaultDay = dobParts[0] || ''
    const defaultMonth = dobParts[1] || ''
    const defaultYear = dobParts[2] || ''

    setDay(defaultDay)
    setYear(defaultYear)
    setMonth(defaultMonth)
    setFullDate(`${day}.${month}.${year}`)
  }, [resume])

  const [day, setDay] = useState<string>('')
  const [month, setMonth] = useState<string>('')
  const [year, setYear] = useState<string>('')

  const [fullDate, setFullDate] = useState<string>('')

  // Обработчики изменения значений полей ввода
  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value)
  }

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
  } = useForm<IResume>({
    mode: 'onChange'
  })
  useEffect(() => {
    if (resume) {
      setGender(resume.gender)
      if (resume.workTimetable) {
        const selectedOptions = resume.workTimetable.split(', ').map(v => ({ value: v, label: v }))
        setWorkTime(selectedOptions)
      }
      setValue('name', resume?.name)
      setValue('surname', resume?.surname)
      setValue('patronymic', resume?.patronymic)
      setValue('profession', resume?.profession)
      setValue('salary', resume?.salary)
      setValue('DOB', resume?.DOB)
      setValue('phoneNumber', resume?.phoneNumber)
      setValue('citizenship', resume?.citizenship)
      setValue('city', resume?.city)
      setValue('email', resume?.email)
      setValue('languages', resume?.languages)
      setValue('workTimetable', resume?.workTimetable)
    }
  }, [resume, setValue])

  // submit forma
  const onSubmit: SubmitHandler<IResume> = async data => {
    console.log(data)
    try {
      const response = await JobseekerService.updateResumeByIdUser(user?.id, data)
      queryClient.invalidateQueries({ queryKey: ['resume'] })
      setActive(false)
      reset()
    } catch (error: any) {
      setErrorUpdate(error.response.data.message)
    }
  }

  const handleCancel = () => {
    reset({
      name: resume?.name,
      surname: resume?.surname,
      patronymic: resume?.patronymic,
      profession: resume?.profession,
      salary: resume?.salary,
      DOB: resume?.DOB,
      phoneNumber: resume?.phoneNumber,
      citizenship: resume?.citizenship,
      city: resume?.city,
      email: resume?.email,
      languages: resume?.languages,
      workTimetable: resume?.workTimetable
    })
    setActive(false)
  }

  // ========== Radio =============================
  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value)
  }

  useEffect(() => {
    setValue('gender', gender)
  }, [gender, setValue])
  // ==============================================

  const [workTime, setWorkTime] = useState<MultiValue<{ value: string; label: string }>>([])

  return (
    <ResumeModal active={active} setActive={setActive}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formInfo}>
        <div className={styles.formInfo__formContent}>
          <h2 className={styles.formInfo__titleModal}>Основная информация</h2>
          <FieldProfile
            {...register('name', {
              required: 'Обязательное поле'
            })}
            type={'text'}
            title={'Имя'}
            star={true}
            error={errors.name?.message}
          />

          <FieldProfile
            {...register('surname', {
              required: 'Обязательное поле'
            })}
            type={'text'}
            title={'Фамилия'}
            star={true}
            error={errors.surname?.message}
          />

          <FieldProfile
            {...register('patronymic')}
            type={'text'}
            title={'Отчество'}
            star={false}
            error={errors.patronymic?.message}
          />

          <div className={styles.formInfo__block}>
            <div className={styles.formInfo__label}>
              <span>Должность</span>
              <span className={styles.formInfo__required}>*</span>
            </div>
            <div className={styles.formInfo__select}>
              <Controller
                name="profession"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    classNamePrefix="custom-select"
                    options={profession ? profession : []}
                    placeholder=""
                    isSearchable
                    value={profession ? profession.find(option => option.value === field.value) : null}
                    hideSelectedOptions={false}
                    isMulti={false}
                    noOptionsMessage={() => 'Нет такой профессии'}
                    onChange={selectedOption => {
                      if (selectedOption) {
                        field.onChange(selectedOption.value) // Сохраняем только значение value
                      }
                    }}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        borderColor: errors?.profession ? '#EB0000' : provided.borderColor
                      })
                    }}
                  />
                )}
              />
              {errors.profession && <Error>Обязательное поле</Error>}
            </div>
          </div>

          <div className={styles.formInfo__block}>
            <div className={styles.formInfo__label}>
              <span>Желаемый доход</span>
              <span className={styles.formInfo__required}>*</span>
            </div>
            <div className={styles.formInfo__content}>
              <div>
                <div className={styles.formInfo__input}>
                  <input
                    {...register('salary', { required: 'Обязательное поле' })}
                    type="number"
                    style={errors.salary ? { borderColor: 'red' } : undefined}
                  />
                </div>
                <span className={styles.formInfo__error}>{errors.salary?.message}</span>
              </div>
              <div className={styles.formInfo__rub}>руб.</div>
            </div>
          </div>

          <div className={styles.formInfo__block}>
            <div className={styles.formInfo__label}>
              <span>Пол</span>
              <span className={styles.formInfo__required}>*</span>
            </div>
            <div className={styles.formInfo__content}>
              <div className={styles.formInfo__radio}>
                <input
                  className={styles.formInfo__radioInput}
                  type="radio"
                  name="Пол"
                  value="Мужчина"
                  onChange={handleGenderChange}
                  checked={gender === 'Мужчина'}
                  id="radio1"
                />
                <label htmlFor="radio1">Мужчина</label>
              </div>
              <div className={styles.formInfo__radio}>
                <input
                  className={styles.formInfo__radioInput}
                  type="radio"
                  name="Пол"
                  value="Женщина"
                  onChange={handleGenderChange}
                  checked={gender === 'Женщина'}
                />

                <span>Женщина</span>
              </div>
            </div>
          </div>

          <div className={styles.formInfo__block}>
            <div className={styles.formInfo__label}>
              <span>Дата рождения</span>
              <span className={styles.formInfo__required}>*</span>
            </div>
            <Controller
              name="DOB"
              control={control}
              rules={{
                required: 'Обязательное поле'
              }}
              render={({ field }) => (
                <div className={styles.formInfo__date}>
                  <div className={styles.formInfo__dateWrapper}>
                    <div className={[styles.formInfo__input, styles.formInfo__input_day].join(' ')}>
                      <input
                        type="number"
                        placeholder="День"
                        value={day}
                        onChange={handleDayChange}
                        style={errors.DOB ? { borderColor: '#EB0000' } : undefined}
                      />
                    </div>
                    <div className={[styles.formInfo__select, styles.formInfo__input_month].join(' ')}>
                      <Select
                        classNamePrefix="custom-select"
                        options={mouth}
                        placeholder="Месяц"
                        value={mouth.find(option => option.value === month)}
                        hideSelectedOptions={false}
                        isSearchable={false}
                        onChange={selectedOption => {
                          if (selectedOption) {
                            field.onChange(`${day}.${selectedOption.value}.${year}`)
                          }
                        }}
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            borderColor: errors.citizenship ? '#EB0000' : provided.borderColor
                          })
                        }}
                      />
                    </div>
                    <div className={[styles.formInfo__input, styles.formInfo__input_year].join(' ')}>
                      <input
                        type="number"
                        placeholder="Год"
                        value={year}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setYear(e.target.value)
                          field.onChange(`${day}.${month}.${e.target.value}`)
                        }}
                        style={errors.DOB ? { borderColor: '#EB0000' } : undefined}
                      />
                    </div>
                  </div>
                  {errors.DOB && <span className={styles.formInfo__error}>{errors.DOB.message}</span>}
                </div>
              )}
            />
          </div>

          <FieldProfile
            {...register('phoneNumber', {
              required: 'Обязательное поле',
              pattern: {
                value: validPhone,
                message: 'Введите корректный номер телефона. Пример +79780000000'
              }
            })}
            type={'text'}
            title={'Номер телефона'}
            star={true}
            error={errors.phoneNumber?.message}
          />

          <FieldProfile
            {...register('email', {
              pattern: {
                value: validMail,
                message: 'Введите корректную эл. почту. Пример: sewingweb@email.ru'
              }
            })}
            type={'text'}
            title={'Эл. почта'}
            star={false}
            error={errors.email?.message}
          />

          <FieldProfile
            {...register('city', {
              required: 'Обязательное поле'
            })}
            type={'text'}
            title={'Город'}
            star={true}
            error={errors.city?.message}
          />

          <div className={styles.formInfo__block}>
            <div className={styles.formInfo__label}>
              <span>Гражданство</span>
              <span className={styles.formInfo__required}>*</span>
            </div>
            <div className={styles.formInfo__select}>
              <Controller
                name="citizenship"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    classNamePrefix="custom-select"
                    options={citizenship ? citizenship : []}
                    value={citizenship ? citizenship.find(option => option.value === field.value) : null}
                    placeholder=""
                    isSearchable
                    isMulti={false}
                    noOptionsMessage={() => 'Нет такого граждаства'}
                    onChange={selectedOption => {
                      if (selectedOption) {
                        field.onChange(selectedOption.value) // Сохраняем только значение value
                      }
                    }}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        borderColor: errors.citizenship ? '#EB0000' : provided.borderColor
                      })
                    }}
                  />
                )}
              />
              {errors.citizenship && <span className={styles.formInfo__error}>Обязательное поле</span>}
            </div>
          </div>

          <div className={styles.formInfo__block}>
            <div className={styles.formInfo__label}>Язык</div>
            <div className={styles.formInfo__select}>
              <Controller
                name="languages"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <Select
                    classNamePrefix="custom-select"
                    options={languages ? languages : []}
                    value={languages ? languages.find(option => option.value === field.value) : null}
                    placeholder=""
                    isSearchable={false}
                    isMulti={false}
                    onChange={selectedOption => {
                      if (selectedOption) {
                        field.onChange(selectedOption.value) // Сохраняем только значение value
                      }
                    }}
                  />
                )}
              />
            </div>
          </div>

          <div className={styles.formInfo__block}>
            <div className={styles.formInfo__label}>График работы</div>
            <div className={styles.formInfo__select}>
              <Controller
                name="workTimetable"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <Select
                    classNamePrefix="custom-select"
                    options={workTimetable ? workTimetable : []}
                    value={workTime}
                    placeholder=""
                    isSearchable
                    isMulti={true}
                    onChange={(selectedOptions: MultiValue<{ value: string; label: string }>) => {
                      const selectedValues = selectedOptions.map(option => option.value).join(', ')
                      field.onChange(selectedValues)
                      setWorkTime(selectedOptions)
                    }}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className={styles.formInfo__modalFooter}>
          <button className={styles.formInfo__saveButton}>Сохранить</button>
          <div className={styles.formInfo__resetButton} onClick={handleCancel}>
            Отменить
          </div>
          <span className={styles.formInfo__footerError}>{errorUpdate}</span>
        </div>
      </form>
    </ResumeModal>
  )
}

export default PersonalInfo
