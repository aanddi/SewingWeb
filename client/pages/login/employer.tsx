import { NextPage } from 'next'
import Head from 'next/head'

import Employer from '@/components/screens/Auth/Login/Employer/Employer'

interface Props {}

const CompaniesPage: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>Вход в личный кабинет</title>
      </Head>
      <Employer />
    </>
  )
}

export default CompaniesPage