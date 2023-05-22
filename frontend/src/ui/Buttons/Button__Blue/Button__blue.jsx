import style from './Button__blue.module.scss'

const Button__blue = (props) => {
     return ( 
          <div className={style.button}>
               <button>{props.title}</button>
          </div>
      );
}
 
export default Button__blue;