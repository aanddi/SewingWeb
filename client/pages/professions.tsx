import { NextPage } from 'next'

import Professions from '@/components/screens/Site/Professions/Professions'
import Meta from '@/components/ui/Meta/Meta'

interface Props {}

const ProfessionsPage: NextPage<Props> = props => {
  return (
    <Meta title="Профессии">
      <Professions />
    </Meta>
  )
}

export default ProfessionsPage
