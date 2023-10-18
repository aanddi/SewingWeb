import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  FLUSH,
  PAUSE,
  PERSIST, persistReducer,
  persistStore, PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import { userSlice } from "./user/user.slice";

// совмещение всех редьюсеров
const rootReducer = combineReducers({
  user: userSlice.reducer
})

// то, что будет сохранять в localstorage
const persistConfig =  {
  key: 'sewingweb',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store)
export type TypeRootState = ReturnType<typeof rootReducer>