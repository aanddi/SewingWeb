import { FC, useEffect, useState } from 'react'

import styles from './VacanciesTag.module.scss'

// import { RiUserHeartLine } from 'react-icons/Ri'
import { FaCrown } from 'react-icons/fa'
import { LuUser } from 'react-icons/lu'
import { PiStudent } from 'react-icons/pi'
import { TbDisabled } from 'react-icons/tb'

interface TagArray {
  tags: string
  tarif: number
}

const VacanciesTag: FC<TagArray> = ({ tags, tarif }) => {
  const [tagArray, setTagArray] = useState<string[]>([])

  useEffect(() => {
    setTagArray(tags.split(',').map(tag => tag.trim()))
  }, [tags])

  return (
    <div className={styles.tagBlock}>
      {tarif == 2 ? (
        <div className={styles.tagBlock__proItem}>
          <div>
            <FaCrown style={{ color: '#DC3050' }} />
          </div>
          <div className={styles.tagBlock__proName}>Вакансия месяца</div>
        </div>
      ) : null}
      {tagArray.map(elem => {
        return elem == 'Студенты' ? (
          <div key={elem} className={styles.tagBlock__item}>
            <div>
              <PiStudent style={{ color: '#363535' }} />
            </div>
            <div className={styles.tagBlock__name}>{elem}</div>
          </div>
        ) : elem == 'Пенсионеры' ? (
          <div key={elem} className={styles.tagBlock__item}>
            <div>
              <RiUserHeartLine style={{ color: '#363535' }} />
            </div>
            <div className={styles.tagBlock__name}>{elem}</div>
          </div>
        ) : elem == 'Люди с инвалидностью' ? (
          <div key={elem} className={styles.tagBlock__item}>
            {/* <div>
              <TbDisabled style={{ color: '#363535' }} />
            </div> */}
            <div className={styles.tagBlock__name}>{elem}</div>
          </div>
        ) : elem == 'Иностранные граждане' ? (
          <div key={elem} className={styles.tagBlock__item}>
            <div>
              <LuUser style={{ color: '#363535' }} />
            </div>
            <div className={styles.tagBlock__name}>{elem}</div>
          </div>
        ) : null
      })}
    </div>
  )
}

export default VacanciesTag
