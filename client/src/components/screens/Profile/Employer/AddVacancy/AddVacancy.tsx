import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import 'react-quill/dist/quill.snow.css'

import styles from './AddVacancy.module.scss'

import SiteLayout from '@/components/layouts/Site/SiteLayout'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import { CiSaveDown2 } from 'react-icons/ci'
import { CiSaveUp2 } from 'react-icons/ci'
import { FiInfo } from 'react-icons/fi'

import img from 'public/Employers/imageBaner01.svg'

const QuillNoSSRWrapper = dynamic(async () => (await import('react-quill')).default, { ssr: false })

const AddVacancy: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    defaultValues: {}
  })
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.addVacancy}>
        <div className="addVacancy__container">
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
            <div className={styles.addVacancy__wrapper}>
              <div className={styles.addVacancy__header}>
                <ProfileTitle title={'Добавить вакансию'} />
              </div>
              <div className={styles.addVacancy__headerForm}>
                <div className={styles.addVacancy__help}>
                  <FiInfo size={20} style={{ color: '#3490DF' }} />
                  <div className={styles.addVacancy__helpText}>
                    <p>Укажите популярное название, чтобы было проще найти вакансию</p>
                    <p>После размещения вы уже не сможете изменить название!</p>
                  </div>
                </div>
                <div className={styles.addVacancy__inputs}>
                  <FieldProfile
                    // {...register('companyName', {
                    //   required: 'Укажите название предприятия'
                    // })}
                    type={'text'}
                    title={'Название вакансии'}
                    star={true}
                    // error={errors.companyName?.message}
                  />
                  <FieldProfile
                    // {...register('companyName', {
                    //   required: 'Укажите название предприятия'
                    // })}
                    type={'text'}
                    title={'Профессия'}
                    star={true}
                    // error={errors.companyName?.message}
                  />
                </div>
                <div className={styles.addVacancy__salaryBlock}>
                  <div className={styles.addVacancy__labelSalary}>Зарплата</div>
                  <div className={styles.addVacancy__salary}>
                    <div className={styles.addVacancy__salaryVield}>
                      <input type="number" placeholder="от" />
                    </div>
                    <span>—</span>

                    <div className={styles.addVacancy__salaryVield}>
                      <input type="number" placeholder="до" />
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
                <textarea></textarea>
              </div>
              <div className={styles.addVacancy__inputs}>
                <FieldProfile
                  // {...register('companyName', {
                  //   required: 'Укажите название предприятия'
                  // })}
                  type={'text'}
                  title={'Город'}
                  star={true}
                  // error={errors.companyName?.message}
                />
                <FieldProfile
                  // {...register('companyName', {
                  //   required: 'Укажите название предприятия'
                  // })}
                  type={'text'}
                  title={'Адрес'}
                  star={true}
                  // error={errors.companyName?.message}
                />
                <FieldProfile
                  // {...register('companyName', {
                  //   required: 'Укажите название предприятия'
                  // })}
                  type={'text'}
                  title={'Ключевые навыки'}
                  star={true}
                  placeholder="добавить навык"
                  // error={errors.companyName?.message}
                />
                <div className={[styles.addVacancy__input, styles.addVacancy__input_conditions].join(' ')}>
                  <FieldProfile
                    // {...register('companyName', {
                    //   required: 'Укажите название предприятия'
                    // })}
                    type={'text'}
                    title={'Опыт работы'}
                    star={true}
                    // error={errors.companyName?.message}
                  />
                </div>
                <div className={[styles.addVacancy__input, styles.addVacancy__input_conditions].join(' ')}>
                  <FieldProfile
                    // {...register('companyName', {
                    //   required: 'Укажите название предприятия'
                    // })}
                    type={'text'}
                    title={'Тип занятости'}
                    star={true}

                    // error={errors.companyName?.message}
                  />
                </div>
                <div className={[styles.addVacancy__input, styles.addVacancy__input_conditions].join(' ')}>
                  <FieldProfile
                    // {...register('companyName', {
                    //   required: 'Укажите название предприятия'
                    // })}
                    type={'text'}
                    title={'График работы'}
                    star={true}

                    // error={errors.companyName?.message}
                  />
                </div>
                <div className={[styles.addVacancy__input, styles.addVacancy__input_conditions].join(' ')}>
                  <FieldProfile
                    // {...register('companyName', {
                    //   required: 'Укажите название предприятия'
                    // })}
                    type={'text'}
                    title={'Образование'}
                    star={false}

                    // error={errors.companyName?.message}
                  />
                </div>
              </div>
              <div className={styles.addVacancy__tags}>
                <div className={styles.addVacancy__tagsLabel}>Вакансия подходит для</div>
                <div className={styles.addVacancy__tagsList}>
                  <div className={styles.addVacancy__tag}>
                    <input type="checkbox" />
                    <span>Студентов</span>
                  </div>
                  <div className={styles.addVacancy__tag}>
                    <input type="checkbox" />
                    <span>Пенсионеров(Возвраст 60+)</span>
                  </div>
                  <div className={styles.addVacancy__tag}>
                    <input type="checkbox" />
                    <span>Соискателей с инвалидностью</span>
                  </div>
                  <div className={styles.addVacancy__tag}>
                    <input type="checkbox" />
                    <span>Иностранных граждан</span>
                  </div>
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

                <QuillNoSSRWrapper
                  modules={{
                    toolbar: [
                      [{ size: [] }],
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ list: 'ordered' }, { list: 'bullet' }],
                      ['clean']
                    ]
                  }}
                />
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
                    // {...register('companyName', {
                    //   required: 'Укажите название предприятия'
                    // })}
                    type={'text'}
                    title={'ФИО'}
                    star={true}

                    // error={errors.companyName?.message}
                  />

                  <FieldProfile
                    // {...register('companyName', {
                    //   required: 'Укажите название предприятия'
                    // })}
                    type={'text'}
                    title={'Номер телефона'}
                    star={true}

                    // error={errors.companyName?.message}
                  />

                  <FieldProfile
                    // {...register('companyName', {
                    //   required: 'Укажите название предприятия'
                    // })}
                    type={'text'}
                    title={'Другой способ связи'}
                    star={false}

                    // error={errors.companyName?.message}
                  />
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
                  <div className={styles.addVacancy__card}>
                    <div className={styles.addVacancy__cardWrapper}>
                      <div className={styles.addVacancy__cardTitle}>Вакансия Стандарт</div>
                      <div className={styles.addVacancy__efficiency}>
                        <div
                          className={[
                            styles.addVacancy__efficiencyNumber,
                            styles.addVacancy__efficiencyNumber_one
                          ].join(' ')}
                        >
                          x1
                        </div>
                        <div
                          className={[styles.addVacancy__efficiencyDesc, styles.addVacancy__efficiencyDesc_one].join(
                            ' '
                          )}
                        >
                          в 1 раз <br /> эффективность
                        </div>
                      </div>
                      <div className={styles.addVacancy__cardFooter}>
                        <p className={styles.addVacancy__cardSalary}>0 рублей</p>
                        <p>публикация на 7 дней</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.addVacancy__card}>
                    <div className={styles.addVacancy__cardWrapper}>
                      <div className={styles.addVacancy__cardTitle}>Вакансия Премиум</div>
                      <div className={styles.addVacancy__efficiency}>
                        <div
                          className={[
                            styles.addVacancy__efficiencyNumber,
                            styles.addVacancy__efficiencyNumber_two
                          ].join(' ')}
                        >
                          x3
                        </div>
                        <div
                          className={[styles.addVacancy__efficiencyDesc, styles.addVacancy__efficiencyDesc_two].join(
                            ' '
                          )}
                        >
                          в 3 раз <br /> эффективность
                        </div>
                      </div>
                      <div className={styles.addVacancy__cardFooter}>
                        <p className={styles.addVacancy__cardSalary}>999 рублей</p>
                        <p>публикация на 15 дней</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.addVacancy__card}>
                    <div className={styles.addVacancy__cardWrapper}>
                      <div className={styles.addVacancy__cardTitle}>Вакансия Про</div>
                      <div className={styles.addVacancy__efficiency}>
                        <div
                          className={[
                            styles.addVacancy__efficiencyNumber,
                            styles.addVacancy__efficiencyNumber_three
                          ].join(' ')}
                        >
                          x6
                        </div>
                        <div
                          className={[styles.addVacancy__efficiencyDesc, styles.addVacancy__efficiencyDesc_three].join(
                            ' '
                          )}
                        >
                          в 6 раз <br /> эффективность
                        </div>
                      </div>
                      <div className={styles.addVacancy__cardFooter}>
                        <p className={styles.addVacancy__cardSalary}>1990 рублей</p>
                        <p>публикация на 25 дней</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.addVacancy__footer}>
                <div className={[styles.addVacancy__button, styles.addVacancy__button_post].join(' ')}>
                  <CiSaveUp2 size={20} style={{ color: '#fff', strokeWidth: '1' }} />
                  <span> Разместить вакансию</span>
                </div>
                <div className={[styles.addVacancy__button, styles.addVacancy__button_save].join(' ')}>
                  <CiSaveDown2 size={20} style={{ strokeWidth: '1' }} />
                  <span>Сохранить вакансию</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default AddVacancy
