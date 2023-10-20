import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IRegister } from '@/core/store/user/user.interface'

import { useActions } from '@/core/hooks/useActions'
import { useAuth } from '@/core/hooks/useAuth'
import { useAuthRedirect } from '@/core/hooks/useAuthRedirect'

import AuthLayout from '@/components/layouts/Auth/AuthLayout'
import Field from '@/components/ui/Field/Field'

import styles from './Register.module.scss'

interface Props {}

const Register: FC<Props> = props => {
  const { user } = useAuth()

  const { registration } = useActions()

  const router = useRouter()

  const [role, setRole] = useState('1')

  if (user) useAuthRedirect()

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

  const onSubmit: SubmitHandler<IRegister> = data => {
    registration(data)
    reset()
  }

  useEffect(() => {
    setValue('roleId', +role)
  }, [role, setValue])

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
                required: 'Обязательное поле'
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
                required: 'Обязательное поле'
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
                required: 'Обязательное поле'
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
                required: 'Обязательное поле'
              })}
              type={'password'}
              title={'Пароль'}
              error={errors.password?.message}
              star={true}
              placeholder="Придумайте пароль"
            />
          </div>

          <div className={styles.register__enter}>
            {role == '1' ? (
              <button className={styles.register__button}>Продолжить как соискатель</button>
            ) : role == '2' ? (
              <button onClick={() => router.replace('/auth/registerCompany')} className={styles.register__button}>
                Продолжить как работодатель
              </button>
            ) : null}
            <div className={styles.register__login}>
              <span>Есть аккаунт? </span>
              <Link href="/auth/login">Войти</Link>
            </div>
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
