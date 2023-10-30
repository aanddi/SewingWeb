import { NextPage } from 'next'
import Meta from '@/components/Meta/Meta'
import Resume from '@/components/screens/Profile/JobSeeker/Resume/Resume'


const ResumePage: NextPage = () => {
  return (
    <Meta title="Мое резюме">
      <Resume />
    </Meta>
  )
}

export default ResumePage
