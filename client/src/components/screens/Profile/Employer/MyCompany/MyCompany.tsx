import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import 'react-quill/dist/quill.snow.css'

import styles from './MyCompany.module.scss'

import CompanyAbout from '@/components/elements/Company/CompanyAbout/CompanyAbout'
import UpdateCompany from '@/components/elements/Modal/UpdateCompany/UpdateCompany'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import { useAuth } from '@/core/hooks/useAuth'
import { EmployerService } from '@/core/services/employer/employer.service'

import { BiSolidEditAlt } from 'react-icons/bi'

import logo from 'public/Companies/logoCompany.svg'

const MyCompany: FC = () => {
  const [activeModal1, setActiveModal1] = useState(false)

  const { user } = useAuth()
  const userId = user?.id
  const router = useRouter()

  const { data: employer } = useQuery({
    queryKey: ['employer', userId],
    queryFn: async () => {
      const response = await EmployerService.getEmployerByUserId(userId)
      return response.data
    }
  })

  const { data: countVacancy } = useQuery({
    queryKey: ['count-vacancy', employer?.id],
    queryFn: async () => {
      const response = await EmployerService.getCountVacany(employer?.id)
      return response.data
    },
    enabled: !!employer?.id
  })

  console.log(employer)

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.company}>
        <div className="company__container">
          <ProfileTitle title={'Моё предприятие'} />
          <div className={styles.company__wrapper}>
            <div className={styles.company__logo}>
              <Image src={logo} alt={'Логотип'} width={120} />
            </div>
            <div className={styles.company__content}>
              <div className={styles.company__mainInfo}>
                <div className={styles.company__info}>
                  <div className={styles.company__infoBlock}>
                    {employer?.companyName ? (
                      <div className={styles.company__name}>{employer?.companyName}</div>
                    ) : (
                      <div className={styles.company__name}>Название предприятия</div>
                    )}
                  </div>
                  <div className={styles.company__fullInfo}>
                    <div className={styles.company__fullWrapper}>
                      <div className={styles.company__fullLeft}>
                        <div className={styles.company__fullBlock}>
                          <div className={styles.company__label}>ИНН:</div>
                          <div className={styles.company__desc}>{employer?.inn ? <span>{employer?.inn}</span> : <span>не указано</span>}</div>
                        </div>
                        <div className={styles.company__fullBlock}>
                          <div className={styles.company__label}>Тип предприятия:</div>
                          <div className={styles.company__desc}>{employer?.type ? <span>{employer?.type}</span> : <span>не указано</span>}</div>
                        </div>
                        <div className={styles.company__fullBlock}>
                          <div className={styles.company__label}>Размер предприятия:</div>
                          <div className={styles.company__desc}>{employer?.size ? <span>{employer?.size}</span> : <span>не указано</span>}</div>
                        </div>
                      </div>
                      <div className={styles.company__fullRight}>
                        <div className={styles.company__fullBlock}>
                          <div className={styles.company__label}>Контакты:</div>
                          <div className={styles.company__desc}>{employer?.contact ? <span>{employer?.contact}</span> : <span>не указано</span>}</div>
                        </div>
                        <div className={styles.company__fullBlock}>
                          <div className={styles.company__label}>Адрес:</div>
                          <div className={styles.company__desc}>{employer?.adress ? <span>{employer?.adress}</span> : <span>не указано</span>}</div>
                        </div>
                        <div className={styles.company__fullBlock}>
                          <div className={styles.company__label}>Город регистрации:</div>
                          <div className={styles.company__desc}>
                            {employer?.registrCity ? <span>{employer?.registrCity}</span> : <span>не указано</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.company__edit} onClick={() => setActiveModal1(true)}>
                      <BiSolidEditAlt size={15} style={{ color: '#3490DF' }} />
                      <span>{employer ? 'Дополнить' : 'Заполнить'}</span>
                    </div>
                  </div>
                </div>
                <aside className={styles.company__sidebar}>
                  <div className={styles.company__sidebarWrapper}>
                    <Link href="/profile/my-vacancies" className={styles.company__barBlock}>
                      <h2>{countVacancy ? countVacancy : '0'}</h2>
                      <span>вакансий</span>
                    </Link>
                  </div>
                </aside>
              </div>
              <div className={styles.company__body}>
                <CompanyAbout idEmployer={employer?.id} about={employer?.about} />
              </div>
            </div>
          </div>
        </div>
        <UpdateCompany employer={employer} active={activeModal1} setActive={setActiveModal1} />
      </div>
    </SiteLayout>
  )
}

export default MyCompany
