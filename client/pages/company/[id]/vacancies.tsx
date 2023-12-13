import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import CompanyVacancies from '@/components/screens/Site/CompanyVacancies/CompanyVacancies'

import { IEmployerHeader } from '@/core/services/employer/employer.interface'
import { IRibbonById, IVacancyCard } from '@/core/services/vacancy/vacancy.interface'

import { EmployerService } from '@/core/services/employer/employer.service'
import { VacancyService } from '@/core/services/vacancy/vacancy.service'

interface AboutEmployerProps {
  header: IEmployerHeader
  vacancies: IRibbonById
}

const CompanyVacanciesPage: NextPage<AboutEmployerProps> = ({ header, vacancies }) => {
  return (
    <Meta title={header.companyName} desc={`Каталон вакансий предприятия ${header.companyName}`}>
      <CompanyVacancies header={header} vacancies={vacancies.vacancies} />
    </Meta>
  )
}

export const getServerSideProps: GetServerSideProps<AboutEmployerProps> = async context => {
  const id = context.params?.id as string
  try {
    const header = await EmployerService.getHeader(id)
    const vacancies = await VacancyService.getRibbonById(+id)

    if (header.data && vacancies.data) {
      return { props: { header: header.data, vacancies: vacancies.data } }
    } else {
      return { notFound: true }
    }
  } catch (error) {
    return { notFound: true }
  }
}

export default CompanyVacanciesPage
