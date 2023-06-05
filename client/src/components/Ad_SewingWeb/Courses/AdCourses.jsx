import {Link} from 'react-router-dom'

import style from './AdCourses.module.scss'

import imgCourses from '../../../assets/Add/adCorses.jpg'
import imgLogo from '../../../assets/Add/logo.jpg'

const Courses = () => {
     return ( 
          <>
               <div className={style.ad__wrapper}>
                    <div className={style.ad__header_img}>
                         <img src={imgCourses} alt="" />
                    </div>
                    <div className={style.ad__body}>
                         <div className={style.ad__title}>
                              Пройдите курсы от наших партнеров 
                         </div>
                         <div className={style.ad__sub_title}>
                              Развивайтесь вместе с нами!
                         </div>
                         <div className={style.ad__button}>
                              <Link to="/courses">Список курсов</Link>
                         </div>
                    </div>
                    <div className={style.ad__bottom}>
                         <div className={style.ad_logo}>
                              <img src={imgLogo} alt="" />
                         </div>
                         <div className={style.ad__description}><span>Реклама</span></div>
                    </div>
               </div>
          </>
      );
}
 
export default Courses;