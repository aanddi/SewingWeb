import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Professions from '@/components/screens/Site/Professions/Professions'

const ProfessionsPage: NextPage = () => {
  return (
    <Meta title="Профессии">
      <Professions />
    </Meta>
  )
}

// NextPageAuth ProfessionsPage.isOnlyJobSeeker = true

export default ProfessionsPage
