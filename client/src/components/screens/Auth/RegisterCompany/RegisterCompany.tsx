import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './RegisterCompany.module.scss'

import Field from '@/components/ui/Field/Field'

import { IEmployer } from '@/core/types/employer.interface'

import { validNumber } from '@/core/helpers/valid-field'
import { useAuth } from '@/core/hooks/useAuth'
import { EmployerService } from '@/core/services/employer/employer.service'

import logo from 'public/Logo/logoAuth.svg'

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

  // при клике
  const onSubmit: SubmitHandler<IEmployer> = async data => {
    try {
      const response = await EmployerService.create(data)
      reset()
      router.back()
    } catch (error: any) {
      setServerErrorMessage(error.response.data.message)
    }
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
                  required: 'Укажите название предприятия'
                })}
                type={'text'}
                title={'Название предприятия'}
                star={true}
                error={errors.companyName?.message}
              />
            </div>

            <div className={styles.employer__item}>
              <Field
                {...register('inn', {
                  required: 'Укажите ИНН',
                  pattern: {
                    value: validNumber(12),
                    message: 'Введите корректный ИНН. Он должен состоять из 12 цифр.'
                  }
                })}
                type={'text'}
                title={'ИНН предприятия'}
                star={true}
                error={errors.inn?.message}
              />
            </div>

            <div className={styles.employer__twoItem}>
              <div className={styles.employer__item}>
                <Field {...register('registrCity', {})} type={'text'} title={'Город регистрации'} star={false} error={errors.registrCity?.message} />
              </div>
              <div className={styles.employer__item}>
                <Field
                  {...register('type', {
                    required: 'Укажите тип предприятия'
                  })}
                  type={'text'}
                  title={'Тип предприятия'}
                  star={true}
                  error={errors.type?.message}
                />
              </div>
            </div>

            <div className={styles.employer__item}>
              <Field
                {...register('size', {
                  required: 'Укажите размер предприятия'
                })}
                type={'number'}
                title={'Укажите размер предприятия'}
                star={true}
                error={errors.size?.message}
                placeholder="Количество сотрудников на предприятии"
              />
            </div>

            <div className={styles.employer__twoItem}>
              <Field {...register('adress', {})} type={'text'} title={'Адресс'} star={false} error={errors.adress?.message} />
              <Field
                {...register('contact', {
                  required: 'Укажите способ связи с вами'
                })}
                type={'text'}
                title={'Контакты'}
                star={true}
                error={errors.contact?.message}
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
