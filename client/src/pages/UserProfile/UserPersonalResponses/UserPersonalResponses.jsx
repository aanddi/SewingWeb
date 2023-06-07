import './UserPersonalResponses.scss'

import ContainerProfile from "../components/ContainerProfile/ContainerProfile";
import Title from '../components/Tile/Tile'
import VacanciesCard from '../../Home/components/VacanciesCard/VacanciesCard'

const UserPersonalResponses = () => {
     return ( 
          <ContainerProfile>
               <div className="userProfile__responses responses-userProfile">
                    <Title text="Мои отклики"/>
                    <div className="vacancies-userProfile__vacanciesList">
                         <VacanciesCard />
                         <VacanciesCard />
                         <VacanciesCard />
                    </div>
               </div>
          </ContainerProfile>
      );
}
 
export default UserPersonalResponses;