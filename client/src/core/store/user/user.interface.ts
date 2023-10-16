import { IUser } from "@/core/types/user.interface"

export interface IUserState {
  phone: string
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
  phone: string
  password: string
  role: string
}

export interface IAuthResponse extends ITokens {
  user: IUser 
}
