import style from './Input2.module.scss'

const Input = (props) => {
     return ( 
          <div className={style.form__block}>
               <input className={style.input} type='text' placeholder={props.title}/>
          </div>
      );
}
 
export default Input;