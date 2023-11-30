import Link from 'next/link'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './Remind.module.scss'

import AuthLayout from '@/components/layouts/Auth/AuthLayout'
import Field from '@/components/ui/Field/Field'

import { IRemind } from '@/core/store/user/user.interface'

import { validPhone } from '@/core/helpers/valid-field'

const Remind: FC = () => {
  // ========== REACT HOOK FORM =============================
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IRemind>({
    mode: 'onChange'
  })

  // submit form
  const onSubmit: SubmitHandler<IRemind> = data => {}

  return (
    <AuthLayout>
      <div className={styles.remind}>
        <h1 className={styles.remind__title}>Напомнить пароль</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.remind__form}>
          <div className={styles.remind__item}>
            <Field
              {...register('phone', {
                required: 'Обязательное поле',
                pattern: {
                  value: validPhone,
                  message: 'Введите корректный номер телефона. Пример +79780000000'
                }
              })}
              type={'text'}
              title={'Телефон'}
              star={true}
              error={errors.phone?.message}
            />
          </div>
          <div className={styles.remind__item}>
            <Field
              {...register('password', {
                required: 'Обязательное поле',
                pattern: {
                  value: validPhone,
                  message: 'Введите корректный номер телефона. Пример +79780000000'
                }
              })}
              type={'password'}
              title={'Новый пароль'}
              star={true}
              error={errors.phone?.message}
            />
          </div>
          <div className={styles.remind__item}>
            <Field
              {...register('repeatPassword', {
                required: 'Обязательное поле',
                pattern: {
                  value: validPhone,
                  message: 'Введите корректный номер телефона. Пример +79780000000'
                }
              })}
              type={'password'}
              title={'Повторите новый пароль'}
              star={true}
              error={errors.phone?.message}
            />
          </div>
          <div className={styles.remind__enter}>
            <div className={styles.remind__control}>
              <button className={styles.remind__button}>Поменять пароль</button>
            </div>
            <div className={styles.remind__error}>{errorMessage}</div>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Remind
