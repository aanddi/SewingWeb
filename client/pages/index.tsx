import { NextPage } from 'next'
import Head from 'next/head'

import Home from '@/components/screens/Site/Home/Home'

interface Props {}

const HomePage: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>SewingWeb - найди работу легпрома у нас!</title>
      </Head>
      <Home />
    </>
  )
}

export default HomePage
