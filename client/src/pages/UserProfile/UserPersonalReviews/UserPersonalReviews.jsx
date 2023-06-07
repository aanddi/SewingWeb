import './UserPersonalReviews.scss'

import ContainerProfile from "../components/ContainerProfile/ContainerProfile";
import Title from '../components/Tile/Tile'

const UserPersonalReviews = () => {
     return ( 
          <ContainerProfile>
               <div className="userProfile__reviews reviews-userProfile">
                    <Title text="Мои отзывы"/>
                    <div className="reviews-userProfile__list">
                         <h3>Нет написанных отзывов</h3>
                    </div>
               </div>
          </ContainerProfile>
      );
}
 
export default UserPersonalReviews;