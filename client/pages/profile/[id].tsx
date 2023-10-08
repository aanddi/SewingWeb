import { NextPage } from 'next'
import Head from 'next/head'


import ProfilesLauout from '@/components/layouts/Profiles/ProfilesLayout'
interface Props {}

const CompaniesPage: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>SewingWeb - информация работодателям</title>
      </Head>
      <ProfilesLauout />
    </>
  )
}

export default CompaniesPage
