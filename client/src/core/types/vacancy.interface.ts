export interface IVacancy {
  id: number
  employerId: number
  professionId: number
  tarifId: number
  title: string
  minSalary?: number
  maxSalary?: number
  descCard: string
  descMain: string
  city: string
  adress: string
  skills?: string
  workExperience: string
  workTimetable: string
  employmentType: string
  education: string
  tags: string
  fullName: string
  phoneNumber: string
  contact?: string

  status: boolean

  dateStart: Date
  dateEnd: Date
}
