import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, FC, SetStateAction, useState } from 'react'

import styles from './SortList.module.scss'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

interface SortItem {
  name: string
  href: string
}

interface Props {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  data: SortItem[]
  title?: string
}

const SortList: FC<Props> = ({ active, setActive, data, title }) => {
  const [sortValue, setSortValue] = useState(data[0]?.name)
  const router = useRouter()
  return (
    <div className={styles.sort} onClick={() => setActive(!active)}>
      <div className={styles.sort__title}>
        {title ? title : 'Сортировка'} <span>{sortValue}</span>
      </div>
      <div className={active ? [styles.sort__list, styles.sort__list_active].join(' ') : [styles.sort__list, styles.sort__list_unactive].join(' ')}>
        <div className={styles.sort__listWrapper}>
          <ul className={styles.sort__items}>
            {data.map((elem, index) => {
              return (
                <li key={index} className={styles.sort__item} onClick={() => setSortValue(elem.name)}>
                  <Link href={elem.href} className={styles.sort__link}>
                    {elem.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div>{active ? <IoIosArrowUp style={{ color: '#242424' }} size={20} /> : <IoIosArrowDown style={{ color: '#242424' }} size={20} />}</div>
    </div>
  )
}

export default SortList
