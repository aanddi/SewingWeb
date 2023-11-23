import Meta from '@/components/Meta/Meta'
import Responses from '@/components/screens/Profile/JobSeeker/Responses/Responses'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'

const ResponsesPage: NextPageAuth = () => {
  return (
    <Meta title="Мои отклики">
      <Responses />
    </Meta>
  )
}

ResponsesPage.isOnlyJobSeeker = true

export default ResponsesPage
