import style from './Submit.module.scss'

const Submit = (props) => {
     return ( 
          <div className={style.submit}>
               <button className={style.submit__button}>{props.title}</button>
          </div>
      );
}
 
export default Submit;