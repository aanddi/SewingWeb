import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Rules from '@/components/screens/Site/Info/Rules'

const RulesPage: NextPage = () => {
  return (
    <Meta title="Правила сайта">
      <Rules />
    </Meta>
  )
}

export default RulesPage
