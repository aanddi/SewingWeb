import { useQuery } from '@tanstack/react-query'

import { IEmployer } from '../types/employer.interface'
import { IProfession } from '../types/profession.interface'

import { EmployerService } from '../services/employer/employer.service'
import { ProfessionService } from '../services/profession/profession.service'

import { useAuth } from './useAuth'

export const useEmployer = () => {
  const { user } = useAuth()
  return useQuery<IEmployer>({
    queryKey: ['employer', user?.id],
    queryFn: async () => {
      const response = await EmployerService.getEmployerByUserId(user?.id)
      return response.data
    }
  })
}
