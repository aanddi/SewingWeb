import style from './Сhoice.module.scss'

const Сhoice = (props) => {
     return ( 
          <div className={style.choice}>
               <button className={style.choice__button}>{props.title}</button>
          </div>
      );
}
 
export default Сhoice;