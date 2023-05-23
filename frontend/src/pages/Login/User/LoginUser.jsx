import './LoginUser.scss'

import { Link } from 'react-router-dom'

import logo_id from '../../../assets/Logo/logo.id.svg'

const LoginUser = () => {
     return ( 
          <div className="wrapper">
               <main className="page log-user">
                    <div className="log-user__wrapper">
                         <div className="log-user__bg">fdgfg</div>
                         <div className="log-user__content">
                              <img src={logo_id} alt="" />
                              <Link to='/'>dfgdfg</Link>
                         </div>
                    </div>
                    
               </main>
          </div>
      );
}
 
export default LoginUser;