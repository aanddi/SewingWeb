import { NextPage } from 'next'

import Employer from '@/components/screens/Site/Employer/Employer'
import Meta from '@/components/ui/Meta/Meta'

interface Props {}

const EmployerPage: NextPage<Props> = props => {
  return (
    <Meta title="Работодателю">
      <Employer />
    </Meta>
  )
}

export default EmployerPage
