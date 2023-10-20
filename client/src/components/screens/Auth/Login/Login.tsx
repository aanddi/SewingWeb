import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ILogin } from '@/core/store/user/user.interface'

import { useActions } from '@/core/hooks/useActions'
import { useAuth } from '@/core/hooks/useAuth'
import { useAuthRedirect } from '@/core/hooks/useAuthRedirect'

import AuthLayout from '@/components/layouts/Auth/AuthLayout'
import Field from '@/components/ui/Field/Field'

import styles from './Login.module.scss'

interface Props {}

const Login: FC<Props> = props => {
  useAuthRedirect()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ILogin>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<ILogin> = data => {
    login(data)
    reset()
  }

  const { isLoading } = useAuth()
  const { login } = useActions()

  return (
    <AuthLayout>
      <div className={styles.applicant}>
        <h1 className={styles.applicant__title}>Вход</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.applicant__form}>
          <div className={styles.applicant__item}>
            <Field
              {...register('phone', {
                required: 'Обязательное поле'
              })}
              type={'text'}
              title={'Телефон'}
              star={true}
              error={errors.phone?.message}
              placeholder="Введите номер телефона"
            />
          </div>
          <div className={styles.applicant__item}>
            <Field
              {...register('password', {
                required: 'Обязательное поле',
                minLength: {
                  value: 8,
                  message: 'Минимальная длинна пароля должна быть 8 символов'
                }
              })}
              type={'password'}
              title={'Пароль'}
              error={errors.password?.message}
              star={true}
              placeholder="Введите пароль"
            />
          </div>
          <div className={styles.applicant__enter}>
            <button className={styles.applicant__button}>Войти</button>
            <Link href="/" className={styles.applicant__forgot}>
              Забыли пароль?
            </Link>
          </div>
          <Link href="/auth/register" className={styles.applicant__registration}>
            Нет аккаунта?<span>Зарегистрироваться</span>
          </Link>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login
