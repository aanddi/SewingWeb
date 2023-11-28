import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import CompaniesList from '@/components/screens/Site/CompaniesList/Companies'

import { IEmployerCard } from '@/core/services/employer/employer.interface'

import { EmployerService } from '@/core/services/employer/employer.service'

const CompaniesPage: NextPage<IEmployerCard> = ({ companies, types }) => {
  return (
    <Meta title="Предприятия">
      <CompaniesList companies={companies} types={types} />
    </Meta>
  )
}

export default CompaniesPage

export const getServerSideProps: GetServerSideProps<IEmployerCard> = async context => {
  const search = context.query.search as string
  const sort = context.query.sort as string

  try {
    let response

    if (search) {
      response = await EmployerService.getBySearch(search)
    } else {
      response = await EmployerService.getEmployerAll()
    }

    return {
      props: {
        companies: response.data.companies,
        types: response.data.types
      }
    }
  } catch (error) {
    return {
      props: {
        companies: [],
        types: []
      }
    }
  }
}
