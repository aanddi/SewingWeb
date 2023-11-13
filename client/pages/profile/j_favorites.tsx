import Meta from '@/components/Meta/Meta'
import Favorites from '@/components/screens/Profile/JobSeeker/Favorites/Favorites'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'

const FavoritesPage: NextPageAuth = () => {
  return (
    <Meta title="Избранные вакансии">
      <Favorites />
    </Meta>
  )
}

FavoritesPage.isOnlyJobSeeker = true

export default FavoritesPage
