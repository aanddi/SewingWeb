import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import AboutCompanies from '@/components/screens/Site/AboutCompanies/AboutCompanies'

import { IEmployer } from '@/core/types/employer.interface'

import { employerService } from '@/core/services/employer/employer.service'

interface AboutEmployerProps {
  company: IEmployer | null
}

const AboutCompaniesPage: NextPage<AboutEmployerProps> = ({ company }) => {
  return (
    <Meta title="Предприятие">
      <AboutCompanies company={company} />
    </Meta>
  )
}

export const getServerSideProps: GetServerSideProps<AboutEmployerProps> = async context => {
  const id = context.params?.id as string
  try {
    const response = await employerService.getEmployerById(id)

    if (response.data !== undefined) {
      return { props: { company: response.data } }
    } else {
      return { notFound: true }
    }
  } catch (error) {
    return { notFound: true }
  }
}

export default AboutCompaniesPage
