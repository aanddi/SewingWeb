import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './ProfileMenu.module.scss'

import { useActions } from '@/core/hooks/useActions'
import { useAuth } from '@/core/hooks/useAuth'
import { useCheckRole } from '@/core/hooks/useCheckRole'
import { useOutside } from '@/core/hooks/useOutside'
import { EmployerService } from '@/core/services/employer/employer.service'

import { menuEmployer, menuJobseeker } from './menu-data'

import { BiUpload } from 'react-icons/bi'
import { IoAddCircleOutline, IoExitOutline } from 'react-icons/io5'

import photoUser from 'public/Profiles/photoUser.svg'

const ProfileMenu: FC = () => {
  const { user } = useAuth()
  const role = useCheckRole()
  const { logout } = useActions()
  const { isShow, setIsShow, ref } = useOutside(false)

  const { data: employerId } = useQuery({
    queryKey: ['employerId', user?.id],
    queryFn: async () => {
      const response = await EmployerService.getEmployerByUserId(user?.id)
      return response.data.id
    },
    enabled: !!user && role == '_JOBSEEKER_'
  })

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
            <Link href="/profile/my" className={styles.profileMenu__name}>
              <span>
                {user?.name} {user?.surname}
              </span>
              <div className={styles.profileMenu__tools}>Настроить аккаунт</div>
            </Link>
          </div>
          <div className={styles.profileMenu__buttons}>
            {role == '_JOBSEEKER_' ? (
              <Link href="/profile/my-resume" className={styles.profileMenu__button}>
                <IoAddCircleOutline size={20} />
                <span>Создать резюме</span>
              </Link>
            ) : (
              <Link className={styles.profileMenu__button} href="/profile/add-vacancy">
                <BiUpload size={20} />
                <span>Опубликовать вакансию</span>
              </Link>
            )}
          </div>
          <nav className={styles.profileMenu__main}>
            {role == '_JOBSEEKER_' ? (
              <ul className={styles.profileMenu__list}>
                {menuJobseeker.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <ul className={styles.profileMenu__list}>
                <li>
                  <Link href={`/company/${employerId}`}>Страница предприятия</Link>
                </li>
                {menuEmployer.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </nav>
          <div onClick={() => logout()} className={styles.profileMenu__logout}>
            <IoExitOutline size={19} style={{ color: '#FD7791' }} />
            <span>Выйти</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileMenu
