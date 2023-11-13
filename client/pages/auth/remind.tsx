import Meta from '@/components/Meta/Meta'
import Remind from '@/components/screens/Auth/Remind/Remind'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'

const RemindPage: NextPageAuth = () => {
  return (
    <Meta title="Напомнить пароль">
      <Remind />
    </Meta>
  )
}

RemindPage.isOnlyEmployer = true
RemindPage.isOnlyJobSeeker = true

export default RemindPage
