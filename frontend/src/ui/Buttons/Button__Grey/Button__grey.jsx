import style from './Button__grey.module.scss'

const Button__grey = (props) => {
     return ( 
     <div className={style.button}>
          <button>{props.title}</button>
     </div>
      );
}
 
export default Button__grey;