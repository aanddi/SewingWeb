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
                    <div className={style.navbarProfile__name}>Пётр Петров</div>
                    <div className={style.navbarProfile__id}>ID: 123567</div>
                    <nav className={style.navbarProfile__nav}>
                         <ul className={style.navbarProfile__list}>
                              <li className={style.navbarProfile__item}>
                                   <Link to="/user/profile/id/data" 
                                        className={pathNameLocation[4] === "data" ? "active__profileNavigation" : "inactive__profileNavigation"}>
                                        Личные данные
                                   </Link>
                              </li>
                              <li className={style.navbarProfile__item}>
                                   <Link  to="/user/profile/id/resume" 
                                        className={pathNameLocation[4] === "resume" ? "active__profileNavigation" : "inactive__profileNavigation"}>
                                        Моё резюме
                                   </Link>
                              </li>
                              <li className={style.navbarProfile__item}>
                                   <Link to="/user/profile/id/responses" 
                                        className={pathNameLocation[4] === "responses" ? "active__profileNavigation" : "inactive__profileNavigation"}>
                                        Мои отклики
                                   </Link>
                              </li>
                              <li className={style.navbarProfile__item}>
                                   <Link to="/user/profile/id/reviews" 
                                        className={pathNameLocation[4] === "reviews" ? "active__profileNavigation" : "inactive__profileNavigation"}>
                                        Мои отзывы
                                   </Link>
                              </li>
                              <li className={style.navbarProfile__item}>
                                   <Link to="/user/profile/id/vacancies" 
                                        className={pathNameLocation[4] === "vacancies" ? "active__profileNavigation" : "inactive__profileNavigation"}>
                                        Избранные вакансии
                                   </Link>
                              </li>
                              <li className={style.navbarProfile__item}>
                                   <Link to="/user/profile/id/courses" 
                                        className={pathNameLocation[4] === "courses" ? "active__profileNavigation" : "inactive__profileNavigation"}>
                                        Избранные курсы
                                   </Link>
                              </li>
                              <li className={style.navbarProfile__item}>
                                   <Link to="/user/profile/id/tools"  
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