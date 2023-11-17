import Image from 'next/image'
import { FC } from 'react'

import styles from './Reviews.module.scss'

import CompanyHeader from '@/components/elements/Company/CompanyHeader/CompanyHeader'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import IReviews from './Reviews.intraface'

import { FaStar } from 'react-icons/fa'

import pattern from 'public/Companies/pattern.svg'
import ad from 'public/ad/ad.png'

const Reviews: FC<IReviews> = props => {
  return (
    <SiteLayout>
      <div className={styles.reviews}>
        <div className="reviews__container">
          <div className={styles.reviews__wrapper}>
            <div className={styles.reviews__content}>
              <CompanyHeader />
              <section className={styles.reviews__block}>
                <h3 className={styles.reviews__title}>Отзывы о предприятии</h3>
                <div className={styles.reviews__contentReviews}>
                  <div className={[styles.reviews__cardReviews, styles.reviews__card].join(' ')}>
                    <div className={styles.reviews__wrapperReviews}>
                      <div className={styles.reviews__grade}>
                        <span>4.2</span>
                        <div className={styles.reviews__star}>
                          <FaStar style={{ color: '#F4A815' }} size={25} />
                          <FaStar style={{ color: '#F4A815' }} size={25} />
                          <FaStar style={{ color: '#F4A815' }} size={25} />
                          <FaStar style={{ color: '#F4A815' }} size={25} />
                          <FaStar style={{ color: '#F4A815' }} size={25} />
                        </div>
                      </div>
                      <p className={styles.reviews__desc}>На основе 103 оценок</p>
                      <p className={styles.reviews__desc}>Пользователи рекомендуют</p>
                    </div>
                  </div>
                  <div className={[styles.reviews__cardAd, styles.reviews__card].join(' ')}>
                    <Image className={styles.reviews__pattern} src={pattern} alt={' '} />
                    <div className={styles.reviews__wrapperReviews}>
                      <p className={styles.reviews__text}>Ваши отзывы помогают людям принимать взвешенные карьерные решения.</p>
                      <div className={styles.reviews__btn}>Оставить отзыв</div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles.reviews__ribbon}>
                <div className={styles.reviews__ribbonItem}>
                  <div className={styles.reviews__itemHead}>
                    <span className={styles.reviews__proffession}>Профессия,</span>
                    <span className={styles.reviews__post}>Должность</span>
                    <span className={styles.reviews__date}>5 октября</span>
                  </div>
                  <div className={styles.reviews__starBlock}>
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                  </div>
                </div>
                <div className={styles.reviews__ribbonItem}>
                  <div className={styles.reviews__itemHead}>
                    <span className={styles.reviews__proffession}>Профессия,</span>
                    <span className={styles.reviews__post}>Должность</span>
                    <span className={styles.reviews__date}>5 октября</span>
                  </div>
                  <div className={styles.reviews__starBlock}>
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                  </div>
                </div>
                <div className={styles.reviews__ribbonItem}>
                  <div className={styles.reviews__itemHead}>
                    <span className={styles.reviews__proffession}>Профессия,</span>
                    <span className={styles.reviews__post}>Должность</span>
                    <span className={styles.reviews__date}>5 октября</span>
                  </div>
                  <div className={styles.reviews__starBlock}>
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                  </div>
                </div>
                <div className={styles.reviews__ribbonItem}>
                  <div className={styles.reviews__itemHead}>
                    <span className={styles.reviews__proffession}>Профессия,</span>
                    <span className={styles.reviews__post}>Должность</span>
                    <span className={styles.reviews__date}>5 октября</span>
                  </div>
                  <div className={styles.reviews__starBlock}>
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                    <FaStar style={{ color: '#F4A815' }} size={15} />
                  </div>
                </div>
              </section>
            </div>
            <aside className={styles.reviews__aside}>
              <Image src={ad} alt={'Реклама'} />
            </aside>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default Reviews
