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

// Рендеринг данных на стороне сервера
export const getServerSideProps: GetServerSideProps<ProfessionsProps> = async context => {
  const sort = context.query.sort as string
  
  try {
    let response

    if(sort) {
      response = await ProfessionService.getBySorted(sort)
    } else {
      response = await ProfessionService.getAll()
    }
    
    return { props: { professions: response.data } }

  } catch (error) {
    return { props: { professions: [] } } 
  }
}
