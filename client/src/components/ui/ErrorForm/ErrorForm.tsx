import { FC, PropsWithChildren } from 'react'

import styles from './ErrorForm.module.scss'

const ErrorForm: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.error}>{children}</div>
}

export default ErrorForm
