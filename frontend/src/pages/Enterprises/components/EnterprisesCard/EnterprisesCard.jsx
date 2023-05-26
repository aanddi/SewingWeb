import {Link} from 'react-router-dom'

import style from './EnterprisesCard.module.scss'

import Star from '../../../../assets/Global-icon/star.svg'
import Logo from '../../../../assets/Logo/LogoInterprises.svg'
import Mark from '../../../../assets/Global-icon/mark.svg'
import Doc from '../../../../assets/Global-icon/document.svg'
import Map from '../../../../assets/Global-icon/Map.svg'

const EnterprisesCard = (props) => {
     return ( 
          <div className={style.card}>
               <Link to='/enterprises/1'>
               <div className={style.card__content}>
                    <div className={style.card__title}>
                         <div className={style.card__name}>
                              <img src={Mark} alt="" />
                                   <h3>Арттекс Крым</h3>
                         </div> 
                         <img className={style.card__logo} src={Logo} alt="" />
                    </div>
                    <div className={style.card__vacancies}>
                         <img src={Doc} alt="" />
                         <span>6 вакансий</span> 
                    </div>
                    <div className={style.card__location}>
                         <img src={Map} alt="" />
                         <span>Симферополь, Учебный переулок 8</span>
                    </div>
                    <div className={style.card__about}>
                         <img src={Star} alt="" />
                         <img src={Star} alt="" />
                         <img src={Star} alt="" />
                         <img src={Star} alt="" />
                         <img src={Star} alt="" />
                         <span>10 отзывов</span>      
                    </div>
               </div>    
               </Link>
               
          </div>
      );
}
 
export default EnterprisesCard;