import './Header.scss'

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
                                             <a href="/" className="menu__link">Найти работу</a>
                                        </li>
                                        <li className="menu__item">
                                             <a href="/" className="menu__link">Работодателям</a>
                                        </li>
                                        <li className="menu__item">
                                             <a href="/" className="menu__link">Профессии</a>
                                        </li>
                                        <li className="menu__item">
                                             <a href="/" className="menu__link">Предприятия</a>
                                        </li>
                                        <li className="menu__item">
                                             <a href="/" className="menu__link">Курсы</a>
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
                                   Войти
                              </div>
                         </div>
                    </div>
                    
               </div>
          </header>
      );
}
 
export default Header;