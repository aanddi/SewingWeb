import './Header.scss';

import { Link } from 'react-router-dom';

import { useLocation } from "react-router-dom";

import logo from '../../assets/Logo/logo_black.svg';
import city from '../../assets/Header/icon/city.svg';

const Header = () => {

     const { pathname } = useLocation();
     const pathNameLocation = pathname.split('/');

     const location = (isLocation) => {
          if (isLocation[1] === '') {
               return 'active__globalNavigation';
          } else if (isLocation[1] === 'vacancies') {
               return 'active__globalNavigation';
          } else {
               return 'inactive__globalNavigation';
          }
     }

     return ( 
          <header className="header">
               <div className="header__container">
                    <div className="header__content">
                         <div className="header__left">
                              <img src={logo} alt="" className='header__logo'/>
                              <nav className="header__menu menu">
                                   <ul className="menu__list">

                                        <li className="menu__item">
                                             <span  className="menu__link">
                                                  <Link to='/' className={location(pathNameLocation)}>
                                                       Найти работу
                                                  </Link>
                                             </span>   
                                        </li>

                                        <li className="menu__item">
                                             <span  className="menu__link">
                                                  <Link to='/employers' className={pathNameLocation[1] === "employers" ? "active__globalNavigation" : "inactive__globalNavigation"}>
                                                       Работодателям
                                                  </Link>
                                             </span>   
                                        </li>

                                        <li className="menu__item">
                                             <span  className="menu__link">
                                                  <Link to='/professions' className={pathNameLocation[1] === "professions" ? "active__globalNavigation" : "inactive__globalNavigation"}>
                                                       Профессии
                                                  </Link>
                                             </span>   
                                        </li>

                                        <li className="menu__item">
                                             <span  className="menu__link">
                                                  <Link to='/enterprises' className={pathNameLocation[1] === "enterprises" ? "active__globalNavigation" : "inactive__globalNavigation"}>
                                                       Предприятия
                                                  </Link>
                                             </span>   
                                        </li>

                                        <li className="menu__item">
                                             <span  className="menu__link">
                                                  <Link to='/courses' className={pathNameLocation[1] === "courses" ? "active__globalNavigation" : "inactive__globalNavigation"}>
                                                       Курсы
                                                  </Link>
                                             </span>   
                                        </li>

                                   </ul>
                              </nav>     
                         </div>
                         <div className="header__right">
                              <div className="header__city">
                                   <span>Город</span> 
                                   <img src={city} alt="Город" />
                              </div>
                              <div className="header__login">
                                   <Link to="/loginUser">Войти</Link>
                              </div>
                         </div>
                    </div>
                    
               </div>
          </header>
      );
}
 
export default Header;