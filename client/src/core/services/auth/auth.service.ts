import axios from 'axios'
import Cookies from 'js-cookie'

import { IAuthResponse, ILogin, IRegister, IUpdateUser } from '@/core/store/user/user.interface'

import { persistor } from '@/core/store/store'

import { removeFromStorage, saveToStorage } from './auth.helper'
import { getContentType } from '@/api/api.helper'
import { instance } from '@/api/api.interceptor'

// общий обьект сервиса
export const AuthService = {
  // метод для входа в систему
  async login(data: ILogin) {
    const response = await instance<IAuthResponse>({
      url: `/auth/login`,
      method: 'POST',
      data
    })
    if (response.data.accessToken) saveToStorage(response.data)

    return response.data
  },

  // метод для регистрации в системе
  async registration(data: IRegister) {
    const response = await instance<IAuthResponse>({
      url: `auth/register`,
      method: 'POST',
      data
    })

    return response.data
  },

  async update(id: number | undefined, data: IUpdateUser) {
    const response = await instance({
      url: `/auth/${id}`,
      method: 'PUT',
      data
    })
    if (response.data.accessToken) saveToStorage(response.data)
    return response.data
  },

  // метод для ? обновления токена ?
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')

    const response = await axios.post<string, { data: IAuthResponse }>(
      process.env.SERVER_URL + '/auth/login/access-token',
      { refreshToken },
      {
        headers: getContentType()
      }
    )

    if (response.data.accessToken) saveToStorage(response.data)

    return response.data
  }
}
