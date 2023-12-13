import Meta from '@/components/Meta/Meta'
import AddVacancy from '@/components/screens/Profile/Employer/AddVacancy/AddVacancy'

import { NextPageAuth } from '@/core/providers/aut-provider/auth-page.types'

const AddVacancyPage: NextPageAuth = () => {
  const desc =
    `"Добавить вакансию" - наш сервис позволяет работодателям быстро и удобно разместить информацию о вакансиях в 
    своей компании. Здесь вы можете опубликовать информацию о вакантных должностях, указать требования к 
    кандидатам и предоставить всю необходимую информацию для привлечения лучших специалистов. Наша платформа 
    обеспечивает удобство использования, широкий охват аудитории и возможность быстрой публикации, помогая вашей 
    компании найти идеальных кандидатов для ваших вакансий.`
  return (
    <Meta title="Добавить вакансию" desc={desc}>
      <AddVacancy />
    </Meta>
  )
}

AddVacancyPage.isOnlyEmployer = true

export default AddVacancyPage
