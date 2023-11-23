import Meta from '@/components/Meta/Meta'
import Resume from '@/components/screens/Profile/JobSeeker/Resume/Resume'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'

const ResumePage: NextPageAuth = () => {
  return (
    <Meta title="Мое резюме">
      <Resume />
    </Meta>
  )
}

ResumePage.isOnlyJobSeeker = true

export default ResumePage
