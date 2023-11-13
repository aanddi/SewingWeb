// import { useRouter } from 'next/router'
// import { useEffect } from 'react'

// import { useAuth } from '@/core/hooks/useAuth'

// // Компонент для защиты роутов и проверки доступа к ролям
// const ProtectedRoute = ({ allowedRoles, children }) => {
//   const router = useRouter()
//   const { user } = useAuth()

//   useEffect(() => {
//     // Проверка доступа к роли
//     if (!allowedRoles.includes(user?.id)) {
//       // Если доступ запрещен, перенаправляем пользователя на страницу, которая требует авторизации
//       router.push('/login')
//     }
//   }, [])

//   // Возвращаем дочерние компоненты, если у пользователя есть доступ
//   return userRole && allowedRoles.includes(userRole) ? children : null
// }

// export default ProtectedRoute
