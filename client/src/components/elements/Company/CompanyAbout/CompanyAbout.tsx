import { useQueryClient } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import 'react-quill/dist/quill.snow.css'

import styles from './CompanyAbout.module.scss'

import ErrorForm from '@/components/ui/ErrorForm/ErrorForm'

import { IEmployer } from '@/core/types/employer.interface'

import { EmployerService } from '@/core/services/employer/employer.service'

import AboutText from '../../EditText/AboutText'

import { BiSolidEditAlt } from 'react-icons/bi'
import { IoIosAddCircleOutline } from 'react-icons/io'

const QuillNoSSRWrapper = dynamic(async () => (await import('react-quill')).default, { ssr: false })

interface Props {
  about: string | undefined
  idEmployer: number | undefined
}

const CompanyAbout: FC<Props> = ({ about, idEmployer }) => {
  const [showTextEditor, setShowTextEditor] = useState(false)
  const queryClient = useQueryClient()

  // ========== REACT HOOK FORM =============================

  // save error server
  const [errorAbout, setErrorAbout] = useState<string | null>(null)

  const { handleSubmit, reset, setValue, control } = useForm<IEmployer>({
    mode: 'onChange'
  })

  useEffect(() => {
    if (about) setValue('about', about)
  }, [about, setValue])

  const onSubmit: SubmitHandler<IEmployer> = async data => {
    try {
      if (!idEmployer) {
        setErrorAbout('Сперва заполните основную информацию о предприятии')
        return
      }
      const respone = await EmployerService.update(idEmployer, data)
      queryClient.invalidateQueries({ queryKey: ['employer'] })
      setShowTextEditor(false)
      reset()
      setErrorAbout(null)
    } catch (error: any) {
      setErrorAbout(error.message)
    }
  }

  const handleCancel = () => {
    reset({
      about: about
    })
    setErrorAbout(null)
    setShowTextEditor(false)
  }

  return (
    <div className={styles.editorAbout}>
      <div className={styles.editorAbout__about}>
        <div className={styles.editorAbout__blockTitle}>О компании</div>
        {about && about !== '<p><br></p>' ? (
          <>
            <div className={showTextEditor ? styles.editorAbout__blockNone : styles.editorAbout__aboutText}>
              <AboutText about={about} />
            </div>
            <div
              className={showTextEditor ? styles.editorAbout__blockNone : styles.editorAbout__edit}
              onClick={() => setShowTextEditor(!showTextEditor)}
            >
              <BiSolidEditAlt size={15} style={{ color: '#3490DF' }} />
              <span>Редактировать</span>
            </div>
          </>
        ) : (
          <>
            <div className={showTextEditor ? styles.editorAbout__blockNone : styles.editorAbout__blockSubTitle}>
              Напишите особенности вашего предприятия, правила, цели и достижения.
            </div>
            <div
              className={showTextEditor ? styles.editorAbout__blockNone : styles.editorAbout__add}
              onClick={() => setShowTextEditor(!showTextEditor)}
            >
              <IoIosAddCircleOutline style={{ color: '#DA435F' }} />
              <span>Добавить</span>
            </div>
          </>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={
            showTextEditor
              ? [styles.editorAbout__blockList, styles.editorAbout__blockList_active].join(' ')
              : [styles.editorAbout__blockList, styles.editorAbout__blockList_unactive].join(' ')
          }
        >
          <Controller
            name="about"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <QuillNoSSRWrapper
                value={field.value || ''} // default to an empty string if field value is null or undefined
                onChange={value => {
                  field.onChange(value) // Обновление значения поля
                }}
                modules={{
                  toolbar: [
                    [{ size: [] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['clean']
                  ]
                }}
              />
            )}
          />
          <div className={styles.editorAbout__footerControl}>
            <button className={styles.editorAbout__saveButton}>Сохранить</button>
            <span className={styles.editorAbout__resetButton} onClick={handleCancel}>
              Отмена
            </span>
            <ErrorForm>{errorAbout}</ErrorForm>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CompanyAbout
