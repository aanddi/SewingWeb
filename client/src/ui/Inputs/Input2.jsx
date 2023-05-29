import style from './Input2.module.scss'

const Input2 = (props) => {
     return ( 
          <div className={style.form__block}>
               <input className={style.input} type='text' placeholder={props.placeholder}/>
          </div>
      );
}
 
export default Input2;