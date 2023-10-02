import { NextPage } from 'next'

import SiteLayout from '@/components/layouts/Site/SiteLayout'

import styles from './Companies.module.scss'

interface Props {}

const Companies: NextPage<Props> = props => {
  return <SiteLayout>Предприятия</SiteLayout>
}

export default Companies
