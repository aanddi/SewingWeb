export interface IEmployerResponse {
  id: number
  companyName: string
  adress: string
  _count: {
    vacansy: number
  }
}

export interface IEmployerSuggest {
  companyName: string
}

export interface IInfoCard {
  id: number
  companyName: string
  adress: string
}

export interface ICountCard {
  countVacancy: number
  countReviews: number
}

export interface ITypeCard {
  _count: number
  type: string
}

export interface IResponseCard {
  employer: IInfoCard
  count: ICountCard
  averageGrade: number
}

export interface IEmployerCard {
  companies: IResponseCard[]
  types: ITypeCard[]
}

export interface IEmployerHeader {
  id: number
  companyName: string
  reviewsCount: number
  vacanciesCount: number
}
