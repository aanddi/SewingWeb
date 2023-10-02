import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import IAboutCompanies from './AboutCompanies.interface'

import SiteLayout from '@/components/layouts/Site/SiteLayout'

import styles from './AboutCompanies.module.scss'

const AboutCompanies: FC<IAboutCompanies> = props => {
  return (
    <SiteLayout>
      <div className={styles.aboutCompanies}></div>
    </SiteLayout>
  )
}

export default AboutCompanies
