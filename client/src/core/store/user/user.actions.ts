import { createAsyncThunk } from '@reduxjs/toolkit'

import { IAuthResponse, ILogin, IRegister } from './user.interface'

import { removeFromStorage, saveToStorage } from '@/core/services/auth/auth.helper'
import { AuthService } from '@/core/services/auth/auth.service'

import { errorCatch } from '@/api/api.helper'

// логин
// джейнерики: IAuthResponse - это ответ на запрос (наш юзер)
// ILogin - т.е data - это те поля или ифнформация, которую мы отправляем
// делаем запрос с помощью AuthService и возвращаем ответ или ошибку
export const login = createAsyncThunk<IAuthResponse, ILogin, { rejectValue: string }>(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(data)
      return response
    } catch (error: any) {
      return rejectWithValue(error.response.data.message)
    }
  }
)

// Регистрация
// та же логика что и логин
export const registration = createAsyncThunk<IAuthResponse, IRegister, { rejectValue: string }>(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthService.registration(data)
      if (response.accessToken) saveToStorage(response)
      return response
    } catch (error: any) {
      return rejectWithValue(error.response.data.message)
    }
  }
)

// фейковый запрос на выход из аккаунта
// забираем токены, если нет токенов(нет авторизации) то выходим
export const logout = createAsyncThunk('auth/logout', async () => {
  removeFromStorage()
})

// проверка авторизации
export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkApi) => {
  try {
    const response = await AuthService.getNewTokens()
    return response
  } catch (error) {
    if (errorCatch(error) == 'jwt expired') {
      thunkApi.dispatch(logout())
    }
    return thunkApi.rejectWithValue(error)
  }
})
