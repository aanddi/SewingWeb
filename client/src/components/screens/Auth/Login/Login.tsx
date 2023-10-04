import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './Login.module.scss'
import AuthLayout from '@/components/layouts/Auth/AuthLayout'

interface Props {

}

const Login: FC<Props> = props => {
  return (
    <AuthLayout>
      Вход
    </AuthLayout>
  )
}

export default Login
