import { Link } from 'react-router-dom'

import style from './Button__blue.module.scss'

const Button__blue = (props) => {
     return ( 
          <div className={style.btn__link}>
               <Link to='/' className={style.link}>{props.title}</Link>
          </div>
          
      );
}
 
export default Button__blue;