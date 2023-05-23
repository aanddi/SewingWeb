import './Vacancies.scss'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import Button__blue from '../../ui/Buttons/Button__Blue/Button__blue';
import Button__grey from '../../ui/Buttons/Button__Grey/Button__grey';

import VacanciesCard from '../../pages/Home/components/VacanciesCard/VacanciesCard'

import favorites from '../../assets/Home/favorites.svg';
import Mark from '../../assets/Global-icon/mark.svg'
import Star from '../../assets/Global-icon/star.svg'
import Ad from '../../components/Ad/Ad'

const Vacancies = () => {
     return ( 
          
     <div className="wrapper">
           <Header />
               <main className='page vacancies'>
                    <div className='vacancies__container'>

                         <div className="vacancies__content">
                              <div className="vacancies__left left">
                                   <div className="left__bigtitle">Швея</div>
                                   <div className="left__header">
                                        <div className="left__star">
                                             <img src={favorites} alt="" />
                                             <span>Добавить в избраное</span> 
                                        </div>
                                        <div className="left__date">Вакансия опубликована 18.01.2023</div>
                                   </div>
                                   <div className="left__content content">
                                        <div className="content__block">
                                             <div className="content__title">Ключевые навыки</div>
                                        </div>
                                        <div className="content__block">
                                             <div className="content__title">Расположение</div>
                                        </div>
                                        <div className="content__block">
                                             <div className="content__title">О нас</div>
                                             <p>
                                                  Набираем как на постоянную работу, так и на подработку. 
                                                  Просторный, светлый цех с высокими потолками, большими окнами, принудительной вытяжкой
                                                  и свежим ремонтом, теплое производство с самым новым автоматическим оборудованием в шаговой доступности от метро. 
                                                  Благодаря самому новому оборудованию скорость пошива изделий увеличивается на 20-30%, что выражается в вашем доходе.
                                             </p>
                                        </div>
                                        <div className="content__block">
                                             <div className="content__title"> Требования:</div>
                                             <p>
                                                  - Качество пошива;
                                                  - Знание и умение работать на промышленном швейном оборудовании; <br />
                                                  - Внимательность и добросовестность; <br />
                                                  - Рассматриваются кандидаты с опытом и без опыта работы <br />
                                             </p>
                                        </div>

                                        <div className="content__block">
                                             <div className="content__title">Условия:</div>
                                             <p>
                                                  - Комфортное и просторное швейное производство, расположенное в шаговой доступности от метро (15 мин.п), 
                                                  с новым оборудованием, ремонтом, хорошим светом и промышленными кондиционерами во всех помещениях;<br />
                                                  - Сдельная форма оплаты труда. Выплаты 2 раза в месяц без задержек.<br />
                                                  - ЗП до 150 000 руб;<br />
                                                  - предоставляем жилье;<br />
                                                  - официальное оформление;<br />
                                                  - график - 2/2, 6/1, 5/2 с 08:00 до 18:00. График работы на выбор. 
                                                  Возможна работа вахтовым методом, также подработка в удобное для вас время.Наш адрес: МО, 
                                                  Г.Люберцы, Октябрьский пр-кт, д.112, корпус 1. (15 мин.п. от м.Жулебино (выход 10)<br />
                                             </p>
                                             <p>Если вас заинтересовала наша вакансия, нажмите кнопку «Откликнуться» или свяжитесь с нами по контактному номеру телефона</p> 
                                        </div>

                                        <div className="content__block">
                                             <div className="content__title">Похожие вакансии</div>
                                             
                                        </div>
                                   </div>
                                   

                              </div>

                              <div className="vacancies__right right">
                                   <h2 className="right__title">
                                         от 30 000 руб.
                                   </h2>
                                   <div className="right__buttons">
                                        <Button__blue title='Откликнуться' path='/loguser'/>
                                        <Button__grey title='Показать номер' path='/vacancies/1'/>
                                   </div>
                                   <div className="right__company company">
                                        <div className="company__name">
                                             <img src={Mark} alt="" />
                                             <div className="company__title">ООО ТканьРФ</div>
                                        </div>
                                   <h5 className="company__vakancies">
                                        3 вакансии на сайте
                                   </h5>
                                   <div className="company__reiting">
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <span>10 отзывов</span>
                                   </div>
                                   </div>
                              </div>

                              
                         </div>
                         <section className='home__ribbon ribbon'>
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
                                        <Ad/>
                                        <Ad/>
                                        <Ad/>
                                        <Ad/>
                                   </div>
                              </div>
                    </section>
                    </div>
               </main>
          <Footer />
     </div>
      );
}
 
export default Vacancies;