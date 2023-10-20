import { NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Vacancies from '@/components/screens/Site/Vacancies/Vacancies'

interface Props {}

const VacanciesPage: NextPage<Props> = props => {
  return (
    <Meta title="Вакансия">
      <Vacancies />
    </Meta>
  )
}

export default VacanciesPage
