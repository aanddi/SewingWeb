import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/core/hooks/useAuth'

import { TypeComponentAuthFields } from './auth-page.types'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ Component: { isOnlyEmployer, isOnlyJobSeeker }, children }) => {
  // проверка на залогиненного пользователя с помощью кастомного хука
  const { user } = useAuth()

  const router = useRouter()

  // авторизованный иходр странице нужен нужный тип пользователя юто возвращаем страницу
  if (user) {
    if ((isOnlyEmployer && user.roleId === 2) || (isOnlyJobSeeker && user.roleId === 1)) {
      return <>{children}</>
    } else {
      router.replace('/not-found')
      return null
    }
  }

  // если юзер не залогиивается на страницу лого пользователь не авторизован, редирект на логин
  if (router.pathname !== '/auth') {
    router.replace('/auth/login')
    return null
  }

  // если юзер уже на странице "/auth Оставить пользователя на этой странице
  return null
}

export default CheckRole
