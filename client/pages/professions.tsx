import { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'

import { IProfession } from '@/core/types/profession.interface'

import { ProfessionService } from '@/core/services/profession/profession.service'

import Meta from '@/components/Meta/Meta'
import Professions from '@/components/screens/Site/Professions/Professions'

interface ProfessionsProps {
  professions: IProfession[]
}

const ProfessionsPage: NextPage<ProfessionsProps> = ({ professions }) => {
  return (
    <Meta title="Профессии">
      <Professions professions={professions} />
    </Meta>
  )
}
export default ProfessionsPage

// ...
export const getServerSideProps: GetServerSideProps<ProfessionsProps> = async context => {
  const sort = context.query.sort as string

  try {
    let response

    if (sort == undefined) {
      response = await ProfessionService.getAll()
    } else {
      response = await ProfessionService.getBySorted(sort)
    }

    if (response.status !== 200) {
      return { props: { professions: [] } }
    }

    return { props: { professions: response.data } }
  } catch (error) {
    console.error('Failed to fetch professions: ', error)
    return { props: { professions: [] } } // You might want to handle this differently
  }
}
