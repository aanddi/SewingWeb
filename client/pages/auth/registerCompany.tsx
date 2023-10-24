import { NextPage } from 'next'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'

import Meta from '@/components/Meta/Meta'
import RegisterCompany from '@/components/screens/Auth/RegisterCompany/RegisterCompany'

const RegisterCompanyPage: NextPageAuth = () => {
  return (
    <Meta title="Регистрация">
      <RegisterCompany />
    </Meta>
  )
}

RegisterCompanyPage.isOnlyEmployer = true
RegisterCompanyPage.isOnlyJobSeeker = false

export default RegisterCompanyPage
