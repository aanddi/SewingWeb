import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './AddReviews.module.scss'

import CompanyHeader from '@/components/elements/Company/CompanyHeader/CompanyHeader'
import LoadingDots from '@/components/elements/Loading/LoadingDots'
import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ErrorForm from '@/components/ui/ErrorForm/ErrorForm'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'

import { IEmployerHeader } from '@/core/services/employer/employer.interface'
import { IReviews } from '@/core/types/reviews.interface'

import { useAuth } from '@/core/hooks/useAuth'
import { ReviewsService } from '@/core/services/reviews/reviews.service'

import { FaStar } from 'react-icons/fa'

const AddReviews: FC<{ header: IEmployerHeader }> = ({ header }) => {
  const { user } = useAuth()
  const router = useRouter()
  const [activePost, setActivePost] = useState('работал(-а) раньше')
  const [gradeNumber, setGradeNumber] = useState(0)

  const [maxLength, setMaxLength] = useState(350)
  const [lengthTextArea1, setLengthTextArea1] = useState(0)
  const [lengthTextArea2, setLengthTextArea2] = useState(0)
  const [lengthTextArea3, setLengthTextArea3] = useState(0)

  const [isLoadingCreate, setIsLoadingCreate] = useState(false)

  const [errorServer, setErrorServer] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors }
  } = useForm<IReviews>({
    mode: 'onChange',
    defaultValues: {
      jobseekerId: user?.id,
      employerId: header.id
    }
  })

  useEffect(() => {
    setValue('post', activePost)
    setValue('grade', gradeNumber)
  }, [activePost, gradeNumber, setValue])

  const onSubmit: SubmitHandler<IReviews> = async data => {
    try {
      const response = await ReviewsService.create(data)
      setIsLoadingCreate(true)
      router.replace(`/company/${header.id}/reviews`)
    } catch (error: any) {
      setIsLoadingCreate(false)
      setErrorServer(error.response.data.message)
    }
  }

  const handleCancel = () => {
    // reset()
  }

  const [rating, setRating] = useState(0) // служит для подсвечивания пока не выбрана оценка

  const handleStarHover = (value: number) => {
    setRating(value)
  }

  const handleStarClick = (value: number) => {
    setGradeNumber(value)
  }

  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.addReviews}>
        <div className="addReviews__container">
          <div className={styles.addReviews__wrapper}>
            <div className={styles.addReviews__content}>
              <CompanyHeader header={header} />
              <form onSubmit={handleSubmit(onSubmit)} className={styles.addReviews__form}>
                <div className={styles.addReviews__formWrapper}>
                  <div className={styles.addReviews__formHeader}>
                    <h3 className={styles.addReviews__title}>Добавить отзыв</h3>
                    <p className={styles.addReviews__subTitle}>Это поможет другим выбрать новое место работы. Отзыв будет анонимным.</p>
                  </div>
                  <div className={styles.addReviews__grade}>
                    <div className={styles.addReviews__label}>
                      <span>Оценка предприятию</span> <span className={styles.addReviews__label_required}>*</span>
                    </div>
                    <div className={styles.addReviews__starList}>
                      {[1, 2, 3, 4, 5].map((star, index) => {
                        return (
                          <FaStar
                            key={index}
                            style={
                              gradeNumber ? { color: gradeNumber >= star ? '#F4A815' : '#C0C0C0' } : { color: rating >= star ? '#F4A815' : '#C0C0C0' }
                            }
                            size={35}
                            onMouseEnter={() => handleStarHover(star)}
                            onMouseLeave={() => handleStarHover(0)}
                            onClick={() => handleStarClick(star)}
                          />
                        )
                      })}
                    </div>
                  </div>
                  <div className={styles.addReviews__profession}>
                    <FieldProfile
                      {...register('profession', {
                        required: 'Укажите профессию'
                      })}
                      type={'text'}
                      title={'Должность'}
                      star={true}
                      placeholder="Кем вы работали?"
                      error={errors.profession?.message}
                    />
                  </div>
                  <div className={styles.addReviews__post}>
                    <div className={styles.addReviews__label}>
                      <span>Как вы взаимодействовали с предприятием</span>
                      <span className={styles.addReviews__label_required}>*</span>
                    </div>
                    <div className={styles.addReviews__choiceButtons}>
                      <div
                        onClick={() => setActivePost('работал(-а) раньше')}
                        className={
                          activePost == 'работал(-а) раньше'
                            ? [styles.addReviews__choice, styles.addReviews__choice_active].join(' ')
                            : styles.addReviews__choice
                        }
                      >
                        работал(-а) раньше
                      </div>
                      <div
                        onClick={() => setActivePost('сейчас работаю')}
                        className={
                          activePost == 'сейчас работаю'
                            ? [styles.addReviews__choice, styles.addReviews__choice_active].join(' ')
                            : styles.addReviews__choice
                        }
                      >
                        сейчас работаю
                      </div>
                      <div
                        onClick={() => setActivePost('проходил(-а) собеседование')}
                        className={
                          activePost == 'проходил(-а) собеседование'
                            ? [styles.addReviews__choice, styles.addReviews__choice_active].join(' ')
                            : styles.addReviews__choice
                        }
                      >
                        проходил(-а) собеседование
                      </div>
                    </div>
                  </div>
                  <div className={styles.addReviews__desc}>
                    <div className={styles.addReviews__textBlock}>
                      <div className={styles.addReviews__label}>
                        <span>Достоинства</span>
                      </div>
                      <textarea
                        {...register('advantages')}
                        maxLength={maxLength}
                        onChange={e => setLengthTextArea1(e.target.value.length)}
                        className={styles.addReviews__textarea}
                      />
                      <div className={styles.addReviews__maxLenght}>
                        {lengthTextArea1}
                        <span>/</span>
                        {maxLength} символов
                      </div>
                    </div>

                    <div className={styles.addReviews__textBlock}>
                      <div className={styles.addReviews__label}>
                        <span>Недостатки</span>
                      </div>

                      <textarea
                        {...register('flaws')}
                        maxLength={maxLength}
                        onChange={e => setLengthTextArea2(e.target.value.length)}
                        className={styles.addReviews__textarea}
                      />
                      <div className={styles.addReviews__maxLenght}>
                        {lengthTextArea2}
                        <span>/</span>
                        {maxLength} символов
                      </div>
                    </div>
                    <div className={styles.addReviews__textBlock}>
                      <div className={styles.addReviews__label}>
                        <span>Комментарий</span>
                      </div>
                      <textarea
                        {...register('comment')}
                        maxLength={maxLength}
                        onChange={e => setLengthTextArea3(e.target.value.length)}
                        className={styles.addReviews__textarea}
                      />
                      <div className={styles.addReviews__maxLenght}>
                        {lengthTextArea3}
                        <span>/</span>
                        {maxLength} символов
                      </div>
                    </div>
                  </div>
                  <div className={styles.addReviews__footer}>
                    <div className={styles.addReviews__buttons}>
                      <button className={[styles.addReviews__button, styles.addReviews__button_save].join(' ')}>
                        {isLoadingCreate ? <LoadingDots color="#fff" /> : 'Опубликовать отзыв'}
                      </button>
                      <div onClick={handleCancel} className={styles.addReviews__button}>
                        Отменить
                      </div>
                    </div>
                    {errorServer && <ErrorForm>{errorServer}</ErrorForm>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default AddReviews
