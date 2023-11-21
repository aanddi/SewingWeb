import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import 'react-quill/dist/quill.snow.css'
import Select, { MultiValue } from 'react-select'

import styles from './AddVacancy.module.scss'

import PaymentModal from '@/components/elements/Modal/PaymentModal/PaymentModal'
import RulesVacancy from '@/components/elements/Modal/RulesVacancyModal/RulesVacancyModal'
import SuccessVacancy from '@/components/elements/Modal/SuccessVacancy/SuccessVacancy'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ErrorForm from '@/components/ui/ErrorForm/ErrorForm'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import { IVacancy } from '@/core/types/vacancy.interface'

import { validPhone } from '@/core/helpers/valid-field'
import { useEmployer } from '@/core/hooks/useEmployer'
import { useProfessions } from '@/core/hooks/useProfessions'
import { useTarifs } from '@/core/hooks/useTarifs'
import { VacancyService } from '@/core/services/vacancy/vacancy.service'
import { education, employmentType, skills, tagsList, workExperience, workTimetable } from '@/core/utils/select-vacancy-data'

import { CiSaveDown2 } from 'react-icons/ci'
import { FiInfo } from 'react-icons/fi'

import img from 'public/Employers/imageBaner01.svg'

const QuillNoSSRWrapper = dynamic(async () => (await import('react-quill')).default, { ssr: false })

