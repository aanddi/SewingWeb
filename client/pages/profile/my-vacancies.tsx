import Meta from '@/components/Meta/Meta'
import MyVacancies from '@/components/screens/Profile/Employer/MyVacancies/MyVacancies'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'

const MyVacanciesPage: NextPageAuth = () => {
  return (
    <Meta title="Мои вакансии">
      <MyVacancies />
    </Meta>
  )
}

MyVacanciesPage.isOnlyEmployer = true

export default MyVacanciesPage
