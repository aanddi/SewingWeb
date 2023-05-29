import './CoursesAbout.scss'

import {Link} from 'react-router-dom'

import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Input from '../../../ui/Inputs/Input'

import checkIcon from '../../../assets/Courses/About/checkIcon.svg'
import cross from '../../../assets/Courses/About/cross.svg'
import aboutCourses_1 from '../../../assets/Courses/About/aboutCourses_1.png'
import aboutCourses_2 from '../../../assets/Courses/About/aboutCourses_2.png'
import aboutCourses_3 from '../../../assets/Courses/About/aboutCourses_3.png'
import courses__pattern_1 from '../../../assets/Courses/About/courses__pattern_1.svg'


const CoursesAbout = () => {
     return ( 
          <div className="wrapper">
               <Header />
                    <main className='page coursesAbout'>
                         <section className="coursesAbout__header header-coursesAbout">
                              <div className='header-coursesAbout__container'>
                                   <h1 className="header-coursesAbout__bigTitle">
                                        Онлайн-курс. <br/>
                                        Cоздание одежды с нуля
                                   </h1>
                                   <div className="header-coursesAbout__subTitle">
                                        Конструирование, моделирование и 
                                        пошив 6-ти изделий по Ваши меркам. 
                                        Программа подходит для новичков
                                   </div>
                                   <div className="header-coursesAbout__link">
                                        <Link to='/'>
                                             <span>Записаться</span>
                                        </Link>
                                   </div>
                              </div>      
                         </section>

                         <section className='coursesAbout__description description-coursesAbout'>
                              <div className="description-coursesAbout__container">
                                   <div className="description-coursesAbout__card">
                                        <div className="description-coursesAbout__bitTitle">О курсе</div>
                                        <div className="description-coursesAbout__content">
                                             <div className="description-coursesAbout__cardItem">
                                                  <div className="description-coursesAbout__cardImg">
                                                       <img src={aboutCourses_1} alt="" />
                                                  </div>
                                                  <div className="description-coursesAbout__title">Все занятия в записи</div>
                                                  <div className="description-coursesAbout__subTitle">
                                                       Обучение шитью и кройке проходит в личном каминете на 
                                                       нашей собственной платформе. 
                                                       Вам не нужно скачивать 
                                                       дополнительные приложения
                                                  </div>
                                             </div>
                                             <div className="description-coursesAbout__cardItem">
                                                  <div className="description-coursesAbout__cardImg">
                                                       <img src={aboutCourses_2} alt="" />
                                                  </div>
                                                  <div className="description-coursesAbout__title">Занятия в любое время и месте</div>
                                                  <div className="description-coursesAbout__subTitle">
                                                       Курсы включают видеоуроки и конспекты (в зависимости программы обучения). 
                                                       У вас будет максимально полная информация об изучаемой области.
                                                  </div>
                                             </div>
                                             <div className="description-coursesAbout__cardItem">
                                                  <div className="description-coursesAbout__cardImg">
                                                       <img src={aboutCourses_3} alt="" />
                                                  </div>
                                                  <div className="description-coursesAbout__title">Закрепление</div>
                                                  <div className="description-coursesAbout__subTitle">
                                                       Каждый курс состоит из нескольких уроков и к каждому даётся домашнее задание, 
                                                       а также курс включает в себя финальный экзамен, направленный на проверку усвоенных знаний.
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>

                         <section className='coursesAbout__afterTraing afterTraing-coursesAbout'>
                              <div className="afterTraing-coursesAbout__container">
                                   <div className="afterTraing-coursesAbout__card">
                                        <div className="afterTraing-coursesAbout__legt">
                                             <div className="afterTraing-coursesAbout__leftImg">
                                                  <img src={courses__pattern_1} alt="" />
                                             </div>
                                        </div>
                                        <div className="afterTraing-coursesAbout__right">
                                             <div className="afterTraing-coursesAbout__rightTitle">ПОСЛЕ ОБУЧЕНИЯ</div>
                                             <p className='afterTraing-coursesAbout__rightText'>
                                                  По окончании КПК, от LegpromRF вас ожидают новые перспективы и возможности на рынке труда.  
                                                  Вы cможете получить продвижение на текущем месте работы либо найдете новую работу 
                                                  с более высокой оплатой труда и большими бенефитами.
                                             </p>
                                             <p className='afterTraing-coursesAbout__rightText'>
                                                  Кроме того, после обучения вы станете более конкурентоспособным 
                                                  на рынке труда и повысите свой статус перед потенциальными работодателями.
                                             </p>
                                             <div className="afterTraing-coursesAbout__rightLink">
                                                  <Link to="/">
                                                       <span>Посмотреть программу</span>
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>

                         <section className='coursesAbout__price price-coursesAbout'>
                              <div className="price-coursesAbout__container">
                                        <div className="price-coursesAbout__content">
                                             <div className="price-coursesAbout__title">СТОИМОСТЬ</div>
                                             <div className="price-coursesAbout__cards">

                                                  <div className="price-coursesAbout__cardItem">
                                                       <div className="price-coursesAbout__cardItemContent">
                                                            <div className="price-coursesAbout__cardTitle price-coursesAbout__cardTitle_red-small">Базовый</div>
                                                            <div className="price-coursesAbout__cardBody">
                                                            <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={checkIcon} alt="" />
                                                                      <p>Доступ к видео курсам</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={checkIcon} alt="" />
                                                                      <p>Сертификат о прохождении курса</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={cross} alt="" />
                                                                      <p>Поддержка преподавателя</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={cross} alt="" />
                                                                      <p>Закрытый чат учеников курса</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={cross} alt="" />
                                                                      <p>Разбор вопросов в прямом эфире</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={cross} alt="" />
                                                                      <p>Часовая консультация с основателем школы</p>
                                                                 </div>
                                                            </div>
                                                            <div className="price-coursesAbout__cardFooter">
                                                                 <p className="price-coursesAbout__cardFooterMonth">1 месяц</p>
                                                                 <div className="price-coursesAbout__cardFooterPrice">
                                                                      <span>2990 рублей</span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>

                                                  <div className="price-coursesAbout__cardItem">
                                                       <div className="price-coursesAbout__cardItemContent">
                                                            <div className="price-coursesAbout__cardTitle price-coursesAbout__cardTitle_red-middle">Расширенный</div>
                                                            <div className="price-coursesAbout__cardBody">
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={checkIcon} alt="" />
                                                                      <p>Доступ к видео курсам</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={checkIcon} alt="" />
                                                                      <p>Сертификат о прохождении курса</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={checkIcon} alt="" />
                                                                      <p>Поддержка преподавателя</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={checkIcon} alt="" />
                                                                      <p>Закрытый чат учеников курса</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={cross} alt="" />
                                                                      <p>Разбор вопросов в прямом эфире</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={cross} alt="" />
                                                                      <p>Часовая консультация с основателем школы</p>
                                                                 </div>
                                                            </div>
                                                            <div className="price-coursesAbout__cardFooter">
                                                                 <p className="price-coursesAbout__cardFooterMonth">3 месяца</p>
                                                                 <div className="price-coursesAbout__cardFooterPrice">
                                                                      <span>5990 рублей</span>
                                                                 </div>
                                                            </div>    
                                                       </div>
                                                  </div>

                                                  <div className="price-coursesAbout__cardItem">
                                                       <div className="price-coursesAbout__cardItemContent">
                                                            <div className="price-coursesAbout__cardTitle price-coursesAbout__cardTitle_red-big">Максимальный</div>
                                                            <div className="price-coursesAbout__cardBody">
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={checkIcon} alt="" />
                                                                      <p>Доступ к видео курсам</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={checkIcon} alt="" />
                                                                      <p>Сертификат о прохождении курса</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={checkIcon} alt="" />
                                                                      <p>Поддержка преподавателя</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={checkIcon} alt="" />
                                                                      <p>Закрытый чат учеников курса</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={checkIcon} alt="" />
                                                                      <p>Разбор вопросов в прямом эфире</p>
                                                                 </div>
                                                                 <div className="price-coursesAbout__cardBodyColumn">
                                                                      <img src={checkIcon} alt="" />
                                                                      <p>Часовая консультация с основателем школы</p>
                                                                 </div>
                                                            </div>
                                                            <div className="price-coursesAbout__cardFooter">
                                                                 <p className="price-coursesAbout__cardFooterMonth">6 месяца</p>
                                                                 <div className="price-coursesAbout__cardFooterPrice">
                                                                      <span>10990 рублей</span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>                            
                                   </div>
                         </section>

                         <section className='coursesAbout__recording recording-coursesAbout'>
                              <div className="recording-coursesAbout__gradient">
                                   <div className="recording-coursesAbout__container">
                                        <div className="recording-coursesAbout__content">
                                            

                                             <form action="" className='recording-coursesAbout__form'>
                                                  <div className="recording-coursesAbout__title">Записаться</div>
                                                  <div className="recording-coursesAbout__formInput">
                                                       <Input title='Имя'/>
                                                       <Input title='Номер телефона'/>
                                                  </div>
                                                  <div className="recording-coursesAbout__formOr">
                                                       <Link >записаться через SewingWeb ID</Link>
                                                  </div>

                                                  <div className="recording-coursesAbout__formСhoice">
                                                       <div className="recording-coursesAbout__formСhoiceButton">
                                                            <button>Базовый курс</button>
                                                            <button>Расширенный курс</button>
                                                            <button>Максимальный курс</button>
                                                       </div>
                                                  </div>

                                                  <div className="recording-coursesAbout__formSubmit">
                                                       <button>Отправить</button>
                                                  </div>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </section>
                    </main>
               <Footer />
          </div>
      );
}
 
export default CoursesAbout;