import { NextPage } from 'next'
import Head from 'next/head'

import Vacancies from '@/components/screens/Site/Vacancies/Vacancies'

interface Props {}

const VacanciesPage: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>Вакансия</title>
      </Head>
      <Vacancies />
    </>
  )
}

export default VacanciesPage
