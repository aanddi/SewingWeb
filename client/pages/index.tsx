import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Home from '@/components/screens/Site/Home/Home'

interface Props {}

const HomePage: NextPage<Props> = props => {
  return (
    <Meta title="Найти работу">
      <Home />
    </Meta>
  )
}

export default HomePage
