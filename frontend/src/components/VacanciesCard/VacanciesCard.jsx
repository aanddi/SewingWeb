import style from './VacanciesCard.module.scss';


import Button__blue from '../../ui/Buttons/Button__Blue/Button__blue';

import favorites from '../../assets/Home/favorites.svg';
import Mark from '../../assets/Global-icon/mark.svg'
import Map from '../../assets/Global-icon/Map.svg'
import Button__grey from '../../ui/Buttons/Button__Grey/Button__grey';

const VacanciesCard = () => {
     return ( 
          <div className={style.vacancies__card}>
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
                         <Button__blue title='Откликнуться'/>
                         <Button__grey title='Позвонить' />
                    </div>
                    
               </div>
          </div>
      );
}
 
export default VacanciesCard;