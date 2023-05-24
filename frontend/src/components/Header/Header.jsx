import './Header.scss';

import { Link } from 'react-router-dom';

import { useLocation } from "react-router-dom";

import logo from '../../assets/Logo/logo_black.svg';
import city from '../../assets/Header/icon/city.svg';

const Header = () => {

     const location = useLocation();
     const { pathname } = location;
     console.log(pathname)

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
                                                  <Link to='/' className={pathname === "/" ? "active__globalNavigation" : "inactive"}>
                                                       Найти работу
                                                  </Link>
                                             </span>   
                                        </li>

                                        <li className="menu__item">
                                             <span  className="menu__link">
                                                  <Link to='/employers' className={pathname === "/employers" ? "active__globalNavigation" : "inactive"}>
                                                       Работодателям
                                                  </Link>
                                             </span>   
                                        </li>

                                        <li className="menu__item">
                                             <span  className="menu__link">
                                                  <Link to='/professions' className={pathname === "/professions" ? "active__globalNavigation" : "inactive"}>
                                                       Профессии
                                                  </Link>
                                             </span>   
                                        </li>

                                        <li className="menu__item">
                                             <span  className="menu__link">
                                                  <Link to='/enterprises' className={pathname === "/enterprises" ? "active__globalNavigation" : "inactive"}>
                                                       Предприятия
                                                  </Link>
                                             </span>   
                                        </li>

                                        <li className="menu__item">
                                             <span  className="menu__link">
                                                  <Link to='/courses' className={pathname === "/courses" ? "active__globalNavigation" : "inactive"}>
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