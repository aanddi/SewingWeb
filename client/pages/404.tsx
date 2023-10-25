import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import NotFound from '@/components/screens/NotFound/NotFound'

const NotFoundPage: NextPage = () => {
  return (
    <Meta title="404">
      <NotFound />
    </Meta>
  )
}

export default NotFoundPage
