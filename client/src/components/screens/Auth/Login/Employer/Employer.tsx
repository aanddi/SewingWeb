import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import AuthLayout from '@/components/layouts/Auth/AuthLayout'
import Field from '@/components/ui/Field/Field'

import styles from './Employer.module.scss'

interface Props {}

const Employer: FC<Props> = props => {
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
    <AuthLayout>
      <div className={styles.employer}>
        <h1 className={styles.employer__title}>Вход</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.employer__form}>
        <div className={styles.employer__item}>
          <Field
            {...register('phoneNumber', {
              required: 'Обязательное поле'
            })}
            type={'text'}
            title={'Телефон'}
            star={true}
            error={errors.phoneNumber?.message}
            placeholder="Введите номер телефона"
          />
        </div>
        <div className={styles.employer__item}>
          <Field
            {...register('password', {
              required: 'Обязательное поле'
            })}
            type={'password'}
            title={'Пароль'}
            error={errors.password?.message}
            star={true}
            placeholder="Введите пароль"
          />
        </div>
        <div className={styles.employer__enter}>
          <button className={styles.employer__button}>Войти</button>
          <Link href="/" className={styles.employer__forgot}>
            Забыли пароль?
          </Link>
        </div>
        <Link
          href="/register/employer"
          className={styles.employer__registration}
        >
          Нет аккаунта?<span>Зарегистрироваться</span>
        </Link>
      </form>
    </AuthLayout>
  )
}

export default Employer
