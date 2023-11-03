import { forwardRef } from 'react'

import styles from './FieldProfile.module.scss'

import { IFieldProfile } from './FieldProfile.interface'

const Field = forwardRef<HTMLInputElement, IFieldProfile>(({ title, error, type, star, ...rest }, ref) => {
  return (
    <div className={styles.field}>
      <label>
        <div className={styles.field__left}>
          <span className={styles.field__title}>{title}</span>
          {star ? <span className={styles.field__required}>*</span> : ''}
        </div>
        <div className={styles.field__input}>
          <input className={error ? styles.field__errorBorder : ' '} ref={ref} type={type} {...rest} />
          {error && <div className={styles.field__error}>{error}</div>}
        </div>
      </label>
    </div>
  )
})

Field.displayName = 'Field'

export default Field
