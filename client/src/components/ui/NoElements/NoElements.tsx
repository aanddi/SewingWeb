import { FC } from 'react'

import styles from './NoElements.module.scss'

interface IMessage {
  message: string
}

const NoElements: FC<IMessage> = ({ message }) => {
  return <div className={styles.noElements}>{message}</div>
}

export default NoElements
