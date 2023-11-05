import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './RegisterCompany.module.scss'

import Field from '@/components/ui/Field/Field'

import { IEmployer } from '@/core/types/employer.interface'

import { useAuth } from '@/core/hooks/useAuth'
import { employerService } from '@/core/services/employer/employer.service'

import logo from 'public/Logo/swId.svg'

const RegisterCompany: FC = () => {
  const { user } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IEmployer>({
    mode: 'onChange',
    defaultValues: {
      userId: user?.id
    }
  })

  // ошибка сервера
  const [serverErrorMessage, setServerErrorMessage] = useState<string | null>(null)

  // запрос employerService
  const create = async (data: IEmployer) => {
    const response = await employerService.create(data)
    setServerErrorMessage(response.message)
    return response.statusCode
  }

  // при клике
  const onSubmit: SubmitHandler<IEmployer> = async data => {
    const isCreated = await create(data)
    if (!isCreated) {
      reset()
      router.replace('/')
    } else return isCreated
  }

  return (
    <div className={styles.employer}>
      <div className={styles.employer__header}>
        <Image src={logo} alt={'SewingWeb ID'} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.employer__wrapper}>
        <div className={styles.employer__content}>
          <div className={styles.employer__formTitle}>Регистрация предприятия</div>
          <div className={styles.employer__main}>
            <div className={styles.employer__item}>
              <Field
                {...register('companyName', {
                  required: 'Обязательное поле'
                })}
                type={'text'}
                title={'Название предприятия'}
                star={true}
                error={errors.companyName?.message}
                placeholder="Введите название предприятия"
              />
            </div>

            <div className={styles.employer__item}>
              <Field
                {...register('inn', {
                  required: 'Обязательное поле'
                })}
                type={'text'}
                title={'ИНН предприятия'}
                star={true}
                error={errors.inn?.message}
                placeholder="Введите ИНН предприятия"
              />
            </div>

            <div className={styles.employer__twoItem}>
              <div className={styles.employer__item}>
                <Field
                  {...register('registrCity', {})}
                  type={'text'}
                  title={'Город регистрации'}
                  star={false}
                  error={errors.registrCity?.message}
                  placeholder="Введите город регистрации"
                />
              </div>
              <div className={styles.employer__item}>
                <Field
                  {...register('type', {
                    required: 'Обязательное поле'
                  })}
                  type={'text'}
                  title={'Тип предприятия'}
                  star={true}
                  error={errors.type?.message}
                  placeholder="Введите тип предприятия"
                />
              </div>
            </div>

            <div className={styles.employer__item}>
              <Field
                {...register('size', {
                  required: 'Обязательное поле'
                })}
                type={'number'}
                title={'Размер предприятия'}
                star={true}
                error={errors.size?.message}
                placeholder="Введите размер предприятия"
              />
            </div>

            <div className={styles.employer__twoItem}>
              <Field
                {...register('adress', {})}
                type={'text'}
                title={'Адресс'}
                star={false}
                error={errors.adress?.message}
                placeholder="Введите адресс офиса или предприятия"
              />
              <Field
                {...register('contact', {
                  required: 'Обязательное поле'
                })}
                type={'text'}
                title={'Контакты'}
                star={true}
                error={errors.contact?.message}
                placeholder="Введите номер телефона или сайт"
              />
            </div>

            <div className={styles.employer__footer}>
              <button className={styles.employer__submit}>Найти сотрудников!</button>
            </div>
            {serverErrorMessage ? (
              <div className={styles.employer__response}>
                <div className={styles.employer__errorResponse}>{serverErrorMessage}</div>
                <Link href={'/'} className={styles.employer__later}>
                  Заполнить позже (вы не сможете опубликовать вакансию!)
                </Link>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterCompany
