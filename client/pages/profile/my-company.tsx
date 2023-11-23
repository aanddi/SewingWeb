import Meta from '@/components/Meta/Meta'
import MyCompany from '@/components/screens/Profile/Employer/MyCompany/MyCompany'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'

const MyCompanyPage: NextPageAuth = () => {
  return (
    <Meta title="Мое предприятие">
      <MyCompany />
    </Meta>
  )
}

MyCompanyPage.isOnlyEmployer = true

export default MyCompanyPage
