import { NextPage } from 'next'

import Vacancies from '@/components/screens/Site/Vacancies/Vacancies'
import Meta from '@/components/ui/Meta/Meta'

interface Props {}

const VacanciesPage: NextPage<Props> = props => {
  return (
    <Meta title='Вакансия'>
      <Vacancies />
    </Meta>
  )
}

export default VacanciesPage
