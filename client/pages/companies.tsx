import { NextPage } from 'next'

import Companies from '@/components/screens/Site/Companies/Companies'
import Meta from '@/components/ui/Meta/Meta'

interface Props {}

const CompaniesPage: NextPage<Props> = props => {
  return (
    <Meta title='Предприятия'>
      <Companies />
    </Meta>
  )
}

export default CompaniesPage
