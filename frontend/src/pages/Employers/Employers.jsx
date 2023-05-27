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

const Employers = () => {
     return ( 
          <div className="wrapper">
          <Header />
               <main className='page employers'>
                    <section className='employers__top top'>
                         <div className="top__container">
                              <img src={head_line} alt="" className='top__img-line'/>
                              <img src={head_img1} alt="" className='top__img1'/>
                              <img src={head_img2} alt="" className='top__img2'/>
                              <h1 className="top__title"> Разместите вакансию на <span>SewingWeb</span></h1>
                              <h2 className="top__text-top"> Все необходимые инструменты для качественного найма </h2>
                              <div className="top__btns top-btn">
                                   <Button_red title="Разместить вакансию"/>
                                   <Button_green title="Найти резюме"/>
                                   {/* <Link className="top-btn__link1"> Разместить вакансию </Link>
                                   <Link className="top-btn__link2"> Найти резюме </Link> */}
                              </div>
                              <p className="top__text-bottom"> Вакансия — это объявление о поиске сотрудника. Опишите, кто нужен, и выбирайте лучших среди откликнувшихся. </p>
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

                    <section className='employers__money money'>
                         <div className="money__conrainer">
                              <h1>Выберите свой тариф</h1>
                              <div className="money__blocks">
                              <div className="money__block">
                                   <div className="money__titles">
                                   <h1 className="money__title">Вакансия Стандарт</h1>
                                   <h3 className="money__descript">Хороший выбор для экономии бюджета</h3>
                                   </div>
                                   <div className="money__texts">
                                   <p className="money__text">- публикация на 30 дней;</p>
                                   <p className="money__text">- отклик по телефону;</p>
                                   </div>
                                   <div className="money__btn">
                                   <Button__grey path="/loginEmployer" title='2000 руб'/>
                                   </div>
                              </div>

                              <div className="money__block">
                              <div className="money__titles">
                                   <h1 className="money__title">Вакансия <span> Pro </span></h1>
                                   <h3 className="money__descript">Лучший выбор, для быстрого найма</h3> </div>
                                   <div className="money__texts"> <p className="money__text">- публикация на 30 дней;</p>
                                   <p className="money__text">- отклик по телефону;</p>
                                   <p className="money__text-last">- продвижение в рассылке;</p>
                                   <p className="money__text-last">- автоподбор резюме;</p>
                                   </div> <div className="money__btn">
                                   <Button__grey path="/loginEmployer" title='4100 руб'/> </div>
                              </div>

                              <div className="money__block">
                              <div className="money__titles">
                                   <h1 className="money__title">Вакансия <span> Премиум <img src={star} alt="" /> </span></h1>
                                   <h3 className="money__descript">Сделайте поиск сотрудника в 10 раза эффективнее</h3> </div>
                                   <div className="money__texts"> <p className="money__text">- публикация на 30 дней;</p>
                                   <p className="money__text">- отклик по телефону;</p>
                                   <p className="money__text">- продвижение в рассылке;</p>
                                   <p className="money__text">- автоподбор резюме;</p>
                                   <p className="money__text-last">- вакансия в рекомендуемых на 7 дней;</p>
                                   <p className="money__text-last">- выделение в поиске на 7 дней;</p> </div> <div className="money__btn">
                                   <Button__grey path="/loginEmployer" title='7500 руб'/> </div>
                              </div>

                              
                              <div className="money__block-free">
                              <img className="money__free-img"src={free} alt="" />
                                   <div className="titles">
                                   <h1 className="money__title">Доступ к резюме и просмотр контактов пользователей</h1>
                                   {/* <h3 className="money__descript">Для поиска сотрудников достаточно просмотреть резюме</h3> */}
                                   </div> <div className="money__texts">
                                        <p className="money__text">- просмотр резюме соискателей;</p>
                                        <p className="money__text">- просмотр контактов соискателей;</p> 
                                        <div className="money__btn">
                                        <Button__grey path="/loginEmployer" title='0 руб'/> </div>
                                        </div> 
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