import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Register from '@/components/screens/Auth/Register/Register'

interface Props {}

const RegisterPage: NextPage<Props> = props => {
  return (
    <Meta title="Регистрация">
      <Register />
    </Meta>
  )
}

export default RegisterPage
