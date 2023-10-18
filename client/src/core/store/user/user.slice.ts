import { IInitialState } from "./user.interface";
import { checkAuth, login, logout, register } from "./user.actions";
import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "@/core/utils/localstorage.config";
import { useAuth } from "@/core/hooks/useAuth";

// начальное значение состояния состояние нашего slice
// забираем ил localstorage инфу
const initialState: IInitialState = {
  user: getLocalStorage('user'),
  isLoading: false
}

// создаем slice
// ?
export const userSlice = createSlice ({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(register.pending, state => {
      state.isLoading = true
    })
    .addCase(register.fulfilled, (state, {payload}) => {
      state.isLoading = false
      state.user = payload.user
    })
    .addCase(register.rejected, state => {
      state.isLoading = false
    })
    .addCase(login.pending, state => {
      state.isLoading = true
    })
    .addCase(login.fulfilled, (state, {payload}) => {
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
    .addCase(checkAuth.fulfilled, (state, {payload}) => {
      state.user = payload.user
    })
  }
})