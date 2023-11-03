import { FC } from 'react'

import styles from './VacanciesTag.module.scss'

import { RiUserHeartLine } from 'react-icons/Ri'
import { FaCrown } from 'react-icons/fa'
import { PiStudent } from 'react-icons/pi'

interface TagArray {
  tags: string[]
}

const VacanciesTag: FC<TagArray> = ({ tags }) => {
  return (
    <div className={styles.tagBlock}>
      {tags.map(elem => {
        return elem == 'Вакансия недели' ? (
          <div key={elem} className={styles.tagBlock__proItem}>
            <div>
              <FaCrown style={{ color: '#DC3050' }} />
            </div>
            <div className={styles.tagBlock__proName}>Вакансия недели</div>
          </div>
        ) : elem == 'Студенты' ? (
          <div key={elem} className={styles.tagBlock__item}>
            <div>
              <PiStudent style={{ color: '#363535' }} />
            </div>
            <div className={styles.tagBlock__name}>{elem}</div>
          </div>
        ) : elem == 'Пенсионерам' ? (
          <div key={elem} className={styles.tagBlock__item}>
            <div>
              <RiUserHeartLine style={{ color: '#363535' }} />
            </div>
            <div className={styles.tagBlock__name}>{elem}</div>
          </div>
        ) : null
      })}
    </div>
  )
}

export default VacanciesTag
