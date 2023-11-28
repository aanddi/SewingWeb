import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import Professions from '@/components/screens/Site/Professions/Professions'

import { IProfessionCard } from '@/core/services/profession/profession.interface'

import { ProfessionService } from '@/core/services/profession/profession.service'

interface PropsProfessions {
  professions: IProfessionCard[]
}

const ProfessionsPage: NextPage<PropsProfessions> = ({ professions }) => {
  return (
    <Meta title="Профессии">
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

    return { props: { professions: response.data } }
  } catch (error) {
    return { props: { professions: [] } }
  }
}
