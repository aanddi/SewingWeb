import { errorCatch, getContentType } from './api.helper'
import { getAccessToken, removeFromStorage } from '@/core/services/auth/auth.helper'
import { AuthService } from '@/core/services/auth/auth.service'
import axios from 'axios'

// создание экземпляра axios и настраиваем
// будет использоваться для каждого запроса instanse.get() вместо axios.get()
export const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: getContentType()
})

// метод перехватчик, который будет вызван перед отправкой каждого запроса
// получаем токен и проверяем, если токен есть и заголовок хедер тоже,
// то добавляем заголовок Authorization со значением токена доступа
instance.interceptors.request.use(config => {
  const accessToken = getAccessToken()

  if (config && config.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`

  return config
})

// метод перехватчик, который будет вызван перед отправкой каждого запроса
// проверка на ошибки и выдача нового токена
instance.interceptors.request.use(
  config => config,
  async error => {
    const originalRequest = error.config
    if (
      error?.response?.status === 401 &&
      (errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        // новый токен
        await AuthService.getNewTokens()
        return instance.request(originalRequest)
      } catch (error) {
        if (errorCatch(error) === 'jwt expired')
          // удаление
          removeFromStorage()
      }
    }
    throw error
  }
)
