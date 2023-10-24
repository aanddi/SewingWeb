import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Login from '@/components/screens/Auth/Login/Login'

const LoginPage: NextPage = () => {
  return (
    <Meta title="Вход">
      <Login />
    </Meta>
  )
}

export default LoginPage
