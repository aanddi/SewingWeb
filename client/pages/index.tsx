import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Home from '@/components/screens/Site/Home/Home'

import { IRibbonResponse, IVacancyCard } from '@/core/services/vacancy/vacancy.interface'

import { VacancyService } from '@/core/services/vacancy/vacancy.service'

const HomePage: NextPage<IRibbonResponse> = ({ vacancies, totalVacancies, totalResume, totalPages }) => {
  return (
    <Meta title="Найти работу">
      <Home vacancies={vacancies} totalVacancies={totalVacancies} totalResume={totalResume} totalPages={totalPages} />
    </Meta>
  )
}

export const getServerSideProps: GetServerSideProps<IRibbonResponse> = async context => {
  const page = context.query.page ? Number(context.query.page) : 1

    const response = await VacancyService.getRibbon(page)

    let vacancies: IVacancyCard[] = []

    if (typeof context.query.page === 'string' && Number(context.query.page) > 1) {
      // Получение ранее загруженных вакансий
      const prevPagesVacancies: IVacancyCard[] = []

      for (let i = 1; i < page; i++) {
        const prevResponse = await VacancyService.getRibbon(i)
        prevPagesVacancies.push(...prevResponse.data.vacancies)
      }
      vacancies = prevPagesVacancies
    }

    vacancies.push(...response.data.vacancies)

    return {
      props: {
        vacancies: vacancies,
        totalVacancies: response.data.totalVacancies,
        totalResume: response.data.totalResume,
        totalPages: response.data.totalPages
      }
    }
}

export default HomePage
