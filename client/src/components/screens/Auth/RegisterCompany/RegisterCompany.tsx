import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useAuth } from '@/core/hooks/useAuth'
import { useCheckRole } from '@/core/hooks/useCheckRole'

import AuthLayout from '@/components/layouts/Auth/AuthLayout'
import Field from '@/components/ui/Field/Field'

import styles from './RegisterCompany.module.scss'

import logo from 'public/Logo/swId.svg'

const RegisterCompany: FC = () => {
  const { user } = useAuth()
  const role = useCheckRole()
  const router = useRouter()
  if ((user && role == '_JOBSEEKER_') || !user) router.replace('/')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = () => {
    reset()
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
                {...register('name', {
                  required: 'Обязательное поле'
                })}
                type={'text'}
                title={'Название предприятия'}
                star={true}
                error={errors.name?.message}
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
                  {...register('city', {})}
                  type={'text'}
                  title={'Город регистрации'}
                  star={false}
                  error={errors.city?.message}
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
                type={'text'}
                title={'Размер предприятия'}
                star={true}
                error={errors.inn?.message}
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
                error={errors.adress?.message}
                placeholder="Введите номер телефона или сайт"
              />
            </div>

            <div className={styles.employer__footer}>
              <button className={styles.employer__submit}>Найти сотродников!</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterCompany
