import { NextPage } from 'next'
import Head from 'next/head'

import Employer from '@/components/screens/Site/Employer/Employer'

interface Props {}

const EmployerPage: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>SewingWeb - информация работодателям</title>
      </Head>
      <Employer />
    </>
  )
}

export default EmployerPage
