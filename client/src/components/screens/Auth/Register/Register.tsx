import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IRegister } from '@/core/store/user/user.interface'

import { useActions } from '@/core/hooks/useActions'
import { useAuth } from '@/core/hooks/useAuth'
import { useAuthRedirect } from '@/core/hooks/useAuthRedirect'
import { useTypedSelector } from '@/core/hooks/useTypedSelector'
import { validPhone } from '@/core/services/auth/auth.helper'

import AuthLayout from '@/components/layouts/Auth/AuthLayout'
import Field from '@/components/ui/Field/Field'

import styles from './Register.module.scss'

const Register: FC = () => {
  // =========================================================
  useAuthRedirect('/')
  const { isLoading } = useAuth()
  const { user } = useAuth()
  const { registration } = useActions()
  const router = useRouter()
  const [role, setRole] = useState('1')

  // ========== ERROR SERVER =============================
  const error = useTypedSelector(state => state.user.error)

  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

  // onChange Fielsd
  const onChangeFields = () => setErrorMessage(undefined)

  useEffect(() => {
    setErrorMessage(error)
  }, [error])

  // ========== REACT HOOK FORM ===============================
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<IRegister>({
    mode: 'onChange',
    defaultValues: { roleId: +role }
  })

  // submit form
  const onSubmit: SubmitHandler<IRegister> = data => {
    registration(data)

    // баг здесь, не перекидывает, так как сверху асинк санк асинхронный и перекидывает на /
    //if (user && errorMessage == undefined && role == '2') useAuthRedirect('/auth/registerCompany')
  }

  // ========== ROLES =============================
  useEffect(() => {
    setValue('roleId', +role)
  }, [role, setValue])

  // =========================================================

  return (
    <AuthLayout>
      <div className={styles.register}>
        <div className={styles.register__choice}>
          <div
            onClick={() => setRole('1')}
            className={
              role == '1'
                ? [styles.register__choiceItem, styles.register__choiceItem_active].join(' ')
                : [styles.register__choiceItem, styles.register__choiceItem_unActive].join(' ')
            }
          >
            <span>Я соискатель</span>
          </div>
          <div
            onClick={() => setRole('2')}
            className={
              role == '2'
                ? [styles.register__choiceItem, styles.register__choiceItem_active].join(' ')
                : [styles.register__choiceItem, styles.register__choiceItem_unActive].join(' ')
            }
          >
            <span>Я работодатель</span>
          </div>
        </div>
        <h1 className={styles.register__title}>Регистрация</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.register__form}>
          <div className={styles.register__item}>
            <Field
              {...register('name', {
                required: 'Обязательное поле',
                onChange: () => onChangeFields()
              })}
              type={'text'}
              title={'Имя'}
              star={true}
              error={errors.name?.message}
              placeholder="Введите имя"
            />
          </div>
          <div className={styles.register__item}>
            <Field
              {...register('surname', {
                required: 'Обязательное поле',
                onChange: () => onChangeFields()
              })}
              type={'text'}
              title={'Фамилия'}
              error={errors.surname?.message}
              star={true}
              placeholder="Введите фамилию"
            />
          </div>
          <div className={styles.register__item}>
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
              title={'Номер телефона'}
              error={errors.phone?.message}
              star={true}
              placeholder="Введите номер телефона"
            />
          </div>
          <div className={styles.register__item}>
            <Field
              {...register('password', {
                required: 'Обязательное поле',
                minLength: {
                  value: 8,
                  message: 'Минимальная длинна пароля должна быть 8 символов'
                },
                onChange: () => onChangeFields()
              })}
              type={'password'}
              title={'Пароль'}
              error={errors.password?.message}
              star={true}
              placeholder="Придумайте пароль"
            />
          </div>

          <div className={styles.register__enter}>
            <div className={styles.register__control}>
              {role == '1' ? (
                <button className={styles.register__button}>Продолжить как соискатель</button>
              ) : role == '2' ? (
                <button className={styles.register__button}>Продолжить как работодатель</button>
              ) : null}
              <div className={styles.register__login}>
                <span>Есть аккаунт? </span>
                <Link href="/auth/login">Войти</Link>
              </div>
            </div>
            <div className={styles.register__error}>{errorMessage}</div>
          </div>

          <div className={styles.register__agreement}>
            Регистрируясь, вы принимаете условия <span className={styles.register__forgot}>Правил</span> и{' '}
            <span className={styles.register__forgot}>Соглашения</span> об использовании сайта sewingweb.ru и даете{' '}
            <span className={styles.register__forgot}>Согласие на обработку персональных данных</span>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Register
