import { NextPage } from 'next'
import Head from 'next/head'

import Companies from '@/components/screens/Site/Companies/Companies'

interface Props {}

const CompaniesPage: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>SewingWeb - информация работодателям</title>
      </Head>
      <Companies />
    </>
  )
}

export default CompaniesPage
