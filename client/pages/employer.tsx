import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Employer from '@/components/screens/Site/Employer/Employer'

interface Props {}

const EmployerPage: NextPage<Props> = props => {
  return (
    <Meta title="Работодателю">
      <Employer />
    </Meta>
  )
}

export default EmployerPage
