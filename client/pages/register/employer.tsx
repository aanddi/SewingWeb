import { NextPage } from 'next'
import Head from 'next/head'

import Employer from '@/components/screens/Auth/Registration/Employer/Employer'

interface Props {}

const RegistrEmployerPage: NextPage<Props> = props => {
  return (
    <>
      <Employer />
    </>
  )
}

export default RegistrEmployerPage
