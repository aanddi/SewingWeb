export interface IReviews {
  id: number
  createdAt: Date
  updatedAt?: Date
  jobseekerId: number
  employerId: number
  profession: string
  post: string
  grade: number
  advantages?: string
  flaws?: string
  comment?: string
}
