import { InputHTMLAttributes } from 'react'

export interface IFieldProfile extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  error?: string | any
  star: boolean
}
