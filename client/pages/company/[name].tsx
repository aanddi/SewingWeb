import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import AboutCompanies from '@/components/screens/Site/AboutCompanies/AboutCompanies'

interface Props {}

const AboutCompaniesPage: NextPage<Props> = props => {
  return (
    <Meta title="Предприятие">
      <AboutCompanies />
    </Meta>
  )
}

export default AboutCompaniesPage
