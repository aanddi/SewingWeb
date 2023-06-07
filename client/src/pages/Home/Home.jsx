import './Home.scss'

import { Link } from 'react-router-dom'

import AdCourses from '../../components/Ad_SewingWeb/Courses/AdCourses'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import ProfIcon from '../../assets/Professions/ico.svg'

import SearchFull from '../../components/Search/SearchFull'
import Ad from '../../components/Ad/Ad'
import VacanciesCard from './components/VacanciesCard/VacanciesCard'


const Home = () => {
     return ( 
     <div className="wrapper">
          
          <Header />
               <main className='page home'>
                    
                    <section className="home__mainScreen mainScreen-home">
                         <div className="mainScreen-home__container">
                              <div className="mainScreen-home__search">
                                   <SearchFull />
                                   <div className="mainScreen-home__employers">
                                        <Link to="/employers">Я ищу сотрудника</Link>
                                   </div>
                              </div>
                              <div className="mainScreen-home__bottom">
                                   <div className="mainScreen-home__stats">
                                        <div className="mainScreen-home__stat"><span>2103</span><br/>вакансии</div>
                                        <div className="mainScreen-home__stat"><span>1203</span><br/>резюме</div>
                                   </div>
                                   <div className="mainScreen-home__button">
                                        <div className="mainScreen-home__buttonWrap">
                                             <Link to="/loginUser">Создать резюме</Link>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>

                    <section className='home__work work-home'>
                         <div className="work-home__container">
                              <div className="work-home__content">
                                   <h2 className='work-home__title'>Работа в <span>Симферополе</span></h2>
                                   <div className="work-home__card card-professions">
                                        <div className="card-professions__item">
                                             <div className="card-professions__body">
                                                  <div className="card-professions__icon">
                                                       <img src={ProfIcon} alt="" />
                                                  </div>
                                                  <div className="card-professions__title">Швея</div>
                                                  <div className="card-professions__subTitle">10 вакансий</div>
                                             </div>
                                        </div>
                                        <div className="card-professions__item">
                                             <div className="card-professions__body">
                                                  <div className="card-professions__icon">
                                                       <img src={ProfIcon} alt="" />
                                                  </div>
                                                  <div className="card-professions__title">Швея</div>
                                                  <div className="card-professions__subTitle">10 вакансий</div>
                                             </div>
                                        </div>
                                        <div className="card-professions__item">
                                             <div className="card-professions__body">
                                                  <div className="card-professions__icon">
                                                       <img src={ProfIcon} alt="" />
                                                  </div>
                                                  <div className="card-professions__title">Швея</div>
                                                  <div className="card-professions__subTitle">10 вакансий</div>
                                             </div>
                                        </div>
                                        <div className="card-professions__item">
                                             <div className="card-professions__body">
                                                  <div className="card-professions__icon">
                                                       <img src={ProfIcon} alt="" />
                                                  </div>
                                                  <div className="card-professions__title">Швея</div>
                                                  <div className="card-professions__subTitle">10 вакансий</div>
                                             </div>
                                        </div>
                                        <div className="card-professions__item">
                                             <div className="card-professions__body">
                                                  <div className="card-professions__icon">
                                                       <img src={ProfIcon} alt="" />
                                                  </div>
                                                  <div className="card-professions__title">Швея</div>
                                                  <div className="card-professions__subTitle">10 вакансий</div>
                                             </div>
                                        </div>
                                        <div className="card-professions__item">
                                             <div className="card-professions__body">
                                                  <div className="card-professions__icon">
                                                       <img src={ProfIcon} alt="" />
                                                  </div>
                                                  <div className="card-professions__title">Швея</div>
                                                  <div className="card-professions__subTitle">10 вакансий</div>
                                             </div>
                                        </div>
                                        
                                   </div>
                                   <h4 className='work-home__link'>
                                        <Link to="/professions">Показать еще</Link>
                                   </h4>
                              </div>
                         </div>
                    </section>

                    <section className='home__ribbon ribbon'>
                         <div className="ribbon__container">
                              <div className="ribbon__content">
                                   <div className="ribbon__vacancies vacancies">
                                        <VacanciesCard path='/vacancies/2'/>
                                        <VacanciesCard path='/vacancies/2'/>
                                        <VacanciesCard path='/vacancies/1'/>
                                        <VacanciesCard path='/vacancies/2'/>
                                        <VacanciesCard path='/vacancies/2'/>
                                        <VacanciesCard path='/vacancies/1'/>
                                   </div>
                                   <div className="ribbon__ad">
                                        <AdCourses />
                                        <Ad/>
                                        <Ad/>
                                        <Ad/>
                                        <Ad/>
                                   </div>
                              </div>
                         </div>
                    </section>
                   
               </main>
         
          
          <Footer />
     </div>
      );
}
 
export default Home;