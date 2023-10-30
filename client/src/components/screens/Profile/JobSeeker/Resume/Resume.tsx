import { FC } from 'react'

import { MdAdd } from 'react-icons/md'
import { MdDeleteOutline } from 'react-icons/md'

import SiteLayout from '@/components/layouts/Site/SiteLayout'
import ProfileTitle from '@/components/ui/ProfileTitle/ProfileTitle'

import styles from './Resume.module.scss'

const Resume: FC = () => {
  return (
    <SiteLayout background={'#fff'}>
      <div className={styles.resume}>
        <div className="resume__container">
          <div className={styles.resume__header}>
            <ProfileTitle title={'Мое резюме'} />
            <div className={styles.resume__control}>
              <div className={[styles.resume__controlBlock, styles.resume__controlBlock_create].join(' ')}>
                <MdAdd size={20} style={{ color: '#fff' }} />
                <span>Создать</span>
              </div>
              <div className={[styles.resume__controlBlock, styles.resume__controlBlock_delete].join(' ')}>
                <MdDeleteOutline size={20} style={{ color: 'red' }} />
                <span>Удалить</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default Resume
