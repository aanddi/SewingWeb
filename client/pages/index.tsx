import { NextPage } from 'next'

import Home from '@/components/screens/Site/Home/Home'
import Meta from '@/components/ui/Meta/Meta'

interface Props {}

const HomePage: NextPage<Props> = props => {
  return (
    <Meta title="Найти работу">
      <Home />
    </Meta>
  )
}

export default HomePage
