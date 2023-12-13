import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import VacanciesList from '@/components/screens/Site/VacanciesList/VacanciesList'

import { IRibbonResponse, IVacancyCard } from '@/core/services/vacancy/vacancy.interface'

import { VacancyService } from '@/core/services/vacancy/vacancy.service'

const VacanciesListPage: NextPage<IRibbonResponse> = ({ vacancies, totalPages, countVacanciesReturn }) => {
  return (
    <Meta title="Каталог вакансий">
      <VacanciesList vacancies={vacancies} totalPages={totalPages} countVacanciesReturn={countVacanciesReturn} />
    </Meta>
  )
}

export const getServerSideProps: GetServerSideProps<IRibbonResponse> = async context => {
  const page = context.query.page ? Number(context.query.page) : 1

  const queryProfession = context.query.profession as string
  const querySearch = context.query.search as string
  const queryCity = context.query.city as string
  const queryEducation = context.query.education as string
  const queryExperience = context.query.experience as string
  const queryTags = context.query.tags as string
  const queryTimetable = context.query.timetable as string

  try {
    const response = await VacancyService.getRibbon(
      page,
      queryProfession,
      querySearch,
      queryCity,
      queryEducation,
      queryExperience,
      queryTags,
      queryTimetable
    )

    if (response.data) {
      let vacancies: IVacancyCard[] = []

      if (typeof context.query.page === 'string' && Number(context.query.page) > 1) {
        // Получение ранее загруженных вакансий
        const prevPagesVacancies: IVacancyCard[] = []

        for (let i = 1; i < page; i++) {
          const prevResponse = await VacancyService.getRibbon(
            i,
            queryProfession,
            querySearch,
            queryCity,
            queryEducation,
            queryExperience,
            queryTags,
            queryTimetable
          )
          prevPagesVacancies.push(...prevResponse.data.vacancies)
        }
        vacancies = prevPagesVacancies
      }

      vacancies.push(...response.data.vacancies)

      return {
        props: {
          vacancies: vacancies,
          countVacanciesReturn: response.data.countVacanciesReturn,
          totalPages: response.data.totalPages
        }
      }
    } else {
      return {
        props: {
          vacancies: [],
          countVacanciesReturn: 0,
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
export default VacanciesListPage
