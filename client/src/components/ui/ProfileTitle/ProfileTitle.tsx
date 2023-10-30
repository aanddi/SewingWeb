import { FC } from 'react'

import styles from './ProfileTitle.module.scss'

interface ITitle {
  title: string
}

const ProfileTitle: FC<ITitle> = ({title}) => {
  return <h1 className={styles.title}>{title}</h1>
}

export default ProfileTitle
