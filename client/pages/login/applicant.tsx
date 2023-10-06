import { NextPage } from 'next'
import Head from 'next/head'

import Applicant from '@/components/screens/Auth/Login/Applicant/Applicant'

interface Props {}

const LoginApplicantPage: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>Вход в личный кабинет</title>
      </Head>
      <Applicant />
    </>
  )
}

export default LoginApplicantPage
