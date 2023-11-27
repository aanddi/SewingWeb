import { useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import styles from './Professions.module.scss'

import LoadingDots from '@/components/elements/Loading/LoadingDots'
import ProfessionCard from '@/components/elements/Professoin/ProfessionCard/ProfessionCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import SortList from '@/components/ui/SortList/SortList'

import { IProfessionCard } from '@/core/services/profession/profession.interface'

import { useOutside } from '@/core/hooks/useOutside'
import { ProfessionService } from '@/core/services/profession/profession.service'

import { sortProfessions } from './sort-professions.data'

import { BiSearchAlt } from 'react-icons/bi'
import { LuSearchX } from 'react-icons/lu'
import { RxCross1 } from 'react-icons/rx'

interface Props {
  professions: IProfessionCard[]
}

const Professions: FC<Props> = ({ professions }) => {
  const { isShow, setIsShow, ref } = useOutside(false)
  const { isShow: isShowSearch, setIsShow: setIsShowSearch, ref: refSearch } = useOutside(false)
  const [value, setValue] = useState<string>('')
  const [querySearch, setQuerySearch] = useState<string>('')
  const queryClient = useQueryClient()

  const router = useRouter()

  const { data: search, isLoading } = useQuery({
    queryKey: ['searchProfession', value],
    queryFn: async () => {
      const response = await ProfessionService.getSuggest(value)

      return response.data
    },
    enabled: !!value
  })

  useEffect(() => {
    const query = router.query.search as string
    setQuerySearch(query)

    if (!value) setIsShowSearch(false)

    queryClient.invalidateQueries({ queryKey: ['searchProfession', value] })
  }, [value, search, router])

  return (
    <SiteLayout background={'#F6FAFF'}>
      <div className={styles.professions}>
        <section className={[styles.professions__head, styles.head].join(' ')}>
          <div className="head__container">
            <div className={styles.head__wrapper}>
              <h1 className={styles.head__title}>Каталог профессий</h1>
              <p className={styles.head__subTitle}>Мы собрали для Вас все профессии, которые имеются у нас на платформе.</p>

              <div className={styles.search}>
                <div className={styles.search__block}>
                  <div className={styles.search__input}>
                    <div className={styles.search__icons}>
                      <BiSearchAlt style={{ color: '#BCBCBC' }} size={20} />
                    </div>
                    <div className={styles.search__inputBlock}>
                      <input
                        onChange={e => {
                          setValue(e.target.value)
                          setIsShowSearch(true)
                          queryClient.invalidateQueries({ queryKey: ['searchProfession', value] })
                        }}
                        value={value}
                        type="text"
                        placeholder="Введите профессию"
                      />
                      {value ? (
                        <div onClick={() => setValue('')} className={styles.search__reset}>
                          <RxCross1 />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <Link
                    href={{ pathname: '/professions', query: { search: value } }}
                    onClick={() => setIsShowSearch(false)}
                    className={styles.search__button}
                  >
                    Найти
                  </Link>
                  {querySearch && (
                    <span
                      className={styles.search__reset}
                      onClick={() => {
                        router.push('professions')
                        setValue('')
                      }}
                    >
                      Сбросить поиск
                    </span>
                  )}
                </div>

                <div
                  ref={refSearch}
                  className={
                    isShowSearch
                      ? [styles.search__list, styles.search__list_active].join(' ')
                      : [styles.search__list, styles.search__list_unactive].join(' ')
                  }
                >
                  <div className={styles.search__listWrapper}>
                    <ul className={styles.search__items}>
                      {search?.map((elem, index) => {
                        return (
                          <li onClick={() => setIsShowSearch(false)} key={index} className={styles.search__item}>
                            <Link href={{ query: { ...router.query, search: value } }} replace={true} className={styles.search__link}>
                              {elem.name}
                            </Link>
                          </li>
                        )
                      })}
                      {search?.length === 0 && <div className={styles.search__notFound}>Нет результатов</div>}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={[styles.professions__ribbon, styles.ribbon].join(' ')}>
          <div className="ribbon__container">
            <div className={styles.ribbon__wrapper}>
              {querySearch ? <div className={styles.ribbon__search}>Результат поиска по названию: {value}</div> : null}
              <div ref={ref}>
                <SortList data={sortProfessions} active={isShow} setActive={setIsShow} />
              </div>

              <div className={styles.ribbon__cards}>
                {professions.length > 0 ? (
                  professions.map((profession, index) => {
                    return profession._count.vacancy > 0 ? <ProfessionCard profession={profession} key={index} /> : null
                  })
                ) : (
                  <div className={styles.ribbon__error}>
                    <div className={styles.ribbon__error_icon}>
                      <LuSearchX size={30} style={{ color: '#FD7791' }} />
                    </div>
                    <div className={styles.ribbon__error_message}>
                      <span className={styles.ribbon__error_title}>Упс... не удалось найти профессии.</span>
                      <span>Попробуйте изменить условия поиска или попробовать чуть позже.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

export default Professions
