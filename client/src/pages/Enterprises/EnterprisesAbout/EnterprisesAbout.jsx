import './EnterprisesAbout.scss'

import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

import VacanciesCard from '../../Home/components/VacanciesCard/VacanciesCard'
import Ad from '../../../components/Ad/Ad'
import AdCourses from '../../../components/Ad_SewingWeb/Courses/AdCourses'

import Mark from '../../../assets/Global-icon/mark.svg'
import Logo from '../../../assets/Logo/LogoInterprises.svg'
import Reviews from '../../../components/Reviews/Reviews'

const EnterprisesAbout = () => {
     return ( 
          <div className="wrapper">
               <Header />
                    <main className='page enterprisesAbout'>

                         <section className="enterprisesAbout__content">
                              <div className='enterprisesAbout__container'>
                                   <div className="enterprisesAbout__header">
                                        <div className="enterprisesAbout__left">
                                             <div className="enterprisesAbout__logo">
                                                  <img src={Mark} alt="" />
                                                  <h1>ООО МИКО</h1>
                                                  <img src={Logo} alt="" />
                                             </div>
                                             <h4 className="enterprisesAbout__subLogo">Производитель профессиональной спортивной одежды</h4>
                                        </div>
                                        <div className="enterprisesAbout__right">
                                             <div className="enterprisesAbout__info">
                                                  <h5 className='enterprisesAbout__infoText'>
                                                       <span className='enterprisesAbout__infoText_bold'>Тип предприятия:</span>
                                                       <span>Ателье</span>
                                                  </h5>
                                                  
                                                  <h5 className='enterprisesAbout__infoText'>
                                                       <span className='enterprisesAbout__infoText_bold'>Сайт компании:</span>
                                                       <span><a href="">sportsfactory.ru</a></span>
                                                  </h5>
                                                 
                                                  <h5 className='enterprisesAbout__infoText'>
                                                       <span className='enterprisesAbout__infoText_bold'>Размер компании:</span>
                                                       <span>Больше 50</span>
                                                  </h5>
                                                
                                                  <h5 className='enterprisesAbout__infoText'>
                                                       <span className='enterprisesAbout__infoText_bold'>Контакты:</span>
                                                       <span>+7(916)-757-27-82</span>
                                                  </h5>
                                             </div>
                                             <div className="enterprisesAbout__connection">
                                                  <h5 className="enterprisesAbout__check">Компания проверена</h5>
                                                  <h5 className="enterprisesAbout__check">Реквизиты проверены</h5>
                                                  <div className="enterprisesAbout__link">
                                                       <a href="#">Напишите нам</a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>

                         <section className='enterprisesAbout__aboutCompany'>
                              <div className="enterprisesAbout__container">
                                   <div className="enterprisesAbout__aboutContent">
                                        <div className="enterprisesAbout__bigTitle">
                                             О компании
                                        </div>
                                        <div className="enterprisesAbout__wrapperCard">
                                             <div className="enterprisesAbout__textAbout">
                                                  <p>
                                                       Производственная компания MИKO основана в 2000 году профессиональными спортсменами, 
                                                       с центральным офисом в г.Симферополь, Крым.
                                                       MИКO официально предоставляет экипировку спортивным командам, 
                                                       являясь фаворитом у профессиональных атлетов различных видов спорта. 
                                                       В ассортименте марки одежда для эффективных тренировок и аксессуары.
                                                  </p>
                                             </div>
                                             <div className="enterprisesAbout__aboutLogo">
                                                  <img src={Logo} alt="Логотип" />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>

                         <section className="enterprisesAbout__reviewsMap">
                              <div className="enterprisesAbout__container">
                                   <div className="enterprisesAbout__contentReviewsMap">
                                        <div className="enterprisesAbout__Reviews">
                                             <div className="enterprisesAbout__bigTitle">
                                                  Отзывы
                                             </div>
                                             <Reviews />
                                        </div>
                                        <div className="enterprisesAbout__Map">
                                             <div className="enterprisesAbout__bigTitle">
                                                  Адрес
                                             </div>
                                             <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1d4d9c1c194c130a58410eb949d712316553ac943af0a52a114b4d263ab7e0f3&amp;source=constructor" 
                                                   width="570" height="305" frameborder="0">
                                             </iframe>
                                        </div>
                                   </div>
                              </div>

                         </section>

                         <section className='home__ribbon ribbon'>
                         <div className="ribbon__container">
                              <div className="enterprisesAbout__bigTitle">
                                   Вакансии
                                   </div>
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
 
export default EnterprisesAbout;




