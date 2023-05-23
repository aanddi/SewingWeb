import { Link } from 'react-router-dom'

import style from './Button__grey.module.scss'

const Button__grey = (props) => {
     return ( 
          <div className={style.btn__link}>
               <Link to='/' className={style.link}>{props.title}</Link>
          </div>
      );
}
 
export default Button__grey;