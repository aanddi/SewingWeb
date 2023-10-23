// хук который определяет авторизирован ли пользователь
// данные берутся из state с помощью хука useTypedSelector
import { useTypedSelector } from './useTypedSelector'

export const useAuth = () =>
  useTypedSelector(state => {
    return state?.user
  })
