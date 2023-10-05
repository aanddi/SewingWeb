import { NextPage } from 'next'
import Head from 'next/head'

import Reviews from '@/components/screens/Site/Reviews/Reviews'

interface Props {}

const RevieswPage: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>Компания</title>
      </Head>
      <Reviews />
    </>
  )
}

export default RevieswPage
