import style from './SubTitle.scss'


const SubTitle = (props) => {
     return ( 
          <>
           <h3 className={props.check === 'info' ? 'subTitle-profile__title_info' : 'subTitle-profile__title'}>
               {props.title} <span className="subTitle-profile__star">{props.star}</span>
           </h3>
          
          </>
      );
}
 
export default SubTitle;