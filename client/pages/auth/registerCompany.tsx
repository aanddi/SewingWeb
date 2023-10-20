import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import RegisterCompany from '@/components/screens/Auth/RegisterCompany/RegisterCompany'

interface Props {}

const RegisterCompanyPage: NextPage<Props> = props => {
  return (
    <Meta title="Регистрация">
      <RegisterCompany />
    </Meta>
  )
}

export default RegisterCompanyPage
