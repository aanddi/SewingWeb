import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import '@/assets/styles/globals.scss'

import ProgressBar from '@/components/elements/Layout/ProgressBar/ProgressBar'

import AuthProvider from '@/core/providers/aut-provider/AuthProvider'
import { TypeComponentAuthFields } from '@/core/providers/aut-provider/auth-page.types'
import { persistor, store } from '@/core/store/store'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export default function App({ Component, pageProps }: AppProps & TypeComponentAuthFields) {
  return (
    <>
      <ProgressBar />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AuthProvider
              Component={{
                isOnlyEmployer: Component.isOnlyEmployer,
                isOnlyJobSeeker: Component.isOnlyJobSeeker
              }}
            >
              <Component {...pageProps} />
            </AuthProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </>
  )
}

// AuthProvider - для аутентификации
// Provider - для подключение глобального store
// PersistGate для сохранения состояния приложения при перезагрузке страницы
// QueryClientProvider для управления состояниями, связанными с асинхронными запросами данных
