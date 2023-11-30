import { FC, forwardRef, useEffect, useState } from 'react'

import styles from './Field.module.scss'

import { IField } from './Field.intreface'

import { GoEye, GoEyeClosed } from 'react-icons/go'

const Field = forwardRef<HTMLInputElement, IField>(({ title, error, type, star, ...rest }, ref) => {
  const [check, setCheck] = useState(false)
  const [sizeValue, setSizeValue] = useState(0)

  useEffect(() => {
    setSizeValue((rest.value as string)?.length ?? 0)
  }, []) // Пустой массив зависимостей, чтобы эффект сработал только при монтировании

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSizeValue(e.target.value.length)
  }

  return (
    <div className={styles.field}>
      <label>
        <div className={styles.field__head}>
          <span className={styles.field__title}>{title}</span>
          {star ? <span className={styles.field__required}>*</span> : ''}
        </div>
        <div className={error ? [styles.field__input, styles.field__errorBorder].join(' ') : styles.field__input}>
          <input ref={ref} type={type === 'password' && check ? 'text' : type} {...rest} onInput={handleInput} />
          {type === 'password' && sizeValue > 0 && (
            <div onClick={() => setCheck(!check)} className={styles.field__checkPassword}>
              {check ? <GoEye size={20} style={{ color: 'grey' }} /> : <GoEyeClosed size={20} style={{ color: 'grey' }} />}
            </div>
          )}
        </div>
      </label>
      {error && <div className={styles.field__error}>{error}</div>}
    </div>
  )
})

Field.displayName = 'Field'

export default Field
