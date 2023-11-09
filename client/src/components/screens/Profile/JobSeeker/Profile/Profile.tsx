import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './Profile.module.scss'

import SiteLayout from '@/components/layouts/Site/SiteLayout'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import { IUpdateUser } from '@/core/store/user/user.interface'

import { validMail, validPhone } from '@/core/helpers/valid-field'
import { useAuth } from '@/core/hooks/useAuth'
import { AuthService } from '@/core/services/auth/auth.service'

import photo from 'public/Profiles/photoUser.svg'

const Profile: FC = () => {
  // ========================================================
  const { user } = useAuth()
  const userId = user?.id
  const router = useRouter()

  // ========== REACT HOOK FORM =============================

  // save error server
  const [errorUpdate, setErrorUpdate] = useState<string | null>(null)

  // initial value fields
  useEffect(() => {
    if (user) {
      setValue('name', user.name)
      setValue('surname', user.surname)
      setValue('patronymic', user.patronymic)
      setValue('phone', user.phone)
      setValue('email', user.email)
    }
  }, [user])

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<IUpdateUser>({
    mode: 'onChange'
  })

  // submit form
  const onSubmit: SubmitHandler<IUpdateUser> = async data => {
    try {
      const updatedData = await AuthService.update(userId, data)

      // тут исправить, форма в иделе не должна перезагружаться
      router.reload()
    } catch (error: any) {
      setErrorUpdate(error.response.data.message)
    }
  }

  // reset field
  const handleCancel = () => {
    setErrorUpdate(null)

    reset({
      name: user?.name,
      surname: user?.surname,
      patronymic: user?.patronymic,
      phone: user?.phone,
      email: user?.email
    })
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
                    {...register('patronymic')}
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
                        message: 'Введите корректную эл. почту. Пример: sewingweb@email.ru'
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
                <div className={styles.profile__errorText}>{errorUpdate}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default Profile
