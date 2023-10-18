import { NextPage } from 'next'
import Head from 'next/head'

import Applicant from '@/components/screens/Auth/Registration/Applicant/Applicant'

interface Props {}

const RegistrApplicantPage: NextPage<Props> = props => {
  return (
    <>
      <Applicant />
    </>
  )
}

export default RegistrApplicantPage
