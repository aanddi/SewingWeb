import style from './help_textarea.module.scss'

const Input = (props) => {
    return ( 
         <div className={style.form__block}>
              <textarea className={style.form__area} type="text" placeholder={props.title}/>
         </div>
     );
}

export default Input;