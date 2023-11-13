import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import 'react-quill/dist/quill.snow.css'

import styles from './MyCompany.module.scss'

import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import { BiSolidEditAlt } from 'react-icons/bi'
import { IoIosAddCircleOutline } from 'react-icons/io'

import logo from 'public/Companies/logoCompany.svg'

const QuillNoSSRWrapper = dynamic(async () => (await import('react-quill')).default, { ssr: false })
const MyCompany: FC = () => {
  const [value, setValue] = useState('')

  const [showTextEditor, setShowTextEditor] = useState(false)
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.company}>
        <div className="company__container">
          <ProfileTitle title={'Моя компания'} />
          <div className={styles.company__wrapper}>
            <div className={styles.company__logo}>
              <Image src={logo} alt={'Логотип'} width={120} />
            </div>
            <div className={styles.company__content}>
              <div className={styles.company__mainInfo}>
                <div className={styles.company__info}>
                  <div className={styles.company__infoBlock}>
                    <div className={styles.company__name}>Название компании</div>
                  </div>
                  <div className={styles.company__fullInfo}>
                    <div className={styles.company__fullWrapper}>
                      <div className={styles.company__fullLeft}>
                        <div className={styles.company__fullBlock}>
                          <div className={styles.company__label}>ИНН:</div>
                          <div className={styles.company__desc}>
                            <span>11111111111</span>
                          </div>
                        </div>
                        <div className={styles.company__fullBlock}>
                          <div className={styles.company__label}>Тип предприятия:</div>
                          <div className={styles.company__desc}>
                            <span>Ателье</span>
                          </div>
                        </div>
                        <div className={styles.company__fullBlock}>
                          <div className={styles.company__label}>Размер предприятия:</div>
                          <div className={styles.company__desc}>
                            <span>Ателье</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.company__fullRight}>
                        <div className={styles.company__fullBlock}>
                          <div className={styles.company__label}>Контакты:</div>
                          <div className={styles.company__desc}>
                            <span>+79787408141</span>
                          </div>
                        </div>
                        <div className={styles.company__fullBlock}>
                          <div className={styles.company__label}>Адрес:</div>
                          <div className={styles.company__desc}>
                            <span>г. Симферополь</span>
                          </div>
                        </div>
                        <div className={styles.company__fullBlock}>
                          <div className={styles.company__label}>Город регистрации:</div>
                          <div className={styles.company__desc}>
                            <span>г. Москва</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.company__edit}>
                      <BiSolidEditAlt size={15} style={{ color: '#3490DF' }} />
                      <span>Дополнить</span>
                    </div>
                  </div>
                </div>
                <aside className={styles.company__sidebar}>
                  <div className={styles.company__sidebarWrapper}>
                    <Link href="/" className={styles.company__barBlock}>
                      <h2>5</h2>
                      <span>вакансий</span>
                    </Link>
                  </div>
                </aside>
              </div>
              <div className={styles.company__body}>
                <div className={styles.company__about}>
                  <div className={styles.company__blockTitle}>О компании</div>
                  <div className={styles.company__blockSubTitle}>
                    Полученное образование: учебное заведение, специальность, курсы повышения квалификации.
                  </div>
                  <div className={styles.company__add} onClick={() => setShowTextEditor(!showTextEditor)}>
                    <IoIosAddCircleOutline style={{ color: '#DA435F' }} />
                    <span>Добавить</span>
                  </div>

                  <div
                    className={
                      showTextEditor
                        ? [styles.company__blockList, styles.company__blockList_active].join(' ')
                        : [styles.company__blockList, styles.company__blockList_unactive].join(' ')
                    }
                  >
                    <QuillNoSSRWrapper value={value} onChange={setValue} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default MyCompany
