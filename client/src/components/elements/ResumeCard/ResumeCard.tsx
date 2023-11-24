import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import styles from './ResumeCard.module.scss'

import { IResponsesResume } from '@/core/services/responses/response.interface'

import { formatPrice } from '@/core/utils/format-price'

import photo from 'public/Profiles/photoUser.svg'

interface Props {
  resume: IResponsesResume
}

const ResumeCard: FC<Props> = ({ resume }) => {
  const [resumeData, setResumeData] = useState(resume.jobseeker?.resume)

  useEffect(() => {
    setResumeData(resume.jobseeker?.resume)
  }, [resume])

  return (
    <div className={styles.resumeCard}>
      <div className={styles.resumeCard__wrapper}>
        <div className={styles.resumeCard__photo}>
          <Image src={photo} alt={'Фото'} width={100} />
          <span className={styles.resumeCard__id}>Айди резюме: {resumeData?.id}</span>
        </div>
        <div className={styles.resumeCard__content}>
          <div className={styles.resumeCard__header}>
            <div className={styles.resumeCard__infoPerson}>
              <span className={styles.resumeCard__name}>
                {resumeData?.surname} {resumeData?.name} {resumeData?.patronymic}
              </span>
              <span className={styles.resumeCard__date}>{resumeData?.DOB}</span>
            </div>
            <div className={styles.resumeCard__profession}>{resumeData?.profession}</div>
            {resumeData?.salary ? <div className={styles.resumeCard__salary}>Желаемый доход: {formatPrice(resumeData?.salary)} рублей</div> : null}
          </div>
          <div className={styles.resumeCard__contact}>
            <div className={styles.resumeCard__item}>
              <div className={styles.resumeCard__label}>Номер телефона:</div>
              <div className={styles.resumeCard__value}>{resumeData?.phoneNumber ? resumeData?.phoneNumber : 'не указано'}</div>
            </div>
            <div className={styles.resumeCard__item}>
              <div className={styles.resumeCard__label}>Эл. почта:</div>
              <div className={styles.resumeCard__value}>{resumeData?.email ? resumeData?.email : 'не указано'}</div>
            </div>
          </div>
          <div className={styles.resumeCard__desc}>{resumeData?.about}</div>
          <div className={styles.resumeCard__footer}>
            <Link target="_blank" href={`/resume/${resumeData?.id}`} className={styles.resumeCard__showMore}>
              Подбробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeCard
