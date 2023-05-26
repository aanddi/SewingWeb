import style from './Choise_type.module.scss'

const Input = (props) => {
     return ( 
          <div className={style.form__block}>
            <button className={style.input__btn} type="submit" value={props.value}>{props.title}</button>
          </div>
      );
}
 
export default Input;