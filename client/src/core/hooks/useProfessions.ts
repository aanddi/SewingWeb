import { useQuery } from '@tanstack/react-query'

import { IProfession } from '../types/profession.interface'

import { ProfessionService } from '../services/profession/profession.service'

export const useProfessions = () => {
  return useQuery<IProfession[]>({
    queryKey: ['professions'],
    queryFn: async () => {
      const response = await ProfessionService.getAll()
      return response.data
    }
  })
}
