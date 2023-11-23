import Meta from '@/components/Meta/Meta'
import Reviews from '@/components/screens/Profile/JobSeeker/Reviews/Reviews'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'

const ReviewsPage: NextPageAuth = () => {
  return (
    <Meta title="Оставленные отзывы">
      <Reviews />
    </Meta>
  )
}

ReviewsPage.isOnlyJobSeeker = true

export default ReviewsPage
