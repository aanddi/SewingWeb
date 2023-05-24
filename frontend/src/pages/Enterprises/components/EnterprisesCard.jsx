import {Link} from 'react-router-dom'

import style from './EnterprisesCard.module.scss'

import Star from '../../../assets/Global-icon/star.svg'
import Logo from '../../../assets/Logo/LogoInterprises.svg'

const EnterprisesCard = () => {
     return ( 
          <div className={style.card}>
               <Link to='/'>
               <div className={style.card__content}>
                    <div className={style.card__title}>
                         <h3>Арттекс Крым</h3> 
                         <img className={style.card__logo} src={Logo} alt="" />
                    </div>
                    <div className={style.card__vacancies}>6 вакансий</div>
                    <div className={style.card__price}>Симферополь, Учебный переулок 8</div>
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