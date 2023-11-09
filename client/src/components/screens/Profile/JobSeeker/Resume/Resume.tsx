import { useQuery } from '@tanstack/react-query'
import { spawn } from 'child_process'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useController, useForm } from 'react-hook-form'
import Select from 'react-select'

import styles from './Resume.module.scss'

import ResumeModal from '@/components/elements/Modal/ResumeModal/ResumeModal'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import { IResume } from '@/core/types/resume.interface'

import { validMail, validPhone } from '@/core/helpers/valid-field'
import { ProfessionService } from '@/core/services/profession/profession.service'

import { citizenship, languages, mouth, workTimetable } from './select-data'

import { FaPen } from 'react-icons/fa'
import { IoIosAddCircleOutline } from 'react-icons/io'

import photo from 'public/Profiles/photoUser.svg'

const Resume: FC = () => {
  //=========================================================
  const [activeModal1, setActiveModal1] = useState(false)
  const [activeModal2, setActiveModal2] = useState(false)
  const [activeModal3, setActiveModal3] = useState(false)
  const [activeModal4, setActiveModal4] = useState(false)

  const [gender, setGender] = useState<string>('Мужчина')

  // ========== Professions =============================
  const { data } = useQuery({
    queryKey: ['profession'],
    queryFn: async () => {
      const response = await ProfessionService.getAll()
      return response.data
    }
  })

  const profession = data?.map((elem, index) => ({
    value: elem.name,
    label: elem.name
  }))

  // ========== DOB =============================
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [fullDate, setFullDate] = useState('')

  // Обработчики изменения значений полей ввода
  const handleDayChange = (e: any) => {
    setDay(e.target.value)
  }

  const handleMonthChange = (selectedOption: any) => {
    setMonth(selectedOption.value)
  }

  const handleYearChange = (e: any) => {
    setYear(e.target.value)
  }

  // ========== REACT HOOK FORM =============================
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors }
  } = useForm<IResume>({
    mode: 'onChange',
    defaultValues: {
      gender: gender,
      DOB: fullDate
    }
  })

  // submit form
  const onSubmit: SubmitHandler<IResume> = data => {
    console.log(data)
  }

  const handleCancel = () => {
    reset()
    setActiveModal1(false)
    setActiveModal2(false)
    setActiveModal3(false)
    setActiveModal4(false)
  }

  // ========== Radio =============================
  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value)
  }

  useEffect(() => {
    // пол
    setValue('gender', gender)
    // дата рождения
    setFullDate(`${day}.${month}.${year}`)
    setValue('DOB', fullDate)
  }, [gender, day, month, year, setValue])
  // ==============================================

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.resume}>
        <div className="resume__container">
          <div className={styles.resume__header}>
            <ProfileTitle title={'Мое резюме'} />
          </div>
          <div className={styles.resume__wrapper}>
            <div className={styles.resume__photo}>
              <Image width={120} src={photo} alt={'Фото'} />
              <span>id: 1234</span>
            </div>
            <div className={styles.resume__content}>
              <div className={styles.resume__mainInfo}>
                <div className={styles.resume__info}>
                  <div className={styles.resume__infoBlock}>
                    <div className={styles.resume__name}>Петров Пётр Петрович</div>
                    <div className={styles.resume__post}>Конструктор</div>
                    <div className={styles.resume__salary}>
                      <span>Желаемый доход:</span> от 50 тыс руб.
                    </div>
                  </div>
                  <div className={styles.resume__fullInfo}>
                    <div className={styles.resume__fullWrapper}>
                      <div className={styles.resume__fullLeft}>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Дата рождения:</div>
                          <div className={styles.resume__desc}>20.06.1995</div>
                        </div>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Пол:</div>
                          <div className={styles.resume__desc}>мужской</div>
                        </div>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Номер телефона:</div>
                          <div className={styles.resume__desc}>+79787408141</div>
                        </div>
                      </div>
                      <div className={styles.resume__fullRight}>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Гражданство:</div>
                          <div className={styles.resume__desc}>РФ</div>
                        </div>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Город:</div>
                          <div className={styles.resume__desc}>Симферополь</div>
                        </div>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Эл. почта:</div>
                          <div className={styles.resume__desc}>test@test@mail.ru</div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.resume__add} onClick={() => setActiveModal1(!activeModal1)}>
                      <FaPen />
                      <span>Дополнить</span>
                    </div>
                  </div>
                </div>
                <aside className={styles.resume__sidebar}>
                  <div className={styles.resume__sidebarWrapper}>
                    <Link href="/" className={styles.resume__barBlock}>
                      <h2>100</h2>
                      <span>вакансий найдено для Вас</span>
                    </Link>
                  </div>
                  <div className={styles.resume__sidebarWrapper}>
                    <Link href="/" className={styles.resume__barBlock}>
                      <h2>5</h2>
                      <span>ваши отклики</span>
                    </Link>
                  </div>
                </aside>
              </div>
              <div className={styles.resume__body}>
                <div className={styles.resume__bodyBlock}>
                  <div className={styles.resume__blockTitle}>Опыт работы</div>
                  <div className={styles.resume__blockSubTitle}>
                    Сведения о прошлом месте работы: должность, компания, период работы, функции и достижения.
                  </div>
                  <div className={styles.resume__add} onClick={() => setActiveModal3(!activeModal3)}>
                    <IoIosAddCircleOutline style={{ color: '#DA435F' }} />
                    <span>Добавить</span>
                  </div>
                </div>
                <div className={styles.resume__bodyBlock}>
                  <div className={styles.resume__blockTitle}>Образование</div>
                  <div className={styles.resume__blockSubTitle}>
                    Полученное образование: учебное заведение, специальность, курсы повышения квалификации.
                  </div>
                  <div className={styles.resume__add} onClick={() => setActiveModal3(!activeModal3)}>
                    <IoIosAddCircleOutline style={{ color: '#DA435F' }} />
                    <span>Добавить</span>
                  </div>
                </div>
                <div className={styles.resume__bodyBlock}>
                  <div className={styles.resume__blockTitle}>О себе</div>
                  <div className={styles.resume__blockSubTitle}>
                    Сведения о прошлом месте работы: должность, компания, период работы, функции и достижения.
                  </div>
                  <div className={styles.resume__add} onClick={() => setActiveModal4(!activeModal4)}>
                    <IoIosAddCircleOutline style={{ color: '#DA435F' }} />
                    <span>Добавить</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ResumeModal active={activeModal1} setActive={setActiveModal1}>
          <form onSubmit={handleSubmit(onSubmit)} className={[styles.resume__form, styles.formInfo].join(' ')}>
            <div className={styles.resume__formContent}>
              <h2 className={styles.resume__titleModal}>Основная информация</h2>
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
                        options={profession}
                        placeholder=""
                        isSearchable
                        hideSelectedOptions={false}
                        isMulti={false}
                        noOptionsMessage={() => 'Нет такой профессии'}
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: 'red'
                          })
                        }}
                        onChange={selectedOption => {
                          if (selectedOption) {
                            field.onChange(selectedOption.value) // Сохраняем только значение value
                          }
                        }}
                      />
                    )}
                  />
                  {errors.profession && <span className={styles.formInfo__error}>Обязательное поле</span>}
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
                <div className={[styles.formInfo__block, styles.formInfo__date].join(' ')}>
                  <div className={[styles.formInfo__input, styles.formInfo__input_day].join(' ')}>
                    <input type="number" placeholder="День" value={day} onChange={handleDayChange} />
                  </div>
                  <div className={[styles.formInfo__select, styles.formInfo__input_month].join(' ')}>
                    <Select
                      classNamePrefix="custom-select"
                      options={mouth}
                      placeholder="Месяц"
                      hideSelectedOptions={false}
                      onChange={handleMonthChange}
                      isSearchable={false}
                    />
                  </div>
                  <div className={[styles.formInfo__input, styles.formInfo__input_year].join(' ')}>
                    <input type="number" placeholder="Год" value={year} onChange={handleYearChange} />
                  </div>
                </div>
                {!day && !mouth && !year ? <span className={styles.formInfo__error}>Обязательное поле</span> : ''}
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
                        options={citizenship}
                        placeholder=""
                        isSearchable
                        isMulti={false}
                        noOptionsMessage={() => 'Нет такого граждаства'}
                        onChange={selectedOption => {
                          if (selectedOption) {
                            field.onChange(selectedOption.value) // Сохраняем только значение value
                          }
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
                        options={languages}
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
                        options={workTimetable}
                        placeholder=""
                        isSearchable
                        isMulti={true}
                        onChange={selectedOptions => {
                          const selectedValues = selectedOptions.map(option => option.value).join(', ')
                          field.onChange(selectedValues) // Сохраняем значения через запятую
                        }}
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            <div className={styles.resume__modalFooter}>
              <button className={styles.resume__saveButton}>Сохранить</button>
              <div className={styles.resume__resetButton} onClick={handleCancel}>
                Отменить
              </div>
            </div>
          </form>
        </ResumeModal>

        <ResumeModal active={activeModal2} setActive={setActiveModal2}>
          <h2 className={styles.resume__titleModal}>Добавить место работы</h2>
        </ResumeModal>

        <ResumeModal active={activeModal3} setActive={setActiveModal3}>
          <h2 className={styles.resume__titleModal}>Добавить место учебы</h2>
        </ResumeModal>

        <ResumeModal active={activeModal4} setActive={setActiveModal4}>
          <h2 className={styles.resume__titleModal}>Добавить информацию о себе</h2>
        </ResumeModal>
      </div>
    </SiteLayout>
  )
}

export default Resume
