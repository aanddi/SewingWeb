import style from './VacanciesCard.module.scss';

import {Link} from 'react-router-dom'

import Button__blue from '../../../../ui/Buttons/Button__Blue/Button__blue';
import Button__grey from '../../../../ui/Buttons/Button__Grey/Button__grey';

import tagFavorites from '../../../../assets/Home/favorites.svg';
import tagStudent from '../../../../assets/Home/student.svg'
import Mark from '../../../../assets/Global-icon/mark.svg';
import Map from '../../../../assets/Global-icon/Map.svg';
import Logo from '../../../../assets/Logo/LogoInterprises.svg';


const VacanciesCard = (props) => {
     return ( 
          <div className={style.vacancies__card}>
               <div className={style.content}>
                    <div className={style.card__title}>
                         <h2>Швея</h2>
                         <div className={style.card__favorites}>
                              <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M9.95651 0C10.7939 0 11.3732 0.375777 11.6928 1.09218L13.7215 5.44045L18.4494 6.17736C19.1895 6.28623 19.6934 6.70588 19.904 7.41117C20.1152 8.11982 19.9808 8.74312 19.4729 9.26878L16.0019 12.8562L16.8343 17.8235C16.9394 18.5785 16.6595 19.2435 16.04 19.6708C15.7159 19.8943 15.3832 20 14.9791 20C14.6546 20 14.3832 19.9363 14.0739 19.7757L9.99591 17.4943L5.84142 19.8101L5.55273 19.9091C5.52737 19.9171 5.50307 19.9243 5.47868 19.9312C5.3187 19.9763 5.17071 20 5.01355 20C4.60879 20 4.27602 19.8944 3.95181 19.6708C3.32549 19.2388 3.05608 18.612 3.15946 17.8105L3.98987 12.8562L0.518778 9.2687C0.0383108 8.77187 -0.116772 8.10058 0.0885648 7.41165C0.304928 6.68293 0.832792 6.22828 1.53928 6.17798L6.27115 5.44046L8.29736 1.09562C8.6098 0.398962 9.21212 0 9.95651 0ZM9.96113 2C9.68775 2 9.48341 2.11498 9.34204 2.36188L9.29196 2.46069L7.49099 6.32276C7.38143 6.5577 7.17576 6.73137 6.92996 6.80168L6.82232 6.82536L2.5427 7.48929C2.29738 7.50676 2.13274 7.64725 2.04192 7.95314C1.96141 8.2233 1.99787 8.45806 2.14264 8.6515L2.21129 8.73186L5.29653 11.9208C5.46822 12.0982 5.55725 12.3378 5.54558 12.5813L5.53436 12.6858L4.80119 17.0563C4.75139 17.4425 4.84933 17.6719 5.1286 17.8645C5.27062 17.9625 5.39087 18 5.56764 18C5.60098 18 5.63457 17.9966 5.6745 17.9884L5.77379 17.9622L5.93424 17.9076L9.56339 15.8852C9.79916 15.7538 10.0798 15.7375 10.3266 15.8364L10.4301 15.8859L14.0303 17.9006C14.1745 17.9755 14.2747 18 14.4254 18C14.6015 18 14.7217 17.9625 14.8637 17.8645C15.0984 17.7026 15.2121 17.4852 15.2072 17.2185L15.1978 17.1012L14.4579 12.6858C14.4171 12.4422 14.4796 12.1944 14.6273 12.0004L14.6957 11.9208L17.7805 8.73239C18.0008 8.5044 18.0504 8.28636 17.9511 7.9531C17.8746 7.69685 17.7392 7.5612 17.4773 7.49995L17.373 7.48039L13.1707 6.82535C12.9146 6.78544 12.6906 6.63619 12.5548 6.41967L12.5021 6.32288L10.6927 2.44411C10.5507 2.12582 10.3523 2 9.96113 2Z"></path>
                              </svg>
                         </div>
                         </div>
                    <div className={style.card__price}>от 30 000 руб.</div>
                    <div className={style.card__about}>
                         Вот уже 20 лет мы шьём чехлы для салонов автомобилей, 
                         всегда поддерживая качество на высоком уровне. 
                         В связи с этим у нас всё больше клиентов. И нашему производству требуется швея.
                    </div>

                    <div className={style.card__tag}>
                         <div className={style.card__tagFavorites}>
                              <img src={tagFavorites} alt="" />
                              <span>Вакансия недели</span> 
                         </div>
                         <div className={style.card__student}>
                              <img src={tagStudent} alt="" />
                              <span>Студенты</span> 
                         </div>
                    </div>
                   
                    <div className={style.card__company}>
                         <img src={Mark} alt="" />
                         <Link to="/enterprises/1"><span>ООО Легпром</span> </Link>
                    </div>

                    <div className={style.card__map}>
                         <img src={Map} alt="" />
                         <span>Симферополь, Учебный переулок 8</span> 
                    </div>

                    <div className={style.card__bottom}>
                         <div className={style.button}>
                              <Button__blue title='Откликнуться' path={'/vacancies/1'}/>
                              <Button__grey title='Показать номер' path={'/vacancies/1'}/>
                         </div>
                         <div className={style.card__logo}>
                              <img src={Logo} alt="" />
                         </div>
                    </div>
               </div>
          </div>
      );
}
 
export default VacanciesCard;