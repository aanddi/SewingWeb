import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import 'react-quill/dist/quill.snow.css'
import Select, { MultiValue } from 'react-select'

import styles from './EditVcancy.module.scss'

import LoadingDots from '@/components/elements/Loading/LoadingDots'
import LoadingSpinner from '@/components/elements/Loading/LoadingSpinner'
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

const QuillNoSSRWrapper = dynamic(async () => (await import('react-quill')).default, { ssr: false })

interface Props {
  vacancy: IVacancy
}

const EditVacancy: FC<Props> = ({ vacancy }) => {
  // ==========================================
  const [desc, setDesc] = useState('')
  const [activeRules, setActiveRules] = useState(false)
  const [activePayment, setActivePayment] = useState(false)
  const [activeSuccess, setActiveSuccess] = useState(false)

  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)

  // ========== TARIF AND PAY =============================

  const { data: tarifs } = useTarifs()

  const [activeTarif, setActiveTarif] = useState<number>(vacancy.tarifId)

  // ========== TAGS =============================
  const [tags, setTags] = useState<string[]>(vacancy.tags.split(', '))

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const isChecked = e.target.checked

    // Если чекбокс выбран, добавляем значение в data
    if (isChecked) {
      setTags(prevTags => [...prevTags, value])
    } else {
      // Если чекбокс снят, удаляем значение из data
      setTags(prevTags => prevTags.filter(tag => tag !== value))
    }
  }

  // ========== REACT QUERY =============================

  const { data: professions } = useProfessions()

  const profession = professions?.map(elem => ({
    value: elem.id,
    label: elem.name
  }))

  const { data: employer, isLoading } = useEmployer()
  const employerId = employer?.id
  const router = useRouter()

  // ========== REACT HOOK FORM ==================  ===========

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

    if (vacancy.status) {
      setValue('dateStart', vacancy.dateStart)
      setValue('dateEnd', vacancy.dateEnd)
    } else if (!vacancy.status && tarifs) {
      const date = new Date('2023-11-16T22:52:50.265Z')

      const start: any = date.toISOString()
      setValue('dateStart', start)

      // вычисление срока вакансии
      date.setDate(date.getDate() + tarifs[activeTarif].time)

      const end: any = date.toISOString()
      setValue('dateEnd', end)
    }

    if (tags) {
      const tagsString = tags.join(', ')
      setValue('tags', tagsString)
    }

    if (vacancy.skills) {
      const skillsArray = vacancy.skills.split(', ').map(skill => ({
        value: skill,
        label: skill
      }))
      setSkillsList(skillsArray)
    }

    setValue('title', vacancy.title)
    setValue('professionId', vacancy.professionId)
    setValue('minSalary', vacancy.minSalary)
    setValue('maxSalary', vacancy.maxSalary)
    setValue('descCard', vacancy.descCard)
    setValue('city', vacancy.city)
    setValue('adress', vacancy.adress)
    setValue('workExperience', vacancy.workExperience)
    setValue('employmentType', vacancy.employmentType)
    setValue('workTimetable', vacancy.workTimetable)
    setValue('education', vacancy.education)
    setValue('descMain', vacancy.descMain)
    setValue('fullName', vacancy.fullName)
    setValue('phoneNumber', vacancy.phoneNumber)
    setValue('contact', vacancy.contact)
    setValue('tarifId', activeTarif)
  }, [vacancy, activeTarif, employerId, tags, setValue])

  const [skillsList, setSkillsList] = useState<MultiValue<{ value: string; label: string }>>([])

  const onSave: SubmitHandler<IVacancy> = async data => {
    setIsLoadingSubmit(true)
    data.status = vacancy.status
    try {
      const response = await VacancyService.updateMyVacancy(vacancy.id, data)
      router.replace('/profile/e_vacancies')
    } catch (error: any) {
      setIsLoadingSubmit(false)
      setErrorUpdate(error.response.data.message)
    }
  }

  const onOpenPayment: SubmitHandler<IVacancy> = data => {
    setActivePayment(true)
  }

  const onPayment: SubmitHandler<IVacancy> = async data => {
    setIsLoadingSubmit(true)
    data.status = true
    try {
      const response = await VacancyService.updateMyVacancy(vacancy.id, data)
      reset()
      setActivePayment(false)
      setActiveSuccess(true)
      setIsLoadingSubmit(false)
    } catch (error: any) {
      setIsLoadingSubmit(false)
      data.status = false
      setErrorUpdate(error.response.data.message)
    }
  }

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.editVacancy}>
        <div className="editVacancy__container">
          {isLoading ? (
            <LoadingSpinner />
          ) : employerId == vacancy.employerId ? (
            <>
              {employer ? null : (
                <div className={styles.editVacancy__authError}>
                  <ErrorForm>Чтобы разместить вакансию, зарегистрируйте вашу компанию</ErrorForm>
                  <Link href={'/auth/registerCompany'}>Регистрация</Link>
                </div>
              )}
              <div className={styles.editVacancy__content}>
                <form onSubmit={handleSubmit(onPayment)} className={styles.editVacancy__wrapper}>
                  <div className={styles.editVacancy__header}>
                    {vacancy.status ? <ProfileTitle title={'Редактировать вакансию'} /> : <ProfileTitle title={'Опубликовать вакансию'} />}
                  </div>
                  <div className={styles.editVacancy__headerForm}>
                    <div className={styles.editVacancy__help}>
                      <FiInfo size={20} style={{ color: '#3490DF' }} />
                      <div className={styles.editVacancy__helpText}>
                        <p>Укажите популярное название, чтобы было проще найти вакансию</p>
                        <p>
                          После размещения вы уже не сможете изменить название и должность у активной вакансии!
                          <span onClick={() => setActiveRules(true)} className={styles.editVacancy__helpLink}>
                            Правила размещения вакансии
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className={styles.editVacancy__inputs}>
                      <FieldProfile
                        {...register('title', {
                          required: 'Укажите название вакансии'
                        })}
                        disabled={vacancy.status}
                        type={'text'}
                        title={'Название вакансии'}
                        star={true}
                        error={errors.title?.message}
                      />
                      <div className={styles.editVacancy__selectBlock}>
                        <div className={styles.editVacancy__selectLabel}>
                          <span>Должность</span>
                          <span className={styles.editVacancy__required}>*</span>
                        </div>
                        <div className={styles.editVacancy__select}>
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
                                isDisabled={vacancy.status}
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
                          {errors.professionId && <span className={styles.editVacancy__errorField}>Укажите подходящую профессию</span>}
                        </div>
                      </div>
                    </div>
                    <div className={styles.editVacancy__salaryBlock}>
                      <div className={styles.editVacancy__labelSalary}>Зарплата</div>
                      <div className={styles.editVacancy__salary}>
                        <div className={styles.editVacancy__salaryVield}>
                          <input {...register('minSalary')} type="number" placeholder="от" />
                        </div>
                        <span>—</span>

                        <div className={styles.editVacancy__salaryVield}>
                          <input {...register('maxSalary')} type="number" placeholder="до" />
                        </div>
                        <span className={styles.editVacancy__rub}>руб. / мес</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.editVacancy__line}></div>
                  <div className={styles.editVacancy__shortDesc}>
                    <h3 className={styles.editVacancy__titleBlock}>Описание и требования</h3>
                    <div className={styles.editVacancy__help}>
                      <FiInfo size={20} style={{ color: '#3490DF' }} />
                      <div className={styles.editVacancy__helpText}>
                        <p>Напишите краткое (1-2 предложения) описание вашей вакансии. </p>
                        <p>Заинтересуйте человека этим сообщением, чтобы он захотел посмотреть подробную информацию</p>
                      </div>
                    </div>
                    <div className={styles.editVacancy__label}>
                      <span>Краткое описание на карточке вакансии</span>
                      <span className={styles.editVacancy__required}>*</span>
                    </div>
                    <textarea
                      {...register('descCard', {
                        required: 'Укажите описание вакансии'
                      })}
                      style={errors.descCard ? { borderColor: 'red' } : undefined}
                    ></textarea>
                    {errors.descCard && <span className={styles.editVacancy__errorField}>Укажите описание карточки вакансии</span>}
                  </div>
                  <div className={styles.editVacancy__inputs}>
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
                    <div className={styles.editVacancy__selectBlock}>
                      <div className={styles.editVacancy__selectLabel}>
                        <span>Ключевые навыки </span>
                      </div>
                      <div className={styles.editVacancy__select}>
                        <Controller
                          name="skills"
                          control={control}
                          rules={{ required: false }}
                          render={({ field }) => (
                            <Select
                              classNamePrefix="custom-select"
                              options={skills}
                              placeholder=""
                              isMulti={true}
                              isSearchable={false}
                              noOptionsMessage={() => 'Нет ключевых навыков'}
                              value={skillsList} // Устанавливаем текущие выбранные навыки
                              onChange={(selectedOptions: MultiValue<{ value: string; label: string }>) => {
                                const selectedValues = selectedOptions.map(option => option.value).join(', ')
                                field.onChange(selectedValues) // Устанавливаем выбранные значения в форму.
                                setSkillsList(selectedOptions)
                              }}
                            />
                          )}
                        />
                      </div>
                    </div>

                    <div className={styles.editVacancy__selectBlock}>
                      <div className={styles.editVacancy__selectLabel}>
                        <span>Опыт работы </span>
                        <span className={styles.editVacancy__required}>*</span>
                      </div>
                      <div className={[styles.editVacancy__select, styles.editVacancy__select_conditions].join(' ')}>
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
                        {errors.workExperience && <span className={styles.editVacancy__errorField}>Укажите опыт работы</span>}
                      </div>
                    </div>

                    <div className={styles.editVacancy__selectBlock}>
                      <div className={styles.editVacancy__selectLabel}>
                        <span>Тип занятости </span>
                        <span className={styles.editVacancy__required}>*</span>
                      </div>
                      <div className={[styles.editVacancy__select, styles.editVacancy__select_conditions].join(' ')}>
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
                        {errors.workExperience && <span className={styles.editVacancy__errorField}>Укажите тип занятости</span>}
                      </div>
                    </div>

                    <div className={styles.editVacancy__selectBlock}>
                      <div className={styles.editVacancy__selectLabel}>
                        <span>График работы </span>
                        <span className={styles.editVacancy__required}>*</span>
                      </div>
                      <div className={[styles.editVacancy__select, styles.editVacancy__select_conditions].join(' ')}>
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
                        {errors.workExperience && <span className={styles.editVacancy__errorField}>Укажите график работы</span>}
                      </div>
                    </div>

                    <div className={styles.editVacancy__selectBlock}>
                      <div className={styles.editVacancy__selectLabel}>
                        <span>Образование </span>
                        <span className={styles.editVacancy__required}>*</span>
                      </div>
                      <div className={[styles.editVacancy__select, styles.editVacancy__select_conditions].join(' ')}>
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
                        {errors.education && <span className={styles.editVacancy__errorField}>Укажите опыт образование</span>}
                      </div>
                    </div>
                  </div>
                  <div className={styles.editVacancy__tags}>
                    <div className={styles.editVacancy__tagsLabel}>Вакансия подходит для</div>
                    <div className={styles.editVacancy__tagsList}>
                      {tagsList.map((item, index) => {
                        return (
                          <div className={styles.editVacancy__tag} key={index}>
                            <input type="checkbox" value={item.value} checked={tags.includes(item.value)} onChange={handleCheckboxChange} />
                            <span>{item.label}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className={styles.editVacancy__desc}>
                    <div className={styles.editVacancy__help}>
                      <FiInfo size={20} style={{ color: '#3490DF' }} />
                      <div className={styles.editVacancy__helpText}>
                        <p>Соискатели лучше откликаются на вакансии с понятным и подробным описанием</p>
                        <p>Опишите обязанности, требования, условия труда и т.д.</p>
                      </div>
                    </div>
                    <div className={styles.editVacancy__label}>
                      <span>Описание вакансии</span>
                      <span className={styles.editVacancy__required}>*</span>
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
                    {errors.descMain || desc === '<p><br></p>' ? (
                      <span className={styles.editVacancy__errorField}>Укажите описание вакансии</span>
                    ) : null}
                  </div>
                  <div className={styles.editVacancy__line}></div>
                  <div className={styles.editVacancy__contactPerson}>
                    <h3 className={styles.editVacancy__titleBlock}>Контакное лицо</h3>
                    <div className={styles.editVacancy__help}>
                      <FiInfo size={20} style={{ color: '#3490DF' }} />
                      <div className={styles.editVacancy__helpText}>
                        <p>Если у вас несколько контактных лиц, укажите их в описании вакансии</p>
                      </div>
                    </div>
                    <div className={styles.editVacancy__inputs}>
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

                  {vacancy.status ? null : (
                    <>
                      <div className={styles.editVacancy__line}></div>
                      <div className={styles.editVacancy__tarifPlan}>
                        <h3 className={styles.editVacancy__titleBlock}>Тариф</h3>
                        <div className={styles.editVacancy__help}>
                          <FiInfo size={20} style={{ color: '#3490DF' }} />
                          <div className={styles.editVacancy__helpText}>
                            <p>
                              Подробнее о тарифах можно почитать на странице{' '}
                              <Link href={'/employer'} className={styles.editVacancy__helpLink}>
                                Работодателю
                              </Link>
                            </p>
                            <p>Чтобы выбрать нужный тариф просто нажмите на блок тарифа</p>
                          </div>
                        </div>
                        <div className={styles.editVacancy__cards}>
                          {tarifs?.map((elem, index) => {
                            return (
                              <div key={index} className={styles.editVacancy__card} onClick={() => setActiveTarif(index)}>
                                <div
                                  className={
                                    tarifs && activeTarif == index
                                      ? [styles.editVacancy__cardWrapper, styles.editVacancy__cardWrapper_active].join(' ')
                                      : styles.editVacancy__cardWrapper
                                  }
                                >
                                  <div className={styles.editVacancy__cardTitle}>Вакансия {elem.name}</div>
                                  <div className={styles.editVacancy__efficiency}>
                                    <div
                                      className={[
                                        styles.editVacancy__efficiencyNumber,
                                        styles[`editVacancy__efficiencyNumber_${(index % 3) + 1}`]
                                      ].join(' ')}
                                    >
                                      x{index + 1}
                                    </div>
                                    <div
                                      className={[styles.editVacancy__efficiencyDesc, styles[`editVacancy__efficiencyDesc_${(index % 3) + 1}`]].join(
                                        ' '
                                      )}
                                    >
                                      в {index + 1} раз <br /> эффективность
                                    </div>
                                  </div>
                                  <div className={styles.editVacancy__cardFooter}>
                                    <p className={styles.editVacancy__cardSalary}>{elem.salary} рублей</p>
                                    <p>публикация на {elem.time} дней</p>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </>
                  )}

                  {vacancy.status ? (
                    <div className={styles.editVacancy__footer}>
                      <div onClick={handleSubmit(onSave)} className={[styles.editVacancy__button, styles.editVacancy__button_post].join(' ')}>
                        {isLoadingSubmit ? (
                          <LoadingDots color={'#fff'} />
                        ) : (
                          <>
                            <CiSaveDown2 size={20} style={{ strokeWidth: '1' }} />
                            <span>Сохранить</span>
                          </>
                        )}
                      </div>
                      <div className={styles.editVacancy__close}>
                        <Link href={'/profile/e_vacancies'}>Отменить</Link>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.editVacancy__footer}>
                      {activeTarif !== undefined && tarifs && tarifs[activeTarif].salary == 0 ? (
                        <div onClick={handleSubmit(onPayment)} className={[styles.editVacancy__button, styles.editVacancy__button_post].join(' ')}>
                          {isLoadingSubmit ? <LoadingDots /> : <span>Опубликовать вакансию</span>}
                        </div>
                      ) : (
                        <div
                          onClick={handleSubmit(onOpenPayment)}
                          className={[styles.editVacancy__button, styles.editVacancy__button_post].join(' ')}
                        >
                          <span>Перейти к оплате</span>
                        </div>
                      )}
                    </div>
                  )}
                  <PaymentModal
                    active={activePayment}
                    setActive={setActivePayment}
                    tarif={tarifs && activeTarif ? tarifs[activeTarif].name : undefined}
                  >
                    <div onClick={handleSubmit(onPayment)} className={[styles.editVacancy__button, styles.editVacancy__button_post].join(' ')}>
                      {isLoadingSubmit ? (
                        <LoadingDots />
                      ) : (
                        <span>Оплатить {activeTarif !== undefined && tarifs && tarifs[activeTarif].salary} рублей</span>
                      )}
                    </div>
                  </PaymentModal>
                </form>
                <div className={styles.editVacancy__footerWarning}>
                  <p>
                    Размещая вакансию, вы соглашаетесь с
                    <span onClick={() => setActiveRules(true)} className={styles.editVacancy__helpLink}>
                      условиями и правилами
                    </span>
                    размещения вакансии на sewingweb.ru
                  </p>
                </div>
                <p className={styles.editVacancy__error}>
                  <ErrorForm>{errorUpdate}</ErrorForm>
                </p>
              </div>

              <SuccessVacancy active={activeSuccess} setActive={setActiveSuccess} />
              <RulesVacancy active={activeRules} setActive={setActiveRules} />
            </>
          ) : (
            <>
              <ErrorForm>Упс... Ошибка. Вы не можете редактировать не свои вакансии!!</ErrorForm>
              <div className={styles.editVacancy__buttonBack} onClick={() => router.back()}>
                Назад
              </div>
            </>
          )}
        </div>
      </div>
    </SiteLayout>
  )
}

export default EditVacancy
