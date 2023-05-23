import style from './VacanciesCard.module.scss';

import {Link} from 'react-router-dom'

import Button__blue from '../../../../ui/Buttons/Button__Blue/Button__blue';
import Button__grey from '../../../../ui/Buttons/Button__Grey/Button__grey';

import favorites from '../../../../assets/Home/favorites.svg';
import Mark from '../../../../assets/Global-icon/mark.svg'
import Map from '../../../../assets/Global-icon/Map.svg'

import Patterns_1 from '../../../../assets/Patterns/patterns_1.svg'
import Patterns_2 from '../../../../assets/Patterns/patterns_2.svg'

const VacanciesCard = (props) => {
     return ( 
          <div className={style.vacancies__card}>
               <img src={Patterns_1} alt="" className={style.card__patterns_top}/>
               <div className={style.content}>
                    <div className={style.card__title}>
                         <h2>Швея</h2>
                         <div className={style.card__favorites}><img src={favorites} alt="" /></div>
                         </div>
                    <div className={style.card__price}>30 000 руб.</div>
                    <div className={style.card__about}>
                         Вот уже 20 лет мы шьём чехлы для салонов автомобилей, 
                         всегда поддерживая качество на высоком уровне. 
                         В связи с этим у нас всё больше клиентов. И нашему производству требуется швея.
                    </div>
                    
                    <div className={style.card__company}>
                         <img src={Mark} alt="" />
                         <span>ООО Легпром</span> 
                    </div>

                    <div className={style.card__map}>
                         <img src={Map} alt="" />
                              <span>Симферополь, Учебный переулок 8</span> 
                    </div>

                    <div className={style.button}>
                         <Button__blue title='Откликнуться' path={props.path}/>
                         <Button__grey title='Позвонить' path={props.path}/>
                    </div>
                    
               </div>
               <img src={Patterns_2} alt="" className={style.card__patterns_bottom}/>
          </div>
      );
}
 
export default VacanciesCard;