import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select from 'react-select'

import styles from './EditEdication.module.scss'

import LoadingDots from '@/components/elements/Loading/LoadingDots'
import ResumeModal from '@/components/elements/Modal/ResumeModal/Layout/ResumeModal'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'

import { IEducation } from '@/core/types/education.interface'

import { validNumber } from '@/core/helpers/valid-field'
import { JobseekerService } from '@/core/services/jobseeker/jobseeker.service'
import { educationLevel } from '@/core/utils/select-resume-data'

interface Props {
  edication: any
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const EditEducation: FC<Props> = ({ edication, active, setActive }) => {
  // ========================================================
  const queryClient = useQueryClient()

  const mutationDelete = useMutation({
    mutationKey: ['deleteEducation'],
    mutationFn: async (id: number | undefined) => {
      const respone = await JobseekerService.deleteEducation(id)
      queryClient.invalidateQueries({ queryKey: ['education'] })
      setActive(false)
      return respone
    }
  })

  // ========== REACT HOOK FORM =============================
  const [isLoading, setIsLoading] = useState(false)

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

  useEffect(() => {
    if (edication) {
      setValue('educationLevel', edication.educationLevel)
      setValue('institutionName', edication.institutionName)
      setValue('specialization', edication.specialization)
      setValue('yearEnding', edication.yearEnding)
    }
  }, [edication, setValue])

  const onSubmit: SubmitHandler<IEducation> = async data => {
    setIsLoading(true)
    try {
      const respone = await JobseekerService.updateEducation(edication.id, data)
      queryClient.invalidateQueries({ queryKey: ['education'] })
      setActive(false)
      setIsLoading(false)
      reset()
    } catch (error: any) {
      setIsLoading(false)
      setErrorUpdate(error.response.data.message)
    }
  }

  const handleCancel = () => {
    reset()
    setActive(false)
  }
  // ========================================================
  return (
    <ResumeModal active={active} setActive={setActive}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.editModal}>
        <div className={styles.editModal__formContent}>
          <h2 className={styles.editModal__titleModal}>Редактировать информацию</h2>
          <div className={styles.editModal__block}>
            <div className={styles.editModal__label}>
              <span>Уровень образования</span>
              <span className={styles.editModal__required}>*</span>
            </div>
            <div className={styles.editModal__select}>
              <Controller
                name="educationLevel"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    classNamePrefix="custom-select"
                    options={educationLevel ? educationLevel : []}
                    isMulti={false}
                    isSearchable={false}
                    value={educationLevel ? educationLevel.find(option => option.value === field.value) : null}
                    placeholder=""
                    onChange={selectedOption => {
                      if (selectedOption) {
                        field.onChange(selectedOption.value)
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
              {errors.educationLevel && <span className={styles.editModal__error}>Укажите уровень образования</span>}
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
        <div className={styles.editModal__modalFooter}>
          <div className={styles.editModal__footerWrapper}>
            <button className={styles.editModal__saveButton}>{isLoading ? <LoadingDots color="#fff" /> : 'Сохранить'}</button>
            <div className={styles.editModal__resetButton} onClick={handleCancel}>
              Отменить
            </div>
            <span className={styles.editModal__footerError}>{errorUpdate}</span>
          </div>
          <div className={styles.editModal__deleteButton} onClick={() => mutationDelete.mutate(edication.id)}>
            {mutationDelete.isPending ? <LoadingDots color={'red'} /> : 'Удалить'}
          </div>
        </div>
      </form>
    </ResumeModal>
  )
}

export default EditEducation
