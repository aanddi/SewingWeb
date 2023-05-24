import { Link } from 'react-router-dom'

import style from './Button__red.module.scss'

const Button__grey = (props) => {
     return ( 
          <div className={style.btn__link}>
               <Link to='/loginEmployer' className={style.link}>{props.title}</Link>
          </div>
      );
}
 
export default Button__grey;