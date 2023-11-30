import { GetServerSideProps, NextPage } from 'next'

import Meta from '@/components/Meta/Meta'
import ResumeAbout from '@/components/screens/Site/Resume/ResumeAbout'

import { ResumeAboutResponse } from '@/core/services/jobseeker/jobseeker.interface'

import { JobseekerService } from '@/core/services/jobseeker/jobseeker.service'

const AboutCompaniesPage: NextPage<ResumeAboutResponse> = ({ resume, experience, education }) => {
  const fullname = `${resume.surname} ${resume.name}  ${resume.patronymic}` || 'Резюме'
  return (
    <Meta title={fullname} desc={resume.about}>
      <ResumeAbout resume={resume} experience={experience} education={education} />
    </Meta>
  )
}

export const getServerSideProps: GetServerSideProps<ResumeAboutResponse> = async context => {
  const id = context.params?.id as string
  try {
    const response = await JobseekerService.getAbout(id)

    if (response !== undefined) {
      return {
        props: {
          resume: response.resume,
          experience: response.experience,
          education: response.education
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
