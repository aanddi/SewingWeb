import { InputHTMLAttributes } from 'react'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  error?: string | any
  star: boolean
}
