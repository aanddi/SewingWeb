import { IAuthResponse, ITokens } from '@/core/store/user/user.interface'
import Cookies from 'js-cookie'

/*======= Работа с куки =======*/

// Получение токена из куки
export const getAccessToken = () => {
  const accessToken = Cookies.get('accessToken')
  return accessToken || null
}

export const getRefreshToken = () => {
  const refreshToken = Cookies.get('refreshToken')
  return refreshToken || null
}

// получение юзера из localStorage
export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user') || '{}')
}

// Запись токенов
export const saveTokensStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken)
  Cookies.set('refreshToken', data.refreshToken)
}

// Удаление токенов
export const removeFromStorage = () => {
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
  localStorage.removeItem('user')
}

// Запись в общий стор (токена и юзера)
export const saveToStorage = (data: IAuthResponse) => {
  saveToStorage(data)
  localStorage.setItem('user', JSON.stringify(data.user))
}