import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import AboutUs from '@/components/screens/Site/Info/AboutUs'

const RulesPage: NextPage = () => {
  return (
    <Meta title="О нас">
      <AboutUs />
    </Meta>
  )
}

export default RulesPage
