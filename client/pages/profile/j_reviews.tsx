import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Reviews from '@/components/screens/Profile/JobSeeker/Reviews/Reviews'

const ReviewsPage: NextPage = () => {
  return (
    <Meta title="Оставленные отзывы">
      <Reviews />
    </Meta>
  )
}

export default ReviewsPage
