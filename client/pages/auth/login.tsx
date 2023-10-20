import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Applicant from '@/components/screens/Auth/Login/Login'

interface Props {}

const LoginApplicantPage: NextPage<Props> = props => {
  return (
    <Meta title="Вход">
      <Applicant />
    </Meta>
  )
}

export default LoginApplicantPage
