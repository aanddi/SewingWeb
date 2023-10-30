import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Profile from '@/components/screens/Profile/JobSeeker/Profile/Profile'

const ResponsesPage: NextPage = () => {
  return (
    <Meta title="Мой аккаунт">
      <Profile />
    </Meta>
  )
}

export default ResponsesPage
