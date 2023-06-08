import style from './ContainerProfile.module.scss'

import HeaderProfile from "../HeaderProfile/HeaderProfile";
import NavbarProfile from "../NavbarProfile/NavbarProfile";

const ContainerProfile = ({children}) => {
     return ( 
          <div className={style.container}>
               <div className={style.container__navbar}>
                    <NavbarProfile />
               </div>
               
          <div className={style.container__content}>
               <HeaderProfile />
               <div className="content__containerProfile">
                    <div>{children}</div>
               </div>
          </div>
               
          </div>
      );
}
 
export default ContainerProfile;