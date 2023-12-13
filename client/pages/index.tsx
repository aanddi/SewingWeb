import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Home from '@/components/screens/Site/Home/Home'

import { IRibbonResponse, IVacancyCard } from '@/core/services/vacancy/vacancy.interface'

import { VacancyService } from '@/core/services/vacancy/vacancy.service'

const HomePage: NextPage<IRibbonResponse> = ({ vacancies, totalVacancies, totalResume, totalPages, countVacanciesReturn }) => {
  const desc = `SewingWeb - это job-сайт для размещения вакансий работодателй и резюме соискателей легкой промышленности`
  return (
    <Meta title="Найти работу" desc={desc}>
      <Home
        vacancies={vacancies}
        totalVacancies={totalVacancies}
        totalResume={totalResume}
        totalPages={totalPages}
        countVacanciesReturn={countVacanciesReturn}
      />
    </Meta>
  )
}

export const getServerSideProps: GetServerSideProps<IRibbonResponse> = async context => {
  const page = context.query.page ? Number(context.query.page) : 1
  try {
    const response = await VacancyService.getRibbon(page)

    if (response.data) {
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
          countVacanciesReturn: response.data.countVacanciesReturn,
          totalVacancies: response.data.totalVacancies,
          totalResume: response.data.totalResume,
          totalPages: response.data.totalPages
        }
      }
    } else {
      return {
        props: {
          vacancies: [],
          countVacanciesReturn: 0,
          totalVacancies: 0,
          totalResume: 0,
          totalPages: 0
        }
      }
    }
  } catch (error) {
    return {
      props: {
        vacancies: [],
        countVacanciesReturn: 0,
        totalVacancies: 0,
        totalResume: 0,
        totalPages: 0
      }
    }
  }
}

export default HomePage