const AddVacancy: FC = () => {
  // ==========================================
  const [desc, setDesc] = useState('')
  const [activeRules, setActiveRules] = useState(false)
  const [activePayment, setActivePayment] = useState(false)
  const [activeSuccess, setActiveSuccess] = useState(false)

  const router = useRouter()

  // ========== TARIF AND PAY =============================
  const { data: tarifs } = useTarifs()

  const [activeTarif, setActiveTarif] = useState<number | undefined>(0)

  // ========== TAGS =============================
  const [tags, setTags] = useState<string[]>([])

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const isChecked = e.target.checked

    // Если чекбокс выбран, добавляем значение в data
    if (isChecked) {
      setTags([...tags, value])
    } else {
      // Если чекбокс снят, удаляем значение из data
      setTags(tags.filter(item => item !== value))
    }
  }

  // ========== REACT QUERY =============================

  const { data: professions } = useProfessions()

  const profession = professions?.map(elem => ({
    value: elem.id,
    label: elem.name
  }))

  const { data: employer } = useEmployer()
  const employerId = employer?.id

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
  } = useForm<IVacancy>({
    mode: 'onChange',
    defaultValues: {}
  })

  useEffect(() => {
    if (employerId) {
      setValue('employerId', employerId)
    }
    if (tags) {
      const tagsString = tags.join(', ')
      setValue('tags', tagsString)
    }

    if (activeTarif) {
      setValue('tarifId', activeTarif)
    }

    if (activeTarif !== undefined && tarifs) {
      setValue('tarifId', activeTarif)

      //======= DATE =============
      const date = new Date('2023-11-16T22:52:50.265Z')

      const start: any = date.toISOString()
      setValue('dateStart', start)

      // вычисление срока вакансии
      date.setDate(date.getDate() + tarifs[activeTarif].time)

      const end: any = date.toISOString()
      setValue('dateEnd', end)
    }
  }, [tags, employer, activeTarif, tarifs, setValue])

  const onSave: SubmitHandler<IVacancy> = async data => {
    data.status = false
    try {
      const response = await VacancyService.create(data)
      reset()
      setActiveSuccess(true)
    } catch (error: any) {
      setErrorUpdate(error.response.data.message)
    }
  }

  const onOpenPayment: SubmitHandler<IVacancy> = data => {
    setActivePayment(true)
  }

  const onPayment: SubmitHandler<IVacancy> = async data => {
    data.status = true
    try {
      const response = await VacancyService.create(data)
      reset()
      setActivePayment(false)
      setActiveSuccess(true)
    } catch (error: any) {
      setErrorUpdate(error.response.data.message)
    }
  }

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.addVacancy}>
        <div className="addVacancy__container">
          {employer ? null : (
            <div className={styles.addVacancy__authError}>
              <ErrorForm>Чтобы разместить вакансию, зарегистрируйте вашу компанию</ErrorForm>
              <Link href={'/auth/registerCompany'}>Регистрация</Link>
            </div>
          )}
          <div className={[styles.addVacancy__tarif, styles.tarif].join(' ')}>
            <div className={styles.tarif__tarifWrapper}>
              <p className={styles.tarif__question}>Хотите больше сотрудников?</p>
              <div className={styles.tarif__mainText}>Подберите для себя подходящий тариф</div>
              <Link href={'/employer'} className={styles.tarif__redirect}>
                Подобрать
              </Link>
            </div>
            <div className={styles.tarif__img}>
              <Image src={img} alt={''} />
            </div>
          </div>
          <div className={styles.addVacancy__content}>
            <form onSubmit={handleSubmit(onPayment)} className={styles.addVacancy__wrapper}>
              <div className={styles.addVacancy__header}>
                <ProfileTitle title={'Добавить вакансию'} />
              </div>
              <div className={styles.addVacancy__headerForm}>
                <div className={styles.addVacancy__help}>
                  <FiInfo size={20} style={{ color: '#3490DF' }} />
                  <div className={styles.addVacancy__helpText}>
                    <p>Укажите популярное название, чтобы было проще найти вакансию</p>
                    <p>
                      После размещения вы уже не сможете изменить название!
                      <span onClick={() => setActiveRules(true)} className={styles.addVacancy__helpLink}>
                        Правила размещения вакансии
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles.addVacancy__inputs}>
                  <FieldProfile
                    {...register('title', {
                      required: 'Укажите название вакансии'
                    })}
                    type={'text'}
                    title={'Название вакансии'}
                    star={true}
                    error={errors.title?.message}
                  />
                  <div className={styles.addVacancy__selectBlock}>
                    <div className={styles.addVacancy__selectLabel}>
                      <span>Должность</span>
                      <span className={styles.addVacancy__required}>*</span>
                    </div>
                    <div className={styles.addVacancy__select}>
                      <Controller
                        name="professionId"
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
                                borderColor: errors?.professionId ? '#EB0000' : provided.borderColor
                              })
                            }}
                          />
                        )}
                      />
                      {errors.professionId && <span className={styles.addVacancy__errorField}>Укажите подходящую профессию</span>}
                    </div>
                  </div>
                </div>
                <div className={styles.addVacancy__salaryBlock}>
                  <div className={styles.addVacancy__labelSalary}>Зарплата</div>
                  <div className={styles.addVacancy__salary}>
                    <div className={styles.addVacancy__salaryVield}>
                      <input {...register('minSalary')} type="number" placeholder="от" />
                    </div>
                    <span>—</span>

                    <div className={styles.addVacancy__salaryVield}>
                      <input {...register('maxSalary')} type="number" placeholder="до" />
                    </div>
                    <span className={styles.addVacancy__rub}>руб. / мес</span>
                  </div>
                </div>
              </div>

              <div className={styles.addVacancy__line}></div>
              <div className={styles.addVacancy__shortDesc}>
                <h3 className={styles.addVacancy__titleBlock}>Описание и требования</h3>
                <div className={styles.addVacancy__help}>
                  <FiInfo size={20} style={{ color: '#3490DF' }} />
                  <div className={styles.addVacancy__helpText}>
                    <p>Напишите краткое (1-2 предложения) описание вашей вакансии. </p>
                    <p>Заинтересуйте человека этим сообщением, чтобы он захотел посмотреть подробную информацию</p>
                  </div>
                </div>
                <div className={styles.addVacancy__label}>
                  <span>Краткое описание на карточке вакансии</span>
                  <span className={styles.addVacancy__required}>*</span>
                </div>
                <textarea
                  {...register('descCard', {
                    required: 'Укажите описание вакансии'
                  })}
                  style={errors.descCard ? { borderColor: 'red' } : undefined}></textarea>
                {errors.descCard && <span className={styles.addVacancy__errorField}>Укажите описание карточки вакансии</span>}
              </div>
              <div className={styles.addVacancy__inputs}>
                <FieldProfile
                  {...register('city', {
                    required: 'Укажите город'
                  })}
                  type={'text'}
                  title={'Город'}
                  star={true}
                  error={errors.city?.message}
                />
                <FieldProfile
                  {...register('adress', {
                    required: 'Укажите адрес'
                  })}
                  type={'text'}
                  title={'Адрес'}
                  star={true}
                  error={errors.adress?.message}
                />
                <div className={styles.addVacancy__selectBlock}>
                  <div className={styles.addVacancy__selectLabel}>
                    <span>Ключевые навыки </span>
                  </div>
                  <div className={styles.addVacancy__select}>
                    <Controller
                      name="skills"
                      control={control}
                      rules={{ required: false }}
                      render={({ field }) => (
                        <Select
                          classNamePrefix="custom-select"
                          options={skills ? skills : []}
                          placeholder=""
                          isMulti={true}
                          isSearchable={false}
                          noOptionsMessage={() => 'Нет ключевых навыков'}
                          // value={skills}
                          onChange={(selectedOptions: MultiValue<{ value: string; label: string }>) => {
                            const selectedValues = selectedOptions.map(option => option.value).join(', ')
                            field.onChange(selectedValues)
                            // setWorkTime(selectedOptions)
                          }}
                        />
                      )}
                    />
                  </div>
                </div>

                <div className={styles.addVacancy__selectBlock}>
                  <div className={styles.addVacancy__selectLabel}>
                    <span>Опыт работы </span>
                    <span className={styles.addVacancy__required}>*</span>
                  </div>
                  <div className={[styles.addVacancy__select, styles.addVacancy__select_conditions].join(' ')}>
                    <Controller
                      name="workExperience"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          classNamePrefix="custom-select"
                          options={workExperience ? workExperience : []}
                          placeholder=""
                          value={workExperience ? workExperience.find(option => option.value === field.value) : null}
                          hideSelectedOptions={false}
                          isMulti={false}
                          isSearchable={false}
                          onChange={selectedOption => {
                            if (selectedOption) {
                              field.onChange(selectedOption.value) // Сохраняем только значение value
                            }
                          }}
                          styles={{
                            control: (provided, state) => ({
                              ...provided,
                              borderColor: errors?.workExperience ? '#EB0000' : provided.borderColor
                            })
                          }}
                        />
                      )}
                    />
                    {errors.workExperience && <span className={styles.addVacancy__errorField}>Укажите опыт работы</span>}
                  </div>
                </div>

                <div className={styles.addVacancy__selectBlock}>
                  <div className={styles.addVacancy__selectLabel}>
                    <span>Тип занятости </span>
                    <span className={styles.addVacancy__required}>*</span>
                  </div>
                  <div className={[styles.addVacancy__select, styles.addVacancy__select_conditions].join(' ')}>
                    <Controller
                      name="employmentType"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          classNamePrefix="custom-select"
                          options={employmentType ? employmentType : []}
                          placeholder=""
                          value={employmentType ? employmentType.find(option => option.value === field.value) : null}
                          hideSelectedOptions={false}
                          isMulti={false}
                          isSearchable={false}
                          onChange={selectedOption => {
                            if (selectedOption) {
                              field.onChange(selectedOption.value) // Сохраняем только значение value
                            }
                          }}
                          styles={{
                            control: (provided, state) => ({
                              ...provided,
                              borderColor: errors?.employmentType ? '#EB0000' : provided.borderColor
                            })
                          }}
                        />
                      )}
                    />
                    {errors.workExperience && <span className={styles.addVacancy__errorField}>Укажите тип занятости</span>}
                  </div>
                </div>

                <div className={styles.addVacancy__selectBlock}>
                  <div className={styles.addVacancy__selectLabel}>
                    <span>График работы </span>
                    <span className={styles.addVacancy__required}>*</span>
                  </div>
                  <div className={[styles.addVacancy__select, styles.addVacancy__select_conditions].join(' ')}>
                    <Controller
                      name="workTimetable"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          classNamePrefix="custom-select"
                          options={workTimetable ? workTimetable : []}
                          placeholder=""
                          value={workTimetable ? workTimetable.find(option => option.value === field.value) : null}
                          hideSelectedOptions={false}
                          isMulti={false}
                          isSearchable={false}
                          onChange={selectedOption => {
                            if (selectedOption) {
                              field.onChange(selectedOption.value) // Сохраняем только значение value
                            }
                          }}
                          styles={{
                            control: (provided, state) => ({
                              ...provided,
                              borderColor: errors?.workTimetable ? '#EB0000' : provided.borderColor
                            })
                          }}
                        />
                      )}
                    />
                    {errors.workExperience && <span className={styles.addVacancy__errorField}>Укажите график работы</span>}
                  </div>
                </div>

                <div className={styles.addVacancy__selectBlock}>
                  <div className={styles.addVacancy__selectLabel}>
                    <span>Образование </span>
                    <span className={styles.addVacancy__required}>*</span>
                  </div>
                  <div className={[styles.addVacancy__select, styles.addVacancy__select_conditions].join(' ')}>
                    <Controller
                      name="education"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          classNamePrefix="custom-select"
                          options={education ? education : []}
                          placeholder=""
                          value={education ? education.find(option => option.value === field.value) : null}
                          hideSelectedOptions={false}
                          isMulti={false}
                          isSearchable={false}
                          onChange={selectedOption => {
                            if (selectedOption) {
                              field.onChange(selectedOption.value) // Сохраняем только значение value
                            }
                          }}
                          styles={{
                            control: (provided, state) => ({
                              ...provided,
                              borderColor: errors?.education ? '#EB0000' : provided.borderColor
                            })
                          }}
                        />
                      )}
                    />
                    {errors.education && <span className={styles.addVacancy__errorField}>Укажите опыт образование</span>}
                  </div>
                </div>
              </div>
              <div className={styles.addVacancy__tags}>
                <div className={styles.addVacancy__tagsLabel}>Вакансия подходит для</div>
                <div className={styles.addVacancy__tagsList}>
                  {tagsList.map((item, index) => {
                    return (
                      <div className={styles.addVacancy__tag}>
                        <input type="checkbox" value={item.value} onChange={handleCheckboxChange} />
                        <span>{item.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className={styles.addVacancy__desc}>
                <div className={styles.addVacancy__help}>
                  <FiInfo size={20} style={{ color: '#3490DF' }} />
                  <div className={styles.addVacancy__helpText}>
                    <p>Соискатели лучше откликаются на вакансии с понятным и подробным описанием</p>
                    <p>Опишите обязанности, требования, условия труда и т.д.</p>
                  </div>
                </div>
                <div className={styles.addVacancy__label}>
                  <span>Описание вакансии</span>
                  <span className={styles.addVacancy__required}>*</span>
                </div>
                <Controller
                  name="descMain"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <QuillNoSSRWrapper
                      value={field.value || ''}
                      onChange={value => {
                        field.onChange(value)
                        setDesc(value)
                      }}
                      className={errors.descMain || field.value == '<p><br></p>' ? 'error-text-edit' : undefined}
                      modules={{
                        toolbar: [[{ size: [] }], ['bold', 'italic', 'underline', 'strike'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']]
                      }}
                    />
                  )}
                />
                {errors.descMain || desc === '<p><br></p>' ? <span className={styles.addVacancy__errorField}>Укажите описание вакансии</span> : null}
              </div>
              <div className={styles.addVacancy__line}></div>
              <div className={styles.addVacancy__contactPerson}>
                <h3 className={styles.addVacancy__titleBlock}>Контакное лицо</h3>
                <div className={styles.addVacancy__help}>
                  <FiInfo size={20} style={{ color: '#3490DF' }} />
                  <div className={styles.addVacancy__helpText}>
                    <p>Если у вас несколько контактных лиц, укажите их в описании вакансии</p>
                  </div>
                </div>
                <div className={styles.addVacancy__inputs}>
                  <FieldProfile
                    {...register('fullName', {
                      required: 'Укажите контактное лицо'
                    })}
                    type={'text'}
                    title={'ФИО'}
                    star={true}
                    error={errors.fullName?.message}
                  />

                  <FieldProfile
                    {...register('phoneNumber', {
                      required: 'Укажите номер телефона контактного лица',
                      pattern: {
                        value: validPhone,
                        message: 'Введите корректный номер телефона. Пример +70000000000'
                      }
                    })}
                    type={'text'}
                    title={'Номер телефона'}
                    star={true}
                    error={errors.phoneNumber?.message}
                  />

                  <FieldProfile {...register('contact')} type={'text'} title={'Другой способ связи'} star={false} />
                </div>
              </div>
              <div className={styles.addVacancy__line}></div>
              <div className={styles.addVacancy__tarifPlan}>
                <h3 className={styles.addVacancy__titleBlock}>Тариф</h3>
                <div className={styles.addVacancy__help}>
                  <FiInfo size={20} style={{ color: '#3490DF' }} />
                  <div className={styles.addVacancy__helpText}>
                    <p>
                      Подробнее о тарифах можно почитать на странице{' '}
                      <Link href={'/employer'} className={styles.addVacancy__helpLink}>
                        Работодателю
                      </Link>
                    </p>
                    <p>Чтобы выбрать нужный тариф просто нажмите на блок тарифа</p>
                  </div>
                </div>
                <div className={styles.addVacancy__cards}>
                  {tarifs?.map((elem, index) => {
                    return (
                      <div key={index} className={styles.addVacancy__card} onClick={() => setActiveTarif(index)}>
                        <div
                          className={
                            tarifs && activeTarif == index
                              ? [styles.addVacancy__cardWrapper, styles.addVacancy__cardWrapper_active].join(' ')
                              : styles.addVacancy__cardWrapper
                          }>
                          <div className={styles.addVacancy__cardTitle}>Вакансия {elem.name}</div>
                          <div className={styles.addVacancy__efficiency}>
                            <div
                              className={[styles.addVacancy__efficiencyNumber, styles[`addVacancy__efficiencyNumber_${(index % 3) + 1}`]].join(' ')}>
                              x{index + 1}
                            </div>
                            <div className={[styles.addVacancy__efficiencyDesc, styles[`addVacancy__efficiencyDesc_${(index % 3) + 1}`]].join(' ')}>
                              в {index + 1} раз <br /> эффективность
                            </div>
                          </div>
                          <div className={styles.addVacancy__cardFooter}>
                            <p className={styles.addVacancy__cardSalary}>{elem.salary} рублей</p>
                            <p>публикация на {elem.time} дней</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className={styles.addVacancy__footer}>
                {activeTarif !== undefined && tarifs && tarifs[activeTarif].salary == 0 ? (
                  <div onClick={handleSubmit(onPayment)} className={[styles.addVacancy__button, styles.addVacancy__button_post].join(' ')}>
                    <span>Опубликовать вакансию</span>
                  </div>
                ) : (
                  <div onClick={handleSubmit(onOpenPayment)} className={[styles.addVacancy__button, styles.addVacancy__button_post].join(' ')}>
                    <span>Перейти к оплате</span>
                  </div>
                )}

                <div onClick={handleSubmit(onSave)} className={[styles.addVacancy__button, styles.addVacancy__button_save].join(' ')}>
                  <CiSaveDown2 size={20} style={{ strokeWidth: '1' }} />
                  <span>Сохранить вакансию</span>
                </div>
              </div>
              <PaymentModal active={activePayment} setActive={setActivePayment} tarif={tarifs && activeTarif ? tarifs[activeTarif].name : undefined}>
                <div onClick={handleSubmit(onPayment)} className={[styles.addVacancy__button, styles.addVacancy__button_post].join(' ')}>
                  <span>Оплатить {activeTarif !== undefined && tarifs && tarifs[activeTarif].salary} рублей</span>
                </div>
              </PaymentModal>
            </form>
            <div className={styles.addVacancy__footerWarning}>
              <p>
                Размещая вакансию, вы соглашаетесь с
                <span onClick={() => setActiveRules(true)} className={styles.addVacancy__helpLink}>
                  условиями и правилами
                </span>
                размещения вакансии на sewingweb.ru
              </p>
            </div>
            <p className={styles.addVacancy__error}>
              <ErrorForm>{errorUpdate}</ErrorForm>
            </p>
          </div>
        </div>
      </div>
      <SuccessVacancy active={activeSuccess} setActive={setActiveSuccess} />
      <RulesVacancy active={activeRules} setActive={setActiveRules} />
    </SiteLayout>
  )
}

export default AddVacancy
