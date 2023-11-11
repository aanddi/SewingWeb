export interface IResume {
  id: number
  name: string
  surname: string
  patronymic?: string
  profession: string
  salary: number
  gender: string
  DOB: string
  phoneNumber: string
  citizenship: string
  city: string
  email?: string
  languages?: string
  workTimetable?: string
  about: string | undefined
}
