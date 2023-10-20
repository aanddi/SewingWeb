import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Reviews from '@/components/screens/Site/Reviews/Reviews'

interface Props {}

const RevieswPage: NextPage<Props> = props => {
  return (
    <Meta title="Отзывы">
      <Reviews />
    </Meta>
  )
}

export default RevieswPage
