import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Reviews from '@/components/screens/Site/CompanyReviews/CompanyReviews'

import { IEmployerHeader } from '@/core/services/employer/employer.interface'
import { IReviewsList } from '@/core/services/reviews/reviews.interface'
import { IReviews } from '@/core/types/reviews.interface'

import { EmployerService } from '@/core/services/employer/employer.service'
import { ReviewsService } from '@/core/services/reviews/reviews.service'

interface AboutEmployerProps {
  header: IEmployerHeader
  reviews: IReviewsList
}

const RevieswPage: NextPage<AboutEmployerProps> = ({ header, reviews }) => {
  return (
    <Meta
      title={header.companyName}
      desc={`Отзывы компании ${header.companyName}. Оценка ${reviews.averageRating} на основе ${reviews.countReviews} отзывов`}
    >
      <Reviews header={header} reviews={reviews} />
    </Meta>
  )
}

export const getServerSideProps: GetServerSideProps<AboutEmployerProps> = async context => {
  const id = context.params?.id as string
  try {
    const header = await EmployerService.getHeader(id)
    const reviews = await ReviewsService.getReviewsList(+id)
    if (header && reviews) {
      return { props: { header: header.data, reviews: reviews.data } }
    } else {
      return { notFound: true }
    }
  } catch (error) {
    return { notFound: true }
  }
}

export default RevieswPage
