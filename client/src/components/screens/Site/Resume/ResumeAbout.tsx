import Image from 'next/image'
import { FC } from 'react'

import styles from './ResumeAbout.module.scss'

import SiteLayout from '@/components/layouts/Site/SiteLayout'

import { ResumeAboutResponse } from '@/core/services/jobseeker/jobseeker.interface'

import { formatDate } from '@/core/utils/format-date'
import { formatPrice } from '@/core/utils/format-price'

import { BiSolidEditAlt } from 'react-icons/bi'
import { IoIosAddCircleOutline } from 'react-icons/io'

import photo from 'public/Profiles/photoUser.svg'

const ResumeAbout: FC<ResumeAboutResponse> = ({ resume, experience, education }) => {
  return (
    <>
      <SiteLayout>
        <div className={styles.resumePage}>
          <div className="resumePage__container">
            <div className={styles.resumePage__wrapper}>
              <div className={styles.resumePage__photo}>
                <Image width={120} src={photo} alt={'Фото'} />
              </div>
              <div className={styles.resumePage__content}>
                <div className={styles.resumePage__mainInfo}>
                  <div className={styles.resumePage__info}>
                    <div className={styles.resumePage__infoBlock}>
                      <div className={styles.resumePage__name}>
                        {resume.surname} {resume.name} {resume.patronymic}
                      </div>
                      <div className={styles.resumePage__post}>
                        {resume?.profession ? <span>{resume?.profession}</span> : <span>Профессия не указана</span>}
                      </div>
                      <div className={styles.resumePage__salary}>
                        <span>Желаемый доход:</span> {resume?.salary ? <span>от {formatPrice(resume?.salary)} руб.</span> : <span>не указан</span>}
                      </div>
                    </div>
                    <div className={styles.resumePage__fullInfo}>
                      <div className={styles.resumePage__fullWrapper}>
                        <div className={styles.resumePage__fullLeft}>
                          <div className={styles.resumePage__fullBlock}>
                            <div className={styles.resumePage__label}>Дата рождения:</div>
                            <div className={styles.resumePage__desc}>{resume?.DOB ? <span>{resume?.DOB}</span> : <span>не указано</span>}</div>
                          </div>
                          <div className={styles.resumePage__fullBlock}>
                            <div className={styles.resumePage__label}>Пол:</div>
                            <div className={styles.resumePage__desc}>{resume?.gender ? <span>{resume?.gender}</span> : <span>не указано</span>}</div>
                          </div>
                          <div className={styles.resumePage__fullBlock}>
                            <div className={styles.resumePage__label}>Номер телефона:</div>
                            <div className={styles.resumePage__desc}>
                              {resume?.phoneNumber ? <span>{resume?.phoneNumber}</span> : <span>не указано</span>}
                            </div>
                          </div>
                          <div className={styles.resumePage__fullBlock}>
                            <div className={styles.resumePage__label}>График работы:</div>
                            <div className={styles.resumePage__desc}>
                              {resume?.workTimetable ? <span>{resume?.workTimetable}</span> : <span>не указано</span>}
                            </div>
                          </div>
                        </div>

                        <div className={styles.resumePage__fullRight}>
                          <div className={styles.resumePage__fullBlock}>
                            <div className={styles.resumePage__label}>Эл. почта:</div>
                            <div className={styles.resumePage__desc}>{resume?.email ? <span>{resume?.email}</span> : <span>не указано</span>}</div>
                          </div>
                          <div className={styles.resumePage__fullBlock}>
                            <div className={styles.resumePage__label}>Гражданство:</div>
                            <div className={styles.resumePage__desc}>
                              {resume?.citizenship ? <span>{resume?.citizenship}</span> : <span>не указано</span>}
                            </div>
                          </div>
                          <div className={styles.resumePage__fullBlock}>
                            <div className={styles.resumePage__label}>Город:</div>
                            <div className={styles.resumePage__desc}>{resume?.city ? <span>{resume?.city}</span> : <span>не указано</span>}</div>
                          </div>

                          <div className={styles.resumePage__fullBlock}>
                            <div className={styles.resumePage__label}>Язык:</div>
                            <div className={styles.resumePage__desc}>
                              {resume?.languages ? <span>{resume?.languages}</span> : <span>не указано</span>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {resume.updatedAt ? <div className={styles.resumePage__updateDate}>Резюме обновлено: {formatDate(resume.updatedAt)}</div> : null}

                <div className={styles.resumePage__body}>
                  <div className={styles.resumePage__bodyBlock}>
                    <div className={styles.resumePage__blockTitle}>Опыт работы</div>
                    <div className={styles.resumePage__blockList}>
                      {experience && experience?.length > 0 ? (
                        experience ? (
                          experience.map((elem, index) => {
                            return (
                              <div key={index} className={styles.resumePage__blockItem}>
                                <div className={styles.resumePage__blockContent}>
                                  <div className={styles.resumePage__experienceBlock}>
                                    <div className={styles.resumePage__experiencePost}>{elem.post}</div>
                                    <p className={styles.resumePage__experienceGroupe}>
                                      {elem.company}, {elem.city}
                                    </p>
                                  </div>
                                  <div className={styles.resumePage__experienceTime}>
                                    {elem.startTime} - {elem.untilNow ? 'настоящее время' : elem.endTime}
                                  </div>
                                  <p className={styles.resumePage__experienceText}>{elem.experience}</p>
                                </div>
                              </div>
                            )
                          })
                        ) : null
                      ) : (
                        <div className={styles.resumePage__blockSubTitle}>не указано</div>
                      )}
                    </div>
                  </div>

                  <div className={styles.resumePage__bodyBlock}>
                    <div className={styles.resumePage__blockTitle}>Образование</div>
                    <div className={styles.resumePage__blockList}>
                      {education && education?.length > 0 ? (
                        education ? (
                          education.map((elem, index) => {
                            return (
                              <div className={styles.resumePage__blockItem} key={index}>
                                <div className={styles.resumePage__blockContent}>
                                  <div className={styles.resumePage__educationBlock}>
                                    <p className={styles.resumePage__educationLevel}>{elem.educationLevel}</p>
                                    <p>{elem.institutionName}</p>
                                  </div>
                                  <div className={styles.resumePage__educationBlock}>
                                    <p className={styles.resumePage__educationYear}>Год выпуска: {elem.yearEnding}</p>
                                    <p>{elem.specialization}</p>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        ) : null
                      ) : (
                        <div className={styles.resumePage__blockSubTitle}>не указано</div>
                      )}
                    </div>
                  </div>

                  <div className={styles.resumePage__about}>
                    <div className={styles.resumePage__blockTitle}>О себе</div>
                    {resume?.about ? (
                      <>
                        <p className={styles.resumePage__textAbout}>{resume?.about}</p>
                      </>
                    ) : (
                      <>
                        <div className={styles.resumePage__blockSubTitle}>не указано</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SiteLayout>
    </>
  )
}

export default ResumeAbout
