import './Header.scss';

import { Link } from 'react-router-dom'

import logo from '../../assets/Logo/logo.svg'
import city from '../../assets/Header/icon/city.svg'

const Header = () => {
     return ( 
          <header className="header">
               <div className="header__container">
                    <div className="header__content">
                         <div className="header__left">
                              <img src={logo} alt="" className='header__logo'/>
                              <nav className="header__menu menu">
                                   <ul className="menu__list">



                                        <li className="menu__item">
                                             <Link to='/' className="menu__link">Найти работу</Link>
                                        </li>
                                        <li className="menu__item">
                                             <Link to='/employers' className="menu__link">Работодателям</Link>
                                        </li>
                                        <li className="menu__item">
                                             <Link to='/professions' className="menu__link">Профессии</Link>
                                        </li>
                                        <li className="menu__item">
                                             <Link to='/enterprises' className="menu__link">Предприятия</Link>
                                        </li>
                                        <li className="menu__item">
                                             <Link to='/courses' className="menu__link">Курсы</Link>
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
                                   <a href="">Войти</a>
                              </div>
                         </div>
                    </div>
                    
               </div>
          </header>
      );
}
 
export default Header;