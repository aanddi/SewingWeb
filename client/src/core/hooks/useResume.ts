import { useQuery } from '@tanstack/react-query'

import { IResume } from '../types/resume.interface'

import { JobseekerService } from '../services/jobseeker/jobseeker.service'

import { useAuth } from './useAuth'

export const useResume = () => {
  const { user } = useAuth()
  const userId = user?.id
  return useQuery<IResume>({
    queryKey: ['resume', userId],
    queryFn: async () => {
      const response = await JobseekerService.getResumeByIdUser(userId)
      return response
    }
  })
}
