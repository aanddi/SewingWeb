import { NextPage } from 'next'
import Head from 'next/head'

import Professions from '@/components/screens/Site/Professions/Professions'

interface Props {}

const ProfessionsPage: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>SewingWeb - профессии на сайте</title>
      </Head>
      <Professions />
    </>
  )
}

export default ProfessionsPage
