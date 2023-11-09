import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/core/hooks/useAuth'

import { TypeComponentAuthFields } from './auth-page.types'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  Component: { isOnlyEmployer, isOnlyJobSeeker },
  children
}) => {
  // проверка на залогиненного пользователя с помощью кастомного хука
  const { user } = useAuth()

  const router = useRouter()

  // если авторизация есть и странице нужена приватность то возвращаем страницу
  if ((user && isOnlyEmployer) || (user && isOnlyJobSeeker)) return <>{children}</>

  // если юзер не залогинен его перекидывает на страницу логина
  router.pathname !== '/auth' && router.replace('/auth/login')
  return null
}

export default CheckRole
