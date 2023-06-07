import './LoginUser.scss'

import {Link} from 'react-router-dom'

import Button__grey from '../../../ui/Buttons/Button__Grey/Button__grey';
import LoginNavigation from '../components/LoginNavigation/LoginNavigation'
import logo_id from '../../../assets/Logo/logo.id.svg'
import Input from '../../../ui/Inputs/Input';
import Submit from '../../../ui/Buttons/Submit/Submit';

import vk from '../../../assets/Footer/icon/vk.svg'
import telegram from '../../../assets/Footer/icon/telegram.svg'
import youtube from '../../../assets/Footer/icon/youtube.svg'
import dzen from '../../../assets/Footer/icon//dzen.svg'
import Back from '../../../ui/Buttons/Back/Back';

const LoginUser = () => {
     return ( 
          <div className="wrapper">
               <main className="page loguser">
                    <div className="loguser__wrapper">

                         <div className="loguser__bg"></div>

                              <div className="loguser__content">
                                   <div className="loguser__log_container">
                                        <header className='loguser__header'>
                                             <img src={logo_id} alt="" />
                                             <Back title='Назад' path='/'/>
                                             
                                        </header>

                                        <div className="loguser__nav">
                                                  <LoginNavigation path1='/loginUser' path2='/loginEmployer' />
                                        </div>
                                        <div className="loguser__title">Вход</div>
                                        <form action="" className="loguser__form">
                                             <Input title="Телефон или Email" />
                                             <Input title="Пароль" type="password"/>
                                             <Submit title='Войти' path="/user/profile/id/data"/>
                                        </form>
                                        <div className="loguser__pas"><h3>Забыли пароль?</h3></div>
                                        
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
                                        <div className="loguser__regist">
                                             <Link to='/registrationUser'>Зарегистрироваться</Link>
                                        </div>
                                        
                                        
                                    </div>
                              </div> 
                    </div> 
               </main>
          </div>
      );
}
 
export default LoginUser;