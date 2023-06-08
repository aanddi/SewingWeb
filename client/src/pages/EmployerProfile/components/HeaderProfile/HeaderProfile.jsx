import {Link} from 'react-router-dom'

import style from './HeaderProfile.module.scss'

import LogoId from '../../../../assets/Logo/logo.id.svg'

const HeaderProfile = () => {
     return ( 
          <header className={style.headerProfile}>
               <div className="headerProfile__containerProfile">
                    <div className={style.headerProfile__content}>
                         <div className={style.headerProfile__logo}>
                              <img src={LogoId} alt="" />
                         </div>
                         <div className={style.headerProfile__link}>
                              <Link to="/" className="">На главную</Link>
                         </div>
                    </div>
               </div>
              
          </header>
      );
}
 
export default HeaderProfile;