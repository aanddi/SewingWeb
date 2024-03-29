// обвертка всего сайта, для проверки на роли
// отключаем страницы авторизации от серверного рендеринга
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/core/hooks/useActions'
import { useAuth } from '@/core/hooks/useAuth'
import { getAccessToken, getRefreshToken } from '@/core/services/auth/auth.helper'

import { TypeComponentAuthFields } from './auth-page.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ Component: { isOnlyEmployer, isOnlyJobSeeker }, children }) => {
  const { user } = useAuth()
  const { checkAuth, logout } = useActions()
  const { pathname } = useRouter()

  // получаем токен и если он валидный получаем новую пару
  useEffect(() => {
    const accessToken = getAccessToken()
    if (accessToken) checkAuth()
  }, [])

  // получаем рефреш токен и если он невалидный и еще есть авторизация, то выходим
  useEffect(() => {
    const refreshToken = getRefreshToken()
    if (!refreshToken && user) logout()
  }, [pathname])

  return isOnlyEmployer || isOnlyJobSeeker ? (
    <DynamicCheckRole Component={{ isOnlyEmployer, isOnlyJobSeeker }} children={children} />
  ) : (
    <>{children}</>
  )
}

export default AuthProvider
