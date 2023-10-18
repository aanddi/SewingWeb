import { NextPage } from 'next'

import AboutCompanies from '@/components/screens/Site/AboutCompanies/AboutCompanies'
import Meta from '@/components/ui/Meta/Meta'

interface Props {}

const AboutCompaniesPage: NextPage<Props> = props => {
  return (
    <Meta title="Предприятие">
      <AboutCompanies />
    </Meta>
  )
}

export default AboutCompaniesPage
