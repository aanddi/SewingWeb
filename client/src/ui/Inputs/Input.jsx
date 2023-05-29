import style from './Input.module.scss'

const Input = (props) => {
     return ( 
          <div className={style.form__block}>
               <input className={style.input} type={props.type} placeholder={props.title}/>
          </div>
      );
}
 
export default Input;