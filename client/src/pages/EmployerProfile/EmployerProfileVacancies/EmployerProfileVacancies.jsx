import './EmployerProfileVacancies.scss'

import ContainerProfile from '../components/ContainerProfile/ContainerProfile'
import Title from '../components/Tile/Tile'
import VacanciesCard from '../../Home/components/VacanciesCard/VacanciesCard'

const EmployerProfileVacancies = () => {



     return ( 
          <ContainerProfile> 
          <div className="userProfile__vacancies vacancies-userProfile">
              <Title text="Вакансии компании"/>
              <div className="vacancies-userProfile__add">Добавить новую вакансию</div>
              <div className="vacancies-userProfile__vacanciesList">
                    <VacanciesCard  panel={true}/>
                    <VacanciesCard  panel={true}/>
                    <VacanciesCard  panel={true}/>
              </div>
          </div>
    </ContainerProfile>
      );
}
 
export default EmployerProfileVacancies;