import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import AuthLayout from '@/components/layouts/Auth/AuthLayout'
import Field from '@/components/ui/Field/Field'

import styles from './Applicant.module.scss'

interface Props {}

const applicant: FC<Props> = props => {
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
      <div className={styles.applicant}>
        <h1 className={styles.applicant__title}>Вход</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.applicant__form}
      >
        <div className={styles.applicant__item}>
          <Field
            {...register('phoneNumber', {
              required: 'Обязательное поле'
            })}
            type={'text'}
            title={'Телефон'}
            star={true}
            error={errors.phoneNumber?.message}
          />
        </div>
        <div className={styles.applicant__item}>
          <Field
            {...register('password', {
              required: 'Обязательное поле'
            })}
            type={'password'}
            title={'Пароль'}
            error={errors.password?.message}
            star={true}
          />
        </div>
        <div className={styles.applicant__enter}>
          <button className={styles.applicant__button}>Войти</button>
          <Link href="/" className={styles.applicant__forgot}>
            Забыли пароль?
          </Link>
        </div>
        <Link href="/" className={styles.applicant__registration}>
          Нет аккаунта?<span>Зарегистрироваться</span>
        </Link>
      </form>
    </AuthLayout>
  )
}

export default applicant
