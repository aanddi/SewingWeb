import { IProfession } from '@/core/types/profession.interface'

export interface IProfessionsSuggest {
  name: string
}

export interface IProfessionCard extends IProfession {
  _count: {
    vacancy: number
  }
}
