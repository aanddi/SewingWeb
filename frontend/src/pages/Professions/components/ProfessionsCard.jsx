import {Link} from 'react-router-dom'

import style from './ProfessionsCard.module.scss'

import icon from '../../../assets/Professions/ico.svg'
const ProfessionsCard = (props) => {
     return ( 
          <div className={style.card}>
               <Link to='/'>
               <div className={style.card__content}>
                    <div className={style.card__title}>
                         <h3>Швея</h3> 
                         <img className={style.card__logo} src={icon} alt="" />
                         </div>
                    <div className={style.card__price}>40.000 руб. в среднем</div>
                    <div className={style.card__vacancies}>6 вакансий</div>
                    <div className={style.card__about}>
                        <p>Швея – специалист по изготовлению изделий из
                         ткани кожи и других материалов.</p> 
                    </div>
               </div>    
               </Link>
               
          </div>
      );
}
 
export default ProfessionsCard;