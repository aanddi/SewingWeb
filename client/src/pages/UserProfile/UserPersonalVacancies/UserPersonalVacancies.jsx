import ContainerProfile from '../components/ContainerProfile/ContainerProfile'
import Title from '../components/Tile/Tile'
import VacanciesCard from '../../Home/components/VacanciesCard/VacanciesCard'

import './UserPersonalVacancies.scss'

const UserPersonalVacancies = () => {
     return ( 
          <ContainerProfile> 
                <div className="userProfile__vacancies vacancies-userProfile">
                    <Title text="Избранные вакансии"/>
                    <div className="vacancies-userProfile__vacanciesList">
                         <VacanciesCard />
                         <VacanciesCard />
                         <VacanciesCard />
                    </div>
                </div>
          </ContainerProfile>
      );
}
 
export default UserPersonalVacancies;