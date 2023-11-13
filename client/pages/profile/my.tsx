import Meta from '@/components/Meta/Meta'
import Profile from '@/components/screens/Profile/JobSeeker/Profile/Profile'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'

const ProfilePage: NextPageAuth = () => {
  return (
    <Meta title="Мой аккаунт">
      <Profile />
    </Meta>
  )
}

ProfilePage.isOnlyEmployer = true
ProfilePage.isOnlyJobSeeker = true

export default ProfilePage
