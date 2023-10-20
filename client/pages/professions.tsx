import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Professions from '@/components/screens/Site/Professions/Professions'

interface Props {}

const ProfessionsPage: NextPage<Props> = props => {
  return (
    <Meta title="Профессии">
      <Professions />
    </Meta>
  )
}

export default ProfessionsPage
