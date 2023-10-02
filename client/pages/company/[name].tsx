import { NextPage } from 'next'
import Head from 'next/head'

import AboutCompanies from '@/components/screens/Site/AboutCompanies/AboutCompanies'

interface Props {}

const AboutCompaniesPage: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>Компания</title>
      </Head>
      <AboutCompanies />
    </>
  )
}

export default AboutCompaniesPage
