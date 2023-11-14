import { useQueryClient } from '@tanstack/react-query'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select from 'react-select'

import styles from './UpdateCompany.module.scss'

import ResumeModal from '@/components/elements/Modal/ResumeModal/Layout/ResumeModal'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'

import { IEducation } from '@/core/types/education.interface'
import { IEmployer } from '@/core/types/employer.interface'

import { validNumber } from '@/core/helpers/valid-field'
import { jobseekerService } from '@/core/services/jobseeker/jobseeker.service'
import { educationLevel } from '@/core/utils/select-resume-data'
import { employerService } from '@/core/services/employer/employer.service'

interface Props {
  employer: IEmployer | undefined
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const EmployerInfo: FC<Props> = ({ employer, active, setActive }) => {
  const queryClient = useQueryClient()

  // ========== REACT HOOK FORM =============================

  // save error server
  const [errorUpdate, setErrorUpdate] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors }
  } = useForm<IEmployer>({
    mode: 'onChange'
  })

  useEffect(() => {
    if (employer) {
      setValue('companyName', employer?.companyName)
      setValue('inn', employer?.inn)
      setValue('type', employer?.type)
      setValue('registrCity', employer?.registrCity)
      setValue('size', employer?.size)
      setValue('contact', employer?.contact)
      setValue('adress', employer?.adress)
      
    }
  }, [employer, setValue])

  const onSubmit: SubmitHandler<IEmployer> = async data => {
    console.log(data)
    try {
      const respone = await employerService.update(employer?.id, data)
      queryClient.invalidateQueries({ queryKey: ['employer'] })
      setActive(false)
      reset()
    } catch (error: any) {
      setErrorUpdate(error.response.data.message)
    }
  }

  const handleCancel = () => {
    reset({
      companyName: employer?.companyName,
      inn: employer?.inn,
      type: employer?.type,
      registrCity: employer?.registrCity,
      size: employer?.size,
      contact: employer?.contact,
      adress: employer?.adress,
    })
    setActive(false)
  }

  return (
    <ResumeModal active={active} setActive={setActive}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.updateCompany}>
        <div className={styles.updateCompany__formContent}>
          <h2 className={styles.updateCompany__titleModal}>Информация о предприятии</h2>

          <FieldProfile
            {...register('companyName', {
              required: 'Укажите название предприятия'
            })}
            type={'text'}
            title={'Название предприятия'}
            star={true}
            error={errors.companyName?.message}
          />

          <FieldProfile
            {...register('inn', {
              required: 'Укажите ИНН',
              pattern: {
                value: validNumber(12),
                message: 'Введите корректный ИНН. Он должен состоять из 12 цифр.'
              }
            })}
            type={'number'}
            title={'ИНН'}
            star={true}
            error={errors.inn?.message}
          />

          <FieldProfile
            {...register('type', {
              required: 'Укажите тип предприятия'
            })}
            type={'text'}
            title={'Тип предприятия'}
            star={true}
            error={errors.type?.message}
          />

          <FieldProfile
            {...register('size', {
              required: 'Укажите размер предприятия'
            })}
            type={'number'}
            title={'Размер предприятия'}
            star={true}
            error={errors.size?.message}
          />

          <FieldProfile
            {...register('contact', {
              required: 'Укажите контакты'
            })}
            type={'text'}
            title={'Контакты'}
            star={true}
            error={errors.contact?.message}
          />

          <FieldProfile
            {...register('adress', {
              required: 'Укажите адрес'
            })}
            type={'text'}
            title={'Адрес'}
            star={true}
            error={errors.adress?.message}
          />

          <FieldProfile
            {...register('registrCity', {
            })}
            type={'text'}
            title={'Город регистрации'}
            star={false}
            error={errors.registrCity?.message}
          />
        </div>
        <div className={styles.updateCompany__modalFooter}>
          <button className={styles.updateCompany__saveButton}>Сохранить</button>
          <div className={styles.updateCompany__resetButton} onClick={handleCancel}>
            Отменить
          </div>
          <span className={styles.updateCompany__footerError}>{errorUpdate}</span>
        </div>
      </form>
    </ResumeModal>
  )
}

export default EmployerInfo
