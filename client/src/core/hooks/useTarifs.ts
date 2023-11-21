import { useQuery } from '@tanstack/react-query'

import { VacancyService } from '../services/vacancy/vacancy.service'

export const useTarifs = () => {
  return useQuery({
    queryKey: ['tarifs'],
    queryFn: async () => {
      const response = await VacancyService.getTarif()
      return response.data
    }
  })
}
