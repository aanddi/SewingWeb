import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import AddReviews from '@/components/screens/Site/AddReviews/AddReviews'

import { IEmployerHeader } from '@/core/services/employer/employer.interface'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'
import { EmployerService } from '@/core/services/employer/employer.service'

interface AboutEmployerProps {
  header: IEmployerHeader
}

const AddReviewsPage: NextPageAuth<AboutEmployerProps> = ({ header }) => {
  return (
    <Meta title={'Добавить отзыв'} desc={'Добавить отзыв предприятию. Помогите будущим соискателем определится с предприятием мечты'}>
      <AddReviews header={header} />
    </Meta>
  )
}

AddReviewsPage.isOnlyJobSeeker = true

export default AddReviewsPage

export const getServerSideProps: GetServerSideProps<AboutEmployerProps> = async context => {
  const id = context.params?.id as string
  try {
    const header = await EmployerService.getHeader(id)

    if (header.data) {
      return { props: { header: header.data } }
    } else {
      return { notFound: true }
    }
  } catch (error) {
    return { notFound: true }
  }
}
