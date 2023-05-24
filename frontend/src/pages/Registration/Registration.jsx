import './Registration.scss'

import {Link} from 'react-router-dom'

import Button__grey from '../../ui/Buttons/Button__Grey/Button__grey';
import LoginNavigation from '../Login/components/LoginNavigation/LoginNavigation'
import logo_id from '../../assets/Logo/logo.id.svg'
import Input from '../../ui/Inputs/Input';
import Submit from '../../ui/Buttons/Submit/Submit';

import vk from '../../assets/Footer/icon/vk.svg'
import telegram from '../../assets/Footer/icon/telegram.svg'
import youtube from '../../assets/Footer/icon/youtube.svg'
import dzen from '../../assets/Footer/icon//dzen.svg'

const Registration = () => {
     return ( 
          <div className="wrapper">
               <main className="page log-user">
                    <div className="loguser__wrapper">

                         <div className="loguser__bg"></div>

                              <div className="loguser__content">
                                   <div className="loguser__log_container">
                                        <header className='loguser__header'>
                                             <img src={logo_id} alt="" />
                                             <Button__grey title='Назад' />
                                             
                                        </header>

                                        <div className="loguser__nav">
                                        <LoginNavigation path1='/registrationUser' path2='/registrationEmployer' />
                                        </div>
                                        <div className="loguser__title">Регистрация</div>
                                        <form action="" className="loguser__form">
                                             <Input title="Имя" />
                                             <Input title="Фамилия" />
                                             <Input title="Номер телефона" />
                                             <Input title="Пароль" type="password"/>
                                             <Input title="Повторите пароль" type="password"/>
                                             <Submit title='Войти' />
                                        </form>
                                        <div className="loguser__pas"><Link to='/loginUser'>Есть аккаунт?</Link></div>
                                        
                                        <h3 className='loguser__social'>
                                             <p>Войти с помощью:</p> 
                                             <div className="loguser__social_icon">
                                                  <a href="/">
                                                       <img src={vk} alt="Вконтакте" />
                                                  </a>
                                                  <a href="/">
                                                       <img src={telegram} alt="Телеграм" />
                                                  </a>
                                                  <a href="/">
                                                       <img src={youtube} alt="Ютуб" />
                                                  </a>
                                                  <a href="/">
                                                       <img src={dzen} alt="Дзен" />
                                                  </a>
                                             </div>
                                        </h3>
                                    </div>
                              </div> 
                    </div> 
               </main>
          </div>
      );
}
 
export default Registration;