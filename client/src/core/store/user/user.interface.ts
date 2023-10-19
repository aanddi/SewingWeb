import { IUser } from "@/core/types/user.interface"

export interface IUserState {
  phone: string
  roleId: number
  name: string
  surname: string
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}

export interface IInitialState {
  user: IUserState | null
  isLoading: boolean
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
  roleId: string
}

export interface IAuthResponse extends ITokens {
  user: IUser 
}