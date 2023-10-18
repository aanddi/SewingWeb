import { NextPage } from 'next'
import Head from 'next/head'

import Applicant from '@/components/screens/Auth/Login/Applicant/Applicant'

interface Props {}

const LoginApplicantPage: NextPage<Props> = props => {
  return (
    <>
      <Applicant />
    </>
  )
}

export default LoginApplicantPage
