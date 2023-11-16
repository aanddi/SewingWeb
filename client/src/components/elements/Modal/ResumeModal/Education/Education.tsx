import { useQueryClient } from '@tanstack/react-query'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select from 'react-select'

import styles from './Education.module.scss'

import ResumeModal from '@/components/elements/Modal/ResumeModal/Layout/ResumeModal'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'

import { IEducation } from '@/core/types/education.interface'

import { validNumber } from '@/core/helpers/valid-field'
import { JobseekerService } from '@/core/services/jobseeker/jobseeker.service'
import { educationLevel } from '@/core/utils/select-resume-data'

interface Props {
  resumeId: number | undefined
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const Education: FC<Props> = ({ resumeId, active, setActive }) => {
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
  } = useForm<IEducation>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IEducation> = async data => {
    try {
      const respone = await JobseekerService.createEducation(resumeId, data)
      queryClient.invalidateQueries({ queryKey: ['education'] })
      setActive(false)
      reset()
    } catch (error: any) {
      setErrorUpdate(error.response.data.message)
    }
  }

  const handleCancel = () => {
    reset()
    setActive(false)
  }

  return (
    <ResumeModal active={active} setActive={setActive}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.education}>
        <div className={styles.education__formContent}>
          <h2 className={styles.education__titleModal}>Добавить место учебы</h2>
          <div className={styles.education__block}>
            <div className={styles.education__label}>
              <span>Уровень образования</span>
              <span className={styles.education__required}>*</span>
            </div>
            <div className={styles.education__select}>
              <Controller
                name="educationLevel"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    classNamePrefix="custom-select"
                    options={educationLevel ? educationLevel : []}
                    value={field.value ? educationLevel.find(option => option.value === field.value) : null}
                    isMulti={false}
                    isSearchable={false}
                    placeholder=""
                    onChange={selectedOption => {
                      if (selectedOption) {
                        field.onChange(selectedOption.value) // Сохраняем только значение value
                      }
                    }}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        borderColor: errors.educationLevel ? '#EB0000' : provided.borderColor
                      })
                    }}
                  />
                )}
              />
              {errors.educationLevel && <span className={styles.education__error}>Укажите уровень образования</span>}
            </div>
          </div>
          <FieldProfile
            {...register('institutionName', {
              required: 'Укажите учебное заведение'
            })}
            type={'text'}
            title={'Учебное заведение'}
            star={true}
            error={errors.institutionName?.message}
          />
          <FieldProfile
            {...register('specialization', {
              required: 'Укажите специальализацию'
            })}
            type={'text'}
            title={'Специализация'}
            star={true}
            error={errors.specialization?.message}
          />
          <FieldProfile
            {...register('yearEnding', {
              required: 'Укажите год окончания',
              pattern: {
                value: validNumber(4),
                message: 'Некорректный формат года окончания'
              }
            })}
            type={'number'}
            title={'Год окончания'}
            star={true}
            error={errors.yearEnding?.message}
          />
        </div>
        <div className={styles.education__modalFooter}>
          <button className={styles.education__saveButton}>Сохранить</button>
          <div className={styles.education__resetButton} onClick={handleCancel}>
            Отменить
          </div>
          <span className={styles.education__footerError}>{errorUpdate}</span>
        </div>
      </form>
    </ResumeModal>
  )
}

export default Education
