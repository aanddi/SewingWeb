import { FC, forwardRef, useState } from 'react'

import styles from './Field.module.scss'

import { IField } from './Field.intreface'

const Field = forwardRef<HTMLInputElement, IField>(({ title, error, type, star, ...rest }, ref) => {
  return (
    <div className={styles.field}>
      <label>
        <div className={styles.field__head}>
          <span className={styles.field__title}>{title}</span>
          {star ? <span className={styles.field__required}>*</span> : ''}
        </div>
        <input className={error ? styles.field__errorBorder : ' '} ref={ref} type={type} {...rest} />
      </label>
      {error && <div className={styles.field__error}>{error}</div>}
    </div>
  )
})

Field.displayName = 'Field'

export default Field
