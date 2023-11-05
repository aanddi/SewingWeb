import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import RegisterCompany from '@/components/screens/Auth/RegisterCompany/RegisterCompany'

const RegisterCompanyPage: NextPage = () => {
  return (
    <Meta title="Регистрация">
      <RegisterCompany />
    </Meta>
  )
}

// import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'
// NextPageAuth
// RegisterCompanyPage.isOnlyEmployer = true
// RegisterCompanyPage.isOnlyJobSeeker = false

export default RegisterCompanyPage
