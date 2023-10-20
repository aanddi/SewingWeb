import { errorCatch } from '@/api/api.helper'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { IAuthResponse, ILogin, IRegister } from './user.interface'

import { removeFromStorage } from '@/core/services/auth/auth.helper'
import { AuthService } from '@/core/services/auth/auth.service'

// логин
// джейнерики: IAuthResponse - это ответ на запрос (наш юзер)
// ILogin - т.е data - это те поля или ифнформация, которую мы отправляем
// делаем запрос с помощью AuthService и возвращаем ответ или ошибку
export const login = createAsyncThunk<IAuthResponse, ILogin>('auth/login', async (data, thunkAPI) => {
  try {
    const response = await AuthService.login(data)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

// Регистрация
// та же логика что и логин
export const registration = createAsyncThunk<IAuthResponse, IRegister>('auth/register', async (data, thunkAPI) => {
  try {
    const response = await AuthService.registration(data)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

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
