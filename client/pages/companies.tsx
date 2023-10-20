import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Companies from '@/components/screens/Site/Companies/Companies'

interface Props {}

const CompaniesPage: NextPage<Props> = props => {
  return (
    <Meta title="Предприятия">
      <Companies />
    </Meta>
  )
}

export default CompaniesPage
