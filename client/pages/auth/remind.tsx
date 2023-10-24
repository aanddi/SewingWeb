import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Remind from '@/components/screens/Auth/Remind/Remind'

const RemindPage: NextPage = () => {
  return (
    <Meta title="Напомнить пароль">
      <Remind />
    </Meta>
  )
}

export default RemindPage
