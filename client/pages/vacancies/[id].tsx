import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import AboutVacancy from '@/components/screens/Site/Vacancies/Vacancies'

import { IVacancyResponse } from '@/core/services/vacancy/vacancy.interface'

import { VacancyService } from '@/core/services/vacancy/vacancy.service'

interface AboutVacancyProps {
  vacancy: IVacancyResponse
}

const VacanciesPage: NextPage<AboutVacancyProps> = ({ vacancy }) => {
  return (
    <Meta title="Вакансия">
      <AboutVacancy vacancy={vacancy} />
    </Meta>
  )
}

export const getServerSideProps: GetServerSideProps<AboutVacancyProps> = async context => {
  const id = context.params?.id as string
  try {
    const response = await VacancyService.getById(id)

    if (response.data !== undefined) {
      return { props: { vacancy: response.data } }
    } else {
      return { notFound: true }
    }
  } catch (error) {
    return { notFound: true }
  }
}

export default VacanciesPage
