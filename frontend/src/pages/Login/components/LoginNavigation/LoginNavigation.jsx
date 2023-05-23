import {NavLink} from 'react-router-dom'

import './LoginNavigation.scss'

const LoginNavigation = () => {
     return ( 

          <div className="navigation">
               <NavLink className="navigation__link_user" to='/loguser'>Я соискатель</NavLink>
               <NavLink className="navigation__link_employer" to='/logemployer'>Я работодатель</NavLink>
          </div>
      );
}
 
export default LoginNavigation;