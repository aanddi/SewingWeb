import { checkAuth, login, logout, registration } from './user.actions'
import { createSlice } from '@reduxjs/toolkit'

import { IInitialState } from './user.interface'

import { useAuth } from '@/core/hooks/useAuth'
import { getLocalStorage } from '@/core/utils/localstorage.config'

// начальное значение состояния состояние нашего slice
// забираем ил localstorage инфу
const initialState: IInitialState = {
  user: getLocalStorage('user'),
  isLoading: false
}

// создаем slice
// ?
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registration.pending, state => {
        state.isLoading = true
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(registration.rejected, state => {
        state.isLoading = false
      })
      .addCase(login.pending, state => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(login.rejected, state => {
        state.isLoading = false
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false
        state.user = null
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.user = payload.user
      })
  }
})