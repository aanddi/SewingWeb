import { Link } from 'react-router-dom'

import style from './Back.module.scss'

const Back = (props) => {
     return ( 
               <div className={style.btn__link}>
                    <Link to={props.path}> 
                         <span className={style.link}>{props.title}</span>
                    </Link>
               </div>
      );
}
 
export default Back;