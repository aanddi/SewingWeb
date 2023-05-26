import {Link} from 'react-router-dom'

import style from './CoursesCard.module.scss'

import Map from '../../../../assets/Global-icon/Map.svg'
import Mark from '../../../../assets/Global-icon/mark.svg'
import Time from '../../../../assets/Courses/ico-time.svg'

import Patterns1 from '../../../../assets/Patterns/patterns_1.svg'
import PatternsRed from '../../../../assets/Patterns/pattern_red1.svg'
const CoursesCard = (props) => {
     return ( 
          <div className={style.card}>
               <Link to='/'>
                    <div className={style.card__content}>
                         <img className={style.card__patterns1} src={Patterns1} alt="" />
                         <img className={style.card__patterns2} src={PatternsRed} alt="" />


                         <div className={style.card__title}>Швея</div>
                         <div className={style.card__subTitle}>Повышения квалификации от 2 до 6 разряда</div>
                         <div className={style.card__info}>
                              <h4 className={style.card__info_green}>Онлайн</h4>
                              <h4 className={style.card__info_blue}>Очно</h4>
                         </div>
                         <div className={style.card__fullInfo}>
                              <img src={Time} alt="" />
                              <span>3 месяца</span>
                         </div>
                         <div className={style.card__fullInfo}>
                              <img src={Mark} alt="" />
                              <span>Название предприятия</span>
                         </div>
                         <div className={style.card__fullInfo}>
                              <img src={Map} alt="" />
                              <span>Симферополь, Учебный переулок 8</span>
                         </div>
                         <div className={style.card__button}>
                               <Link to='/courses/1'>Подробней</Link>
                         </div>
                         
                    </div>    
               </Link>
          </div>
     );
}
 
export default CoursesCard;