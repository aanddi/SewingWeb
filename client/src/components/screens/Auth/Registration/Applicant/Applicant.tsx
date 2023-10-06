import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import AuthLayout from '@/components/layouts/Auth/AuthLayout'
import Field from '@/components/ui/Field/Field'

import styles from './Applicant.module.scss'

interface Props {}

const Applicant: FC<Props> = props => {
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
        <h1 className={styles.applicant__title}>Регистрация</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.applicant__form}
        >
          <div className={styles.applicant__item}>
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
          <div className={styles.applicant__item}>
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
          <div className={styles.applicant__item}>
            <Field
              {...register('phoneNumber', {
                required: 'Обязательное поле'
              })}
              type={'text'}
              title={'Номер телефона'}
              error={errors.phoneNumber?.message}
              star={true}
              placeholder="Введите номер телефона"
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
              placeholder="Придумайте пароль"
            />
          </div>
          <div className={styles.applicant__item}>
            <Field
              {...register('repeatPassword', {
                required: 'Обязательное поле'
              })}
              type={'password'}
              title={'Повторите пароль'}
              error={errors.repeatPassword?.message}
              star={true}
              placeholder="Повторите пароль"
            />
          </div>
          <div className={styles.applicant__enter}>
            <button className={styles.applicant__button}>Продолжить</button>
            <div className={styles.applicant__login}>
              <span>Есть аккаунт? </span>
              <Link href="/login/applicant">Войти</Link>
            </div>
          </div>
          <div className={styles.applicant__agreement}>
            Регистрируясь, вы принимаете условия{' '}
            <span className={styles.applicant__forgot}>Правил</span> и{' '}
            <span className={styles.applicant__forgot}>Соглашения</span> об
            использовании сайта sewingweb.ru и даете{' '}
            <span className={styles.applicant__forgot}>
              Согласие на обработку персональных данных
            </span>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Applicant
