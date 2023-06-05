import './Employers.scss'

import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Input1 from '../../ui/Inputs/Input'
import Input2 from '../../ui/Inputs/help_textarea'
import Button_red from '../../ui/Buttons/Button_Red/Button__red'
import Button_green from '../../ui/Buttons/Button_Green/Button__green'
import Button__grey from '../../ui/Buttons/Button__Grey/Button__grey';
import Button_send from '../../ui/Buttons/Send/Send'

import head_line from '../../assets/Employers/head_line.svg'
import head_img1 from '../../assets/Employers/head_img1.svg'
import head_img2 from '../../assets/Employers/head_img2.svg'
import info_str1 from '../../assets/Employers/arrow_1.svg'
import info_str2 from '../../assets/Employers/arrow_2.svg'
import star from '../../assets/Employers/star.svg'
import free from '../../assets/Employers/free.svg'

import pattern1 from '../../assets/Patterns/pattern_green_square1.svg'
import pattern2 from '../../assets/Patterns/pattern_green_square2.svg'
import pattern3 from '../../assets/Patterns/pattern_green_square3.svg'
import pattern4 from '../../assets/Patterns/pattern_green_square4.svg'

import checkMark from '../../assets/Employers/check_mark.svg'
import crossMark from '../../assets/Employers/cross_mark.svg'

