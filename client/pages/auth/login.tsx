import { NextPage } from 'next'

import Applicant from '@/components/screens/Auth/Login/Login'
import Meta from '@/components/ui/Meta/Meta'

interface Props {}

const LoginApplicantPage: NextPage<Props> = props => {
  return (
    <Meta title="Вход">
      <Applicant />
    </Meta>
  )
}

export default LoginApplicantPage
