import Meta from '@/components/Meta/Meta'
import ResponsesList from '@/components/screens/Profile/Employer/ResponsesList/ResponsesList'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'

const MyVacancyResponses: NextPageAuth = () => {
  return (
    <Meta title="Отклики на вакансию">
      <ResponsesList />
    </Meta>
  )
}

MyVacancyResponses.isOnlyEmployer = true

export default MyVacancyResponses
