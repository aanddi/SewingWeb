import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import AuthLayout from '@/components/layouts/Auth/AuthLayout'
import Field from '@/components/ui/Field/Field'

import styles from './Employer.module.scss'

import logo from 'public/Logo/swId.svg'

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
    <div className={styles.employer}>
      <div className={styles.employer__header}>
        <Link href={'/'}>
          <Image src={logo} alt={'SewingWeb ID'} />
        </Link>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.employer__wrapper}
      >
        <div className={styles.employer__content}>
          <div className={styles.employer__formTitle}>
            Регистрация предприятия
          </div>
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
                error={errors.name?.message}
                placeholder="Введите ИНН предприятия"
              />
            </div>
            <div className={styles.employer__title}>
              Контактное лицо (конфиденциально)
            </div>
            <div className={styles.employer__conсat}>
              <div className={styles.employer__item}>
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
              <div className={styles.employer__item}>
                <Field
                  {...register('surname', {
                    required: 'Обязательное поле'
                  })}
                  type={'text'}
                  title={'Фамилия'}
                  star={true}
                  error={errors.surname?.message}
                  placeholder="Введите фамилию"
                />
              </div>
            </div>
            <div className={styles.employer__item}>
              <Field
                {...register('phoneNumber', {
                  required: 'Обязательное поле'
                })}
                type={'text'}
                title={'Номер телефона'}
                star={true}
                error={errors.name?.message}
                placeholder="Введите номер телефона"
              />
            </div>
            <div className={styles.employer__password}>
              <div className={styles.employer__conсat}>
                <div className={styles.employer__item}>
                  <Field
                    {...register('password', {
                      required: 'Обязательное поле'
                    })}
                    type={'password'}
                    title={'Пароль'}
                    star={true}
                    error={errors.password?.message}
                    placeholder="Придумайте пароль"
                  />
                </div>
                <div className={styles.employer__item}>
                  <Field
                    {...register('repeatPassword', {
                      required: 'Обязательное поле'
                    })}
                    type={'password'}
                    title={'Повторите пароль'}
                    star={true}
                    error={errors.surname?.message}
                    placeholder="Повторите пароль"
                  />
                </div>
              </div>
            </div>
            <div className={styles.employer__footer}>
              <button className={styles.employer__submit}>Продолжить</button>
              <div className={styles.employer__login}>
                Есть аккаунт? <Link href={'/login/employer'}>Войти</Link>
              </div>
            </div>
            <div className={styles.employer__forgot}>
              Нажимая кнопку «Продолжить», вы принимаете условия{' '}
              <span>Правил</span> и <span>Соглашения</span> об использовании
              сайта sewingweb.ru
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Employer
