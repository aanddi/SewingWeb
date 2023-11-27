import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Employer from '@/components/screens/Site/Employer/Employer'

const EmployerPage: NextPage = () => {
  return (
    <Meta title="Работодателю">
      <Employer />
    </Meta>
  )
}

export default EmployerPage
