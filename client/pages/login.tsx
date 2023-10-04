import { NextPage } from 'next'
import Head from 'next/head'

import Login from '@/components/screens/Auth/Login/Login'

interface Props {}

const HomePage: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>SewingWeb - найди работу легпрома у нас!</title>
      </Head>
      <Login />
    </>
  )
}

export default HomePage
