import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from './useAuth'

export const useAuthRedirect = (path: string) => {
  const { user } = useAuth()
  const { replace } = useRouter()

  useEffect(() => {
    if (user) replace(path)
  }, [user])
}