const Employers = () => {
     return ( 
          <div className="wrapper">
          <Header />
               <main className='page employers'>
                    <section className='employers__top top-employers'>
                         <div className="top-employers__container">
                              <div className="top-employers__content">
                                   <h1 className="top-employers__title"> Разместите <br /> вакансию на SewingWeb</h1>
                                   <h3 className="top-employers__subTitle"> Все необходимые инструменты для качественного найма </h3>
                                   <div className="top-employers__buttons">
                                        <div className="top-employers__button top-employers__button_blue">
                                             <Link to="/"><span>Разместить вакансию</span></Link>
                                        </div>
                                        <div className="top-employers__button top-employers__button_transparent">
                                             <Link to="/"><span>Найти резюме</span></Link>
                                        </div>
                                   </div>
                                   <div className="top-employers__text-disc"> 
                                        <span>Вакансия — это объявление о поиске сотрудника. Опишите, кто нужен, и выбирайте лучших среди откликнувшихся. </span>
                                   </div>
                              </div>

                              <img src={head_line} alt="" className='top-employers__pattern top-employers__pattern_line'/>
                              <img src={head_img1} alt="" className='top-employers__pattern top-employers__pattern_img1'/>
                              <img src={head_img2} alt="" className=' top-employers__pattern top-employers__pattern_img2'/>

                         </div>
                    </section>

                    <section className='employers__info info'>
                         <div className="info__container">
                              <div className="info__title">
                                   <h1>С чего начать поиск  сотрудников?</h1>
                              </div>
                              <img src={info_str1} alt="" className='info__img1'/>
                              <img src={info_str2} alt="" className='info__img2'/>
                              <img src={pattern1} alt="" className='info__pattern1'/>
                              <img src={pattern2} alt="" className='info__pattern2'/>
                              <img src={pattern3} alt="" className='info__pattern3'/>
                              <img src={pattern4} alt="" className='info__pattern4'/>
                              <img src={pattern4} alt="" className='info__pattern5'/>
                              <div className="info__cards cards">
                                   <div className="cards__block">
                                        <h1>1.</h1>
                                        <h2>Зарегестрируйтесь</h2>
                                        <p>Откройте для себя весь функционал</p>
                                   </div>
                                   <div className="cards__block">
                                        <h1>2.</h1>
                                        <h2>Разместите вакансию</h2>
                                        <p>Получайте отклики соискателей с контактами и резюме</p>
                                   </div>
                                   <div className="cards__block">
                                        <h1>3.</h1>
                                        <h2>Выбирайте проффесионалов</h2>
                                        <p>Самостоятельно, либо из тех кто готов и хочет работать именно у вас</p>
                                   </div>
                              </div>
                         </div>
                    </section>

                    <section className='employers__money money-employers'>
                         <div className="money-employers__container">
                              <div className="money-employers__body">
                                   <div className="money-employers__title">Выберите свой тариф</div>
                                   <div className="money-employers__card">
                                        <div className="money-employers__cardItem">
                                             <div className="money-employers__cardContent">
                                                  <h2 className="money-employers__cardTitle">
                                                       Вакансия Стандарт
                                                  </h2>
                                                  <h3 className='money-employers__cardSubTitle'>
                                                       <div className="money-employers__cardSubTitleNumber">x1</div>
                                                       <div className="money-employers__cardSubTitleDescription">
                                                            обычная <br /> эффективность
                                                       </div>
                                                  </h3>
                                                  <div className="money-employers__cardList">

                                                       <div className="money-employers__cardListBlock">
                                                            <img src={checkMark} alt="" />
                                                            <p>просмотр резюме соискателей</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={checkMark} alt="" />
                                                            <p>отклик по телефону</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={crossMark} alt="" />
                                                            <p>Продвижение в рассылке</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={crossMark} alt="" />
                                                            <p>Приоритет в поиске</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={crossMark} alt="" />
                                                            <p>Автоподбор резюме</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={crossMark} alt="" />
                                                            <p>Топ поиска на 7 дней</p>
                                                       </div>
                                                  </div>
                                                  <div className="money-employers__cardFooter">
                                                       <div className="money-employers__cardFooterPrice">0 рублей</div>
                                                       <div className="money-employers__cardFooterTime">публикация на 15 дней</div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="money-employers__cardItem">
                                             <div className="money-employers__cardContent">
                                                  <h2 className="money-employers__cardTitle">
                                                       Вакансия Премиум
                                                  </h2>
                                                  <h3 className='money-employers__cardSubTitle'>
                                                       <div className="money-employers__cardSubTitleNumber money-employers_red">x3</div>
                                                       <div className="money-employers__cardSubTitleDescription money-employers_red">
                                                            в 3 раза <br /> эффективней
                                                       </div>
                                                  </h3>
                                                  <div className="money-employers__cardList">
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={checkMark} alt="" />
                                                            <p>просмотр резюме соискателей</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={checkMark} alt="" />
                                                            <p>отклик по телефону</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={checkMark} alt="" />
                                                            <p>Продвижение в рассылке</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={checkMark} alt="" />
                                                            <p>Приоритет в поиске</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={crossMark} alt="" />
                                                            <p>Автоподбор резюме</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={crossMark} alt="" />
                                                            <p>Топ поиска на 7 дней</p>
                                                       </div>
                                                  </div>
                                                  <div className="money-employers__cardFooter">
                                                       <div className="money-employers__cardFooterPrice">1990 рублей</div>
                                                       <div className="money-employers__cardFooterTime">публикация на 30 дней</div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="money-employers__cardItem">
                                             <div className="money-employers__cardContent">
                                                  <h2 className="money-employers__cardTitle">
                                                       Вакансия Pro
                                                  </h2>
                                                  <h3 className='money-employers__cardSubTitle'>
                                                       <div className="money-employers__cardSubTitleNumber money-employers_redStrong">x6</div>
                                                       <div className="money-employers__cardSubTitleDescription money-employers_redStrong">
                                                            в 6 раз <br /> эффективней
                                                       </div>
                                                  </h3>
                                                  <div className="money-employers__cardList">
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={checkMark} alt="" />
                                                            <p>просмотр резюме соискателей</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={checkMark} alt="" />
                                                            <p>отклик по телефону</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={checkMark} alt="" />
                                                            <p>Продвижение в рассылке</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={checkMark} alt="" />
                                                            <p>Приоритет в поиске</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={checkMark} alt="" />
                                                            <p>Автоподбор резюме</p>
                                                       </div>
                                                       <div className="money-employers__cardListBlock">
                                                            <img src={checkMark} alt="" />
                                                            <p>Топ поиска на 7 дней</p>
                                                       </div>
                                                  </div>
                                                  <div className="money-employers__cardFooter">
                                                       <div className="money-employers__cardFooterPrice">3990 рублей</div>
                                                       <div className="money-employers__cardFooterTime">публикация на 30 дней</div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="money-employers__button">
                                        <button>Выбрать тариф</button>
                                   </div>
                              </div>
                         </div>
                    </section>

                    <section className='employers__help help'> 
                         <div className="help__container">
                              <div className="help__title">
                                   <h1>Остались вопросы?</h1>
                              </div>
                              <div className="help__body hbody">
                                   <div className="hbody__text">
                                        <h1 className="hbody__text-title">Напишите или позвоните</h1>
                                        <p className="hbody__text-desc">Техническая поддержка и менеджеры ответят на все ваши вопросы:</p>
                                        <div className="hbody__text-contact contact">
                                             <p className="contact__text"> +7 111 111–11–11 your@mail.ru </p>
                                             <p className="contact__text2"> +7 111 111–11–11 your@mail.ru </p>
                                             <p className="contact__text"> +7 111 111–11–11 your@mail.ru </p>
                                        </div>
                                   </div>
                                        <form action='' className="help__forms form">
                                   
                                        <Input1 title="Эл. почта"/>
                                        <Input2 title="Вопрос"/>
                                        <p className="form__text">Нажимая кнопку «Отправить» вы принимаете условия <a href=""> Правил </a> и <a href="#"> Соглашения об использовании </a> сайта </p>
                                        <Button_send title="Отправить"/>
                                   </form>
                              </div>
                         </div>
                    </section>
               </main>
          <Footer />
     </div>
      );
}
 
export default Employers;