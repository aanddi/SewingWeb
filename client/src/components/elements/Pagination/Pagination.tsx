import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Pagination.module.scss'

import { IVacancyCard } from '@/core/services/vacancy/vacancy.interface'

import VacanciesCard from '../Vacancy/VacanciesCard/VacanciesCard'

interface Props {
  vacanciesData: IVacancyCard[]
  totalPages: number
}

const Pagination: FC<Props> = ({ vacanciesData, totalPages }) => {
  const router = useRouter()
  const currentPage = Number(router.query.page) || 1

  return (
    <div className={styles.pagination}>
      {vacanciesData.map((vacancy, index) => (
        <VacanciesCard key={index} vacancy={vacancy} />
      ))}
      <div>
        {totalPages == currentPage ? null : (
          <Link
            href={{ pathname: router.pathname, query: { ...router.query, page: currentPage + 1 } }}
            scroll={false}
            className={styles.pagination__showVacancies}
          >
            Показать еще
          </Link>
        )}
      </div>
    </div>
  )
}

export default Pagination
