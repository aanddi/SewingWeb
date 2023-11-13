import Meta from '@/components/Meta/Meta'
import AddVacancy from '@/components/screens/Profile/Employer/AddVacancy/AddVacancy'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'

const AddVacancyPage: NextPageAuth = () => {
  return (
    <Meta title="Мое предприятие">
      <AddVacancy />
    </Meta>
  )
}

AddVacancyPage.isOnlyEmployer = true

export default AddVacancyPage
