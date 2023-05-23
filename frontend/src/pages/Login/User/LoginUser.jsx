import './LoginUser.scss'

import { Link } from 'react-router-dom'

import logo_id from '../../../assets/Logo/logo.id.svg'

const LoginUser = () => {
     return ( 
          <div className="wrapper">
               <main className="page log-user">
                    <div className="log-user__wrapper">
                         <div className="loguser__bg">fdgfg</div>
                         <div className="loguser__content">
                              <div className="loguser__log_container">
                              <img src={logo_id} alt="" />
                              <Link to='/'>Назад</Link>
                              </div>

                         </div>
                    </div>
                    
               </main>
          </div>
      );
}
 
export default LoginUser;