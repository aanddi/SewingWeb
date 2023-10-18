import { NextPage } from 'next'
import Head from 'next/head'

import Employer from '@/components/screens/Auth/Login/Employer/Employer'

interface Props {}

const LoginEmployerPage: NextPage<Props> = props => {
  return (
    <>
      <Employer />
    </>
  )
}

export default LoginEmployerPage
