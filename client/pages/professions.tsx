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

  // Fetch the data from the server and assign it to the 'professions' variable
  const professions: IProfessionCard[] = await fetchData(sort, search);
  
  // Return the fetched data as props
  return {
    props: {
      professions: professions
    }
  };
}
