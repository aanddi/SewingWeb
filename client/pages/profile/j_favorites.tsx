import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Favorites from '@/components/screens/Profile/JobSeeker/Favorites/Favorites'
import Reviews from '@/components/screens/Profile/JobSeeker/Reviews/Reviews'

const FavoritesPage: NextPage = () => {
  return (
    <Meta title="Избранные вакансии">
      <Favorites />
    </Meta>
  )
}

export default FavoritesPage
