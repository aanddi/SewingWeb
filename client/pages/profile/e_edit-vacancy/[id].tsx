import Meta from '@/components/Meta/Meta'
import EditVacancy from '@/components/screens/Profile/Employer/EditVacancy/EditVacancy'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'
import { GetServerSideProps } from 'next'
import { VacancyService } from '@/core/services/vacancy/vacancy.service'
import { IVacancyResponse } from '@/core/services/vacancy/vacancy.interface'
import { useAuth } from '@/core/hooks/useAuth'
import { useEmployer } from '@/core/hooks/useEmployer'
import { EmployerService } from '@/core/services/employer/employer.service'

interface AboutVacancyProps {
  vacancy: IVacancyResponse
}

const EditVacancyPage: NextPageAuth<AboutVacancyProps> = ({vacancy}) => {
  return (
    <Meta title="Редактировать вакансию">
      <EditVacancy vacancy={vacancy}/>
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

EditVacancyPage.isOnlyEmployer = true

export default EditVacancyPage
