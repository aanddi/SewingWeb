import style from './UserAgreement.module.scss'

const UserAgreement = () => {
     return ( 
          <div className={style.form_agreement}>
               <input type="checkbox" id="subscribeNews" className={style.form_agreement__input} value="newsletter"/>
               <label className={style.form_agreement__text} for="subscribeNews">Я согласен с условиями <a href="#"> пользовательского соглашения </a> и <a href="#"> соглашения об обработке персональных данных </a> </label> </div>  
      );
}
 
export default UserAgreement;