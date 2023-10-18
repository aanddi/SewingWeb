import { NextPage } from 'next'

import Reviews from '@/components/screens/Site/Reviews/Reviews'
import Meta from '@/components/ui/Meta/Meta'

interface Props {}

const RevieswPage: NextPage<Props> = props => {
  return (
    <Meta title='Отзывы'>
      <Reviews />
    </Meta>
  )
}

export default RevieswPage
