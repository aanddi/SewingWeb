import { createSlice } from '@reduxjs/toolkit'

import { IInitialState } from './user.interface'

import { getLocalStorage } from '@/core/utils/localstorage.config'

import { checkAuth, login, logout, registration } from './user.actions'

// начальное значение состояния состояние нашего slice
// забираем ил localstorage инфу
const initialState: IInitialState = {
  user: getLocalStorage('user'),
  isLoading: false,
  error: undefined
}

// создаем slice
// ?
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      //======= REGISTRATION ================================================

      // в процессе
      .addCase(registration.pending, state => {
        state.isLoading = true
        state.error = undefined
      })

      // исполнено
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
        state.error = undefined
      })

      // отклонено
      .addCase(registration.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })

      //======= LOGIN ================================================

      // в процессе
      .addCase(login.pending, state => {
        state.isLoading = true
        state.error = undefined
      })

      // исполнено
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
        state.error = undefined
      })

      // отклонено
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

      //======= LOGOUT ================================================

      .addCase(logout.fulfilled, state => {
        state.isLoading = false
        state.user = null
        state.error = undefined
      })

      //======= CHECKAUTH ================================================

      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.error = undefined
      })
  }
})
