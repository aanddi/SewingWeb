import {Link} from 'react-router-dom'

import style from './Submit.module.scss'

const Submit = (props) => {
     return ( 
          <div className={style.submit}>
               <Link className={style.submit__link} to={props.path}>{props.title}</Link>
          </div>
      );
}
 
export default Submit;