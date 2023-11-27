import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import AboutCompanies from '@/components/screens/Site/CompaniesAbout/CompaniesAbout'

import { IEmployerHeader } from '@/core/services/employer/employer.interface'
import { IEmployer } from '@/core/types/employer.interface'

import { EmployerService } from '@/core/services/employer/employer.service'

interface AboutEmployerProps {
  company: IEmployer
  header: IEmployerHeader
}

const AboutCompaniesPage: NextPage<AboutEmployerProps> = ({ company, header }) => {
  return (
    <Meta title={header.companyName}>
      <AboutCompanies company={company} header={header} />
    </Meta>
  )
}

export const getServerSideProps: GetServerSideProps<AboutEmployerProps> = async context => {
  const id = context.params?.id as string
  try {
    const info = await EmployerService.getEmployerById(id)
    const header = await EmployerService.getHeader(id)

    if (info.data !== undefined && header.data !== undefined) {
      return {
        props: {
          company: info.data,
          header: header.data
        }
      }
    } else {
      return { notFound: true }
    }
  } catch (error) {
    return { notFound: true }
  }
}

export default AboutCompaniesPage
