import { GetServerSideProps, NextPage } from 'next'

import { IEmployer } from '@/core/types/employer.interface'

import { employerService } from '@/core/services/employer/employer.service'

import Meta from '@/components/Meta/Meta'
import Companies from '@/components/screens/Site/Companies/Companies'

interface EmployerProps {
  companies: IEmployer[]
}

const CompaniesPage: NextPage<EmployerProps> = ({ companies }) => {
  return (
    <Meta title="Предприятия">
      <Companies companies={companies} />
    </Meta>
  )
}

export default CompaniesPage

export const getServerSideProps: GetServerSideProps<EmployerProps> = async context => {
  try {
    const response = await employerService.getEmployerAll()

    return { props: { companies: response.data } }
  } catch (error) {
    return { props: { companies: [] } }
  }
}
