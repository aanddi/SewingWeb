import { Link } from 'react-router-dom'

import { useLocation } from "react-router-dom";

import iconProfile from '../../../../assets/Profile/iconProfile.svg'

import style from './NavbarProfile.module.scss'

const NavbarProfile = () => {

     const { pathname } = useLocation();
     const pathNameLocation = pathname.split('/');
     console.log(pathNameLocation)
     return ( 
          <div className={style.navbarProfile}>
               <div className={style.navbarProfile__content}>
                    <div className={style.navbarProfile__icon}>
                         <img src={iconProfile} alt="" />
                    </div>
                    <div className={style.navbarProfile__name}>ООО МИКО</div>
                    <div className={style.navbarProfile__id}>ID: 123327</div>
                    <nav className={style.navbarProfile__nav}>
                         <ul className={style.navbarProfile__list}>
                              <li className={style.navbarProfile__item}>
                                   <Link to="/employer/profile/id/data" 
                                        className={pathNameLocation[4] === "data" ? "active__profileNavigation" : "inactive__profileNavigation"}>
                                        Информация о компании
                                   </Link>
                              </li>
                              <li className={style.navbarProfile__item}>
                                   <Link  to="/employer/profile/id/vacancies" 
                                        className={pathNameLocation[4] === "vacancies" ? "active__profileNavigation" : "inactive__profileNavigation"}>
                                        Вакансии
                                   </Link>
                              </li>

                              <li className={style.navbarProfile__item}>
                                   <Link to="/enterprises/1" 
                                        className={pathNameLocation[4] === "page" ? "active__profileNavigation" : "inactive__profileNavigation"}>
                                        Страница компании
                                   </Link>
                              </li>
                              <li className={style.navbarProfile__item}>
                                   <Link to="/employer/profile/id/tools" 
                                        className={pathNameLocation[4] === "tools" ? "active__profileNavigation" : "inactive__profileNavigation"}>
                                        Настройки
                                   </Link>
                              </li>
                              <li className={style.navbarProfile__item}>
                                   <Link to="/"  
                                        className={style.navbarProfile__item_exit}>
                                        Выйти
                                   </Link>
                              </li>
                         </ul>
                    </nav>
               </div>
          </div>
      );
}
 
export default NavbarProfile;