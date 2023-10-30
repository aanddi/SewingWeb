import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Responses from '@/components/screens/Profile/JobSeeker/Responses/Responses'

const ResponsesPage: NextPage = () => {
  return (
    <Meta title="Мои отклики">
      <Responses />
    </Meta>
  )
}

export default ResponsesPage
