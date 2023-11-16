import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './Resume.module.scss'

import AboutInfo from '@/components/elements/Modal/ResumeModal/AboutInfo/AboutInfo'
import EditEducation from '@/components/elements/Modal/ResumeModal/EditEdication/EditEdication'
import EditWorkexperience from '@/components/elements/Modal/ResumeModal/EditWorkExperience/EditWorkExperience'
import Education from '@/components/elements/Modal/ResumeModal/Education/Education'
import PersonalInfo from '@/components/elements/Modal/ResumeModal/PersonalInfo/PersonalInfo'
import WorkExperience from '@/components/elements/Modal/ResumeModal/WorkExperience/WorkExperience'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import { IEducation } from '@/core/types/education.interface'
import { IResume } from '@/core/types/resume.interface'
import { IWorkExperience } from '@/core/types/work-experience.interface'

import { useAuth } from '@/core/hooks/useAuth'
import { JobseekerService } from '@/core/services/jobseeker/jobseeker.service'
import { formatPrice } from '@/core/utils/format-price'

import { BiSolidEditAlt } from 'react-icons/bi'
import { IoIosAddCircleOutline } from 'react-icons/io'

import photo from 'public/Profiles/photoUser.svg'

const Resume: FC = () => {
  //=========================================================
  const [activeModal1, setActiveModal1] = useState(false)
  const [activeModal2, setActiveModal2] = useState(false)
  const [activeModal3, setActiveModal3] = useState(false)
  const [activeModal4, setActiveModal4] = useState(false)

  const [edicationItem, setEdicationItem] = useState(null)
  const [experienceItem, setExperienceItem] = useState(null)

  const [activeModal5, setActiveModal5] = useState(false)
  const [activeModal6, setActiveModal6] = useState(false)

  const { user } = useAuth()
  const userId = user?.id

  const { data: resume } = useQuery<IResume>({
    queryKey: ['resume', userId],
    queryFn: async () => {
      const response = await JobseekerService.getResumeByIdUser(userId)
      return response
    }
  })

  const resumeId = resume?.id

  const { data: education } = useQuery<IEducation[]>({
    queryKey: ['education'],
    queryFn: async () => {
      if (resumeId) {
        const response = await JobseekerService.getAllEducationById(resumeId)
        return response
      }
    },
    enabled: !!resumeId // Эта опция указывает, что запрос будет выполнен только если resumeId существует
  })

  const { data: experience } = useQuery<IWorkExperience[]>({
    queryKey: ['experience'],
    queryFn: async () => {
      if (resumeId) {
        const response = await JobseekerService.getAllExperienceById(resumeId)
        return response
      }
    },
    enabled: !!resumeId
  })

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
            </div>
            <div className={styles.resume__content}>
              <div className={styles.resume__mainInfo}>
                <div className={styles.resume__info}>
                  <div className={styles.resume__infoBlock}>
                    <div className={styles.resume__name}>
                      {resume?.surname} {resume?.name} {resume?.patronymic}
                      {!resume?.surname && !resume?.name && !resume?.name ? <span>ФИО не указано</span> : null}
                    </div>
                    <div className={styles.resume__post}>
                      {resume?.profession ? <span>{resume?.profession}</span> : <span>Профессия не указана</span>}
                    </div>
                    <div className={styles.resume__salary}>
                      <span>Желаемый доход:</span>{' '}
                      {resume?.salary ? <span>от {formatPrice(resume?.salary)} руб.</span> : <span>не указан</span>}
                    </div>
                  </div>
                  <div className={styles.resume__fullInfo}>
                    <div className={styles.resume__fullWrapper}>
                      <div className={styles.resume__fullLeft}>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Дата рождения:</div>
                          <div className={styles.resume__desc}>
                            {resume?.DOB ? <span>{resume?.DOB}</span> : <span>не указано</span>}
                          </div>
                        </div>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Пол:</div>
                          <div className={styles.resume__desc}>
                            {resume?.gender ? <span>{resume?.gender}</span> : <span>не указано</span>}
                          </div>
                        </div>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Номер телефона:</div>
                          <div className={styles.resume__desc}>
                            {resume?.phoneNumber ? <span>{resume?.phoneNumber}</span> : <span>не указано</span>}
                          </div>
                        </div>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Эл. почта:</div>
                          <div className={styles.resume__desc}>
                            {resume?.email ? <span>{resume?.email}</span> : <span>не указано</span>}
                          </div>
                        </div>
                      </div>
                      <div className={styles.resume__fullRight}>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Гражданство:</div>
                          <div className={styles.resume__desc}>
                            {resume?.citizenship ? <span>{resume?.citizenship}</span> : <span>не указано</span>}
                          </div>
                        </div>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Город:</div>
                          <div className={styles.resume__desc}>
                            {resume?.city ? <span>{resume?.city}</span> : <span>не указано</span>}
                          </div>
                        </div>

                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>Язык:</div>
                          <div className={styles.resume__desc}>
                            {resume?.languages ? <span>{resume?.languages}</span> : <span>не указано</span>}
                          </div>
                        </div>
                        <div className={styles.resume__fullBlock}>
                          <div className={styles.resume__label}>График работы:</div>
                          <div className={styles.resume__desc}>
                            {resume?.workTimetable ? <span>{resume?.workTimetable}</span> : <span>не указано</span>}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.resume__edit} onClick={() => setActiveModal1(!activeModal1)}>
                      <BiSolidEditAlt size={15} style={{ color: '#3490DF' }} />
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
                  <div className={styles.resume__blockList}>
                    {experience && experience?.length > 0 ? (
                      experience ? (
                        experience.map((elem, index) => {
                          return (
                            <div key={index} className={styles.resume__blockItem}>
                              <div className={styles.resume__blockContent}>
                                <div className={styles.resume__experienceBlock}>
                                  <div className={styles.resume__experiencePost}>{elem.post}</div>
                                  <p className={styles.resume__experienceGroupe}>
                                    {elem.company}, {elem.city}
                                  </p>
                                </div>
                                <div className={styles.resume__experienceTime}>
                                  {elem.startTime} - {elem.untilNow ? 'настоящее время' : elem.endTime}
                                </div>
                                <p className={styles.resume__experienceText}>{elem.experience}</p>
                              </div>
                              <div className={styles.resume__edit}>
                                <BiSolidEditAlt size={15} style={{ color: '#3490DF' }} />
                                <div
                                  onClick={async () => {
                                    const response = await JobseekerService.getExperienceById(elem.id)
                                    setExperienceItem(response)
                                    setActiveModal6(true)
                                  }}
                                >
                                  Редактировать
                                </div>
                              </div>
                            </div>
                          )
                        })
                      ) : null
                    ) : (
                      <div className={styles.resume__blockSubTitle}>
                        Сведения о прошлом месте работы: должность, компания, период работы, функции и достижения.
                      </div>
                    )}
                  </div>
                  <div className={styles.resume__add} onClick={() => setActiveModal2(!activeModal2)}>
                    <IoIosAddCircleOutline style={{ color: '#DA435F' }} />
                    <span>Добавить</span>
                  </div>
                </div>

                <div className={styles.resume__bodyBlock}>
                  <div className={styles.resume__blockTitle}>Образование</div>
                  <div className={styles.resume__blockList}>
                    {education && education?.length > 0 ? (
                      education ? (
                        education.map((elem, index) => {
                          return (
                            <div className={styles.resume__blockItem} key={index}>
                              <div className={styles.resume__blockContent}>
                                <div className={styles.resume__educationBlock}>
                                  <p className={styles.resume__educationLevel}>{elem.educationLevel}</p>
                                  <p>{elem.institutionName}</p>
                                </div>
                                <div className={styles.resume__educationBlock}>
                                  <p className={styles.resume__educationYear}>Год выпуска: {elem.yearEnding}</p>
                                  <p>{elem.specialization}</p>
                                </div>
                              </div>
                              <div className={styles.resume__edit}>
                                <BiSolidEditAlt size={15} style={{ color: '#3490DF' }} />
                                <div
                                  className=""
                                  onClick={async () => {
                                    const response = await JobseekerService.getEducationById(elem.id)
                                    setEdicationItem(response)
                                    setActiveModal5(true)
                                  }}
                                >
                                  Редактировать
                                </div>
                              </div>
                            </div>
                          )
                        })
                      ) : null
                    ) : (
                      <div className={styles.resume__blockSubTitle}>
                        Полученное образование: учебное заведение, специальность, курсы повышения квалификации.
                      </div>
                    )}
                  </div>

                  <div className={styles.resume__add} onClick={() => setActiveModal3(!activeModal3)}>
                    <IoIosAddCircleOutline style={{ color: '#DA435F' }} />
                    <span>Добавить</span>
                  </div>
                </div>

                <div className={styles.resume__about}>
                  <div className={styles.resume__blockTitle}>О себе</div>
                  {resume?.about ? (
                    <>
                      <p className={styles.resume__textAbout}>{resume?.about}</p>
                      <div className={styles.resume__edit} onClick={() => setActiveModal4(!activeModal4)}>
                        <BiSolidEditAlt size={15} style={{ color: '#3490DF' }} />
                        <span>Редактировать</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.resume__blockSubTitle}>
                        Сведения о прошлом месте работы: должность, компания, период работы, функции и достижения.
                      </div>
                      <div className={styles.resume__add} onClick={() => setActiveModal4(!activeModal4)}>
                        <IoIosAddCircleOutline style={{ color: '#DA435F' }} />
                        <span>Добавить</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <PersonalInfo resume={resume} active={activeModal1} setActive={setActiveModal1} />
        <WorkExperience resumeId={resume?.id} active={activeModal2} setActive={setActiveModal2} />
        <Education resumeId={resume?.id} active={activeModal3} setActive={setActiveModal3} />
        <AboutInfo about={resume?.about} active={activeModal4} setActive={setActiveModal4} />

        <EditEducation edication={edicationItem} active={activeModal5} setActive={setActiveModal5} />
        <EditWorkexperience experience={experienceItem} active={activeModal6} setActive={setActiveModal6} />
      </div>
    </SiteLayout>
  )
}

export default Resume
