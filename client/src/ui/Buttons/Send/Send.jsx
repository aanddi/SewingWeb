import style from '../../../ui/Buttons/Send/Send.module.scss'

const Send = (props) => {
     return ( 
          <div className={style.send}>
               <button className={style.send__button}>{props.title}</button>
          </div>
      );
}
 
export default Send;