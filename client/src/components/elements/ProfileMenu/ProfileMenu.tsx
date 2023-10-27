import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { useActions } from '@/core/hooks/useActions'
import { useAuth } from '@/core/hooks/useAuth'
import { useCheckRole } from '@/core/hooks/useCheckRole'
import { useOutside } from '@/core/hooks/useOutside'

import styles from './ProfileMenu.module.scss'

import photoUser from 'public/Profiles/photoUser.svg'

const ProfileMenu: FC = () => {
  const { user } = useAuth()
  const role = useCheckRole()

  const { logout } = useActions()

  const { isShow, setIsShow, ref } = useOutside(false)
  return (
    <div className={styles.profileMenu} ref={ref}>
      <div className={styles.profileMenu__photo} onClick={() => setIsShow(!isShow)}>
        <Image src={photoUser} alt="Фото" />
      </div>

      <div
        className={
          isShow
            ? [styles.profileMenu__menu, styles.profileMenu__menu_active].join(' ')
            : [styles.profileMenu__menu, styles.profileMenu__menu_unActive].join(' ')
        }
      >
        <div className={styles.profileMenu__wrapper}>
          <div className={styles.profileMenu__header}>
            <div className={styles.profileMenu__name}>
              <span>
                {user?.name} {user?.surname}
              </span>
              <div className={styles.profileMenu__tools}>Настроить аккаунт</div>
            </div>
          </div>
          <div className={styles.profileMenu__button}>
            {role == '_JOBSEEKER_' ? <Link href="/">Создать резюме</Link> : <Link href="/">Опубликовать вакансию</Link>}
          </div>
          <nav className={styles.profileMenu__main}>
            {role == '_JOBSEEKER_' ? (
              <ul className={styles.profileMenu__list}>
                <li>
                  <Link href="/">Моё резюме</Link>
                </li>
                <li>
                  <Link href="/">Мои отклики</Link>
                </li>
                <li>
                  <Link href="/">Мои отзывы</Link>
                </li>
                <li>
                  <Link href="/">Избранные вакансии</Link>
                </li>
              </ul>
            ) : (
              <ul className={styles.profileMenu__list}>
                <li>
                  <Link href="/">Информация о компании</Link>
                </li>
                <li>
                  <Link href="/">Мои вакансии</Link>
                </li>
                <li>
                  <Link href="/">Мои отзывы</Link>
                </li>
                <li>
                  <Link href="/">Страница компании</Link>
                </li>
              </ul>
            )}
          </nav>
          <div onClick={() => logout()} className={styles.profileMenu__logout}>
            <span>Выйти</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileMenu
