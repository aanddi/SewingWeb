import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import { FaPen } from 'react-icons/fa'
import { IoIosAddCircleOutline } from 'react-icons/io'

import ResumeModal from '@/components/elements/Modal/ResumeModal/ResumeModal'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import styles from './Resume.module.scss'

import photo from 'public/Profiles/photoUser.svg'

const Resume: FC = () => {
  const [activeModal1, setActiveModal1] = useState(false)
  const [activeModal2, setActiveModal2] = useState(false)
  const [activeModal3, setActiveModal3] = useState(false)
  const [activeModal4, setActiveModal4] = useState(false)

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.resume}>
        <div className="resume__container">
          <div className={styles.resume__header}>
            <ProfileTitle title={'Мое резюме'} />
          </div>
          <div className={styles.resume__wrapper}>
            <div className={styles.resume__photo}>
              <Image width={120} src={photo} alt={'Фото'} />
              <span>id: 1234</span>
            </div>
            <div className={styles.resume__content}>
              <div className={styles.resume__mainInfo}>
                <div className={styles.resume__info}>
                  <div className={styles.resume__infoBlock}>
                    <div className={styles.resume__name}>Петров Пётр Петрович</div>
                    <div className={styles.resume__post}>Конструктор</div>
                    <div className={styles.resume__salary}>
                      <span>Желаемый доход:</span> от 50 тыс руб.
                    </div>
                  </div>
                  <div className={styles.resume__fullInfo}>
                    <div className={styles.resume__fullWrapper}>
                      <div className={styles.resume__fullLeft}>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Дата рождения:</div>
                          <div className={styles.resume__desc}>20.06.1995</div>
                        </div>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Пол:</div>
                          <div className={styles.resume__desc}>мужской</div>
                        </div>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Номер телефона:</div>
                          <div className={styles.resume__desc}>+79787408141</div>
                        </div>
                      </div>
                      <div className={styles.resume__fullRight}>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Гражданство:</div>
                          <div className={styles.resume__desc}>РФ</div>
                        </div>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Город:</div>
                          <div className={styles.resume__desc}>Симферополь</div>
                        </div>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Эл. почта:</div>
                          <div className={styles.resume__desc}>test@test@mail.ru</div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.resume__add} onClick={() => setActiveModal1(!activeModal1)}>
                      <FaPen />
                      <span>Дополнить</span>
                    </div>
                  </div>
                </div>
                <aside className={styles.resume__sidebar}>
                  <div className={styles.resume__sidebarWrapper}>
                    <Link href="/" className={styles.resume__barBlock}>
                      <h2>100</h2>
                      <span>вакансий найдено для Вас</span>
                    </Link>
                  </div>
                  <div className={styles.resume__sidebarWrapper}>
                    <Link href="/" className={styles.resume__barBlock}>
                      <h2>5</h2>
                      <span>ваши отклики</span>
                    </Link>
                  </div>
                </aside>
              </div>
              <div className={styles.resume__body}>
                <div className={styles.resume__bodyBlock}>
                  <div className={styles.resume__blockTitle}>Опыт работы</div>
                  <div className={styles.resume__blockSubTitle}>
                    Сведения о прошлом месте работы: должность, компания, период работы, функции и достижения.
                  </div>
                  <div className={styles.resume__add} onClick={() => setActiveModal3(!activeModal3)}>
                    <IoIosAddCircleOutline style={{ color: '#DA435F' }} />
                    <span>Добавить</span>
                  </div>
                </div>
                <div className={styles.resume__bodyBlock}>
                  <div className={styles.resume__blockTitle}>Образование</div>
                  <div className={styles.resume__blockSubTitle}>
                    Полученное образование: учебное заведение, специальность, курсы повышения квалификации.
                  </div>
                  <div className={styles.resume__add} onClick={() => setActiveModal3(!activeModal3)}>
                    <IoIosAddCircleOutline style={{ color: '#DA435F' }} />
                    <span>Добавить</span>
                  </div>
                </div>
                <div className={styles.resume__bodyBlock}>
                  <div className={styles.resume__blockTitle}>О себе</div>
                  <div className={styles.resume__blockSubTitle}>
                    Сведения о прошлом месте работы: должность, компания, период работы, функции и достижения.
                  </div>
                  <div className={styles.resume__add} onClick={() => setActiveModal4(!activeModal4)}>
                    <IoIosAddCircleOutline style={{ color: '#DA435F' }} />
                    <span>Добавить</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ResumeModal active={activeModal1} setActive={setActiveModal1}>
          <h2 className={styles.resume__titleModal}>Основная информация</h2>
          <form className={styles.resume__form}>
            <FieldProfile type={'text'} title={'Имя'} star={true} placeholder="Введите номер телефона" />
            <FieldProfile type={'text'} title={'Фамилия'} star={true} placeholder="Введите номер телефона" />
            <FieldProfile type={'text'} title={'Отчество'} star={true} placeholder="Введите номер телефона" />
            <FieldProfile type={'text'} title={'Должность'} star={true} placeholder="Введите номер телефона" />
            <FieldProfile type={'text'} title={'Желаемый доход'} star={true} placeholder="Введите номер телефона" />
            <FieldProfile type={'text'} title={'Дата рождения'} star={true} placeholder="Введите номер телефона" />
            <FieldProfile type={'text'} title={'Пол'} star={true} placeholder="Введите номер телефона" />
            <FieldProfile type={'text'} title={'Номер телефона'} star={true} placeholder="Введите номер телефона" />
            <FieldProfile type={'text'} title={'Гражданство'} star={true} placeholder="Введите номер телефона" />
            <FieldProfile type={'text'} title={'Город'} star={true} placeholder="Введите номер телефона" />
            <FieldProfile type={'text'} title={'Эл. почта'} star={true} placeholder="Введите номер телефона" />
          </form>
        </ResumeModal>

        <ResumeModal active={activeModal2} setActive={setActiveModal2}>
          <h2 className={styles.resume__titleModal}>Добавить место работы</h2>
        </ResumeModal>

        <ResumeModal active={activeModal3} setActive={setActiveModal3}>
          <h2 className={styles.resume__titleModal}>Добавить место учебы</h2>
        </ResumeModal>

        <ResumeModal active={activeModal4} setActive={setActiveModal4}>
          <h2 className={styles.resume__titleModal}>Добавить информацию о себе</h2>
        </ResumeModal>
      </div>
    </SiteLayout>
  )
}

export default Resume
