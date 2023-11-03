import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './Login.module.scss'

import AuthLayout from '@/components/layouts/Auth/AuthLayout'
import Field from '@/components/ui/Field/Field'

import { ILogin } from '@/core/store/user/user.interface'

import { useActions } from '@/core/hooks/useActions'
import { useAuth } from '@/core/hooks/useAuth'
import { useAuthRedirect } from '@/core/hooks/useAuthRedirect'
import { useTypedSelector } from '@/core/hooks/useTypedSelector'

import { validPhone } from '@/core/helpers/valid-field'

const Login: FC = () => {
  // =========================================================
  useAuthRedirect('/')
  const { isLoading } = useAuth()
  const { login } = useActions()

  // ========== ERROR SERVER =============================
  const error = useTypedSelector(state => state.user.error)

  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

  // onChange Fielsd
  const onChangeFields = () => setErrorMessage(undefined)

  useEffect(() => {
    setErrorMessage(error)
  }, [error])

  // ========== REACT HOOK FORM =============================
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ILogin>({
    mode: 'onChange'
  })

  // submit form
  const onSubmit: SubmitHandler<ILogin> = data => {
    login(data)
  }
  // =========================================================

  return (
    <AuthLayout>
      <div className={styles.applicant}>
        <h1 className={styles.applicant__title}>Вход</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.applicant__form}>
          <div className={styles.applicant__item}>
            <Field
              {...register('phone', {
                required: 'Обязательное поле',
                onChange: () => onChangeFields(),
                pattern: {
                  value: validPhone,
                  message: 'Введите корректный номер телефона. Пример +79780000000'
                }
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
                onChange: () => onChangeFields(),
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
            <div className={styles.applicant__control}>
              <button className={styles.applicant__button}>Войти</button>
              <Link href="/auth/remind" className={styles.applicant__forgot}>
                Забыли пароль?
              </Link>
            </div>
            <div className={styles.applicant__error}>{errorMessage}</div>
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
