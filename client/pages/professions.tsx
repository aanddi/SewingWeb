import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Professions from '@/components/screens/Site/Professions/Professions'

import { IProfessionCard } from '@/core/services/profession/profession.interface'

import { ProfessionService } from '@/core/services/profession/profession.service'

interface PropsProfessions {
  professions: IProfessionCard[]
}

const ProfessionsPage: NextPage<PropsProfessions> = ({ professions }) => {
  const desc = `"Каталог профессий" - здесь вы найдете обширную информацию о различных профессиональных направлениях, 
  вакансиях и требованиях для успешной карьеры. Мы предлагаем подробное описание разнообразных профессий, включая перспективы 
  роста, обязанности, обучение и необходимые навыки. Наш каталог обеспечивает удобную навигацию по различным профессиональным 
  областям, чтобы помочь вам принять информированное решение относительно вашего будущего трудоустройства или профессионального развития. `
  return (
    <Meta title="Каталог профессий" desc={desc}>
      <Professions professions={professions} />
    </Meta>
  )
}

export default ProfessionsPage

export const getServerSideProps: GetServerSideProps<PropsProfessions> = async context => {
  const sort = context.query?.sort as string
  const search = context.query?.search as string

  try {
    let response
    if (sort || search) {
      response = await ProfessionService.getBySearch(search, sort)
    } else {
      response = await ProfessionService.getAll()
    }

    if (response.data !== undefined) {
      return { props: { professions: response.data } }
    } else {
      return { props: { professions: [] } }
    }
  } catch (error) {
    return { props: { professions: [] } }
  }
}
