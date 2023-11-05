import { SerializedError } from '@reduxjs/toolkit'

import { IUser } from '@/core/types/user.interface'

// возвращаемые поля в localstorage
export interface IUserState {
  id: number
  phone: string
  email?: string
  name: string
  patronymic?: string
  roleId: number
  surname: string
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}

export interface IInitialState {
  user: IUserState | null
  isLoading: boolean
  error: string | undefined
}

// входящие данные для входа в систему
export interface ILogin {
  phone: string
  password: string
}

// входящие данные для регистрации в системе
export interface IRegister {
  name: string
  surname: string
  patronymic?: string
  phone: string
  password: string
  email?: string
  roleId: number
}

export interface IUpdateUser {
  name?: string
  surname?: string
  patronymic?: string
  phone?: string
  email?: string
}

export interface IAuthResponse extends ITokens {
  user: IUser
  error: string | undefined
}
