import {NavLink} from 'react-router-dom'

import './LoginNavigation.scss'

const LoginNavigation = (props) => {
     return ( 

          <div className="navigation">
               <NavLink className="navigation__link_user" to={props.path1}>Я соискатель</NavLink>
               <NavLink className="navigation__link_employer" to={props.path2}>Я работодатель</NavLink>
          </div>
      );
}
 
export default LoginNavigation;