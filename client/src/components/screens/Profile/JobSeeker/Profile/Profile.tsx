import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './Profile.module.scss'

import SiteLayout from '@/components/layouts/Site/SiteLayout'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import { IUser } from '@/core/types/user.interface'

import { useAuth } from '@/core/hooks/useAuth'

import { validMail, validPhone } from '@/core/helpers/valid-field'

import photo from 'public/Profiles/photoUser.svg'

const Profile: FC = () => {
  const { user } = useAuth()
  // ========== REACT HOOK FORM =============================
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IUser>({
    mode: 'onChange',
    defaultValues: {
      name: user?.name,
      surname: user?.surname,
      patronymic: user?.patronymic,
      phone: user?.phone,
      email: user?.email
    }
  })

  // submit form
  const onSubmit: SubmitHandler<IUser> = data => {
    console.log('df')
  }

  const handleCancel = () => {
    reset() // Очищаем поля до дефолтных значений
  }

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.profile}>
        <div className="profile__container">
          <div className={styles.profile__header}>
            <ProfileTitle title={'Личные данные'} />
          </div>
          <div className={styles.profile__wrapper}>
            <div className={styles.profile__photo}>
              <Image width={120} src={photo} alt={'Фото'} />
              <span>id: {user?.id}</span>
            </div>
            <div className={styles.profile__content}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.profile__field}>
                  <FieldProfile
                    {...register('name', {
                      required: 'Обязательное поле'
                    })}
                    type={'text'}
                    title={'Имя'}
                    star={true}
                    placeholder="Введите имя"
                    error={errors.name?.message}
                  />
                  <FieldProfile
                    {...register('surname', {
                      required: 'Обязательное поле'
                    })}
                    type={'text'}
                    title={'Фамилия'}
                    star={true}
                    placeholder="Введите фамилию"
                    error={errors.surname?.message}
                  />
                  <FieldProfile
                    {...register('patronymic', {})}
                    type={'text'}
                    title={'Отчество'}
                    placeholder="Введите отчество"
                    error={errors.patronymic?.message}
                  />
                  <FieldProfile
                    {...register('phone', {
                      required: 'Обязательное поле',
                      pattern: {
                        value: validPhone,
                        message: 'Введите корректный номер телефона. Пример +79780000000'
                      }
                    })}
                    type={'text'}
                    title={'Номер телефона'}
                    star={true}
                    placeholder="Введите номер телефона"
                    error={errors.phone?.message}
                  />
                  <FieldProfile
                    {...register('email', {
                      pattern: {
                        value: validMail,
                        message: 'Введите корректную эл. почту. Пример mail@test.ru'
                      }
                    })}
                    type={'text'}
                    title={'Эл. почта'}
                    star={false}
                    placeholder="Введите электронную почту"
                    error={errors.email?.message}
                  />
                </div>
                <div className={styles.profile__password}>
                  <div className={styles.profile__title}>Пароль</div>
                  <Link href={'/auth/remind'} className={styles.profile__remind}>
                    Изменить пароль
                  </Link>
                </div>
                <div className={styles.profile__buttons}>
                  <button className={styles.profile__save}>Сохранить</button>
                  <div onClick={handleCancel} className={styles.profile__close}>
                    Отменить
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default Profile
