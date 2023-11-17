export interface IProfession {
  id: number
  name: string
  averageSalary: number
  desc: string
  _count: {
    vacancy: number
  }
}
