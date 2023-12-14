import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import CompaniesList from '@/components/screens/Site/CompaniesList/Companies'

import { IEmployerCard } from '@/core/services/employer/employer.interface'

import { EmployerService } from '@/core/services/employer/employer.service'

const CompaniesPage: NextPage<IEmployerCard> = ({ companies, types }) => {
  const desc = `"Каталог предприятий" - ваш источник для обнаружения и исследования разнообразных компаний и предприятий. 
  Здесь вы найдете информацию о различных организациях, их специализации, контактных данных и местоположении.
   Наш каталог предприятий предоставляет удобный способ просмотра и сравнения различных компаний,
    чтобы вы могли быстро найти то, что вам нужно. Независимо от того, ищете ли вы поставщика, партнера 
    или просто хотите узнать больше о бизнес-сообществе, наш каталог предприятий поможет вам в этом.`
  return (
    <Meta title="Каталог предприятий" desc={desc}>
      <CompaniesList companies={companies} types={types} />
    </Meta>
  )
}

export default CompaniesPage

export const getServerSideProps: GetServerSideProps<IEmployerCard> = async context => {
  const search = context.query.search as string
  const sort = context.query.sort as string

  try {

    const  response = await EmployerService.getEmployerAll(search, sort)
  
    if (response.data !== undefined) {
      return {
        props: {
          companies: response.data.companies,
          types: response.data.types
        }
      }
    } else {
      return {
        props: {
          companies: [],
          types: []
        }
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
