

import Button__grey from '../../../ui/Buttons/Button__Grey/Button__grey';
import LoginNavigation from '../components/LoginNavigation/LoginNavigation'
import logo_id from '../../../assets/Logo/logo.id.svg'
import Input from '../../../ui/Inputs/Input';
import Submit from '../../../ui/Buttons/Submit/Submit';


const LoginEmployer = () => {
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
                                                  <LoginNavigation/>
                                        </div>
                                        <div className="loguser__title">Вход</div>
                                        <form action="" className="loguser__form">
                                             <Input title="Телефон или Email" />
                                             <Input title="Пароль" />
                                             <Submit title='Войти' />
                                        </form>
                                        <h3 className='loguser__pas'>Забыли пароль?</h3>
                                        <h3 className='loguser__regist'>Зарегистрироваться</h3>
                                        <div className="loguser__agreement">
                                             <input type="checkbox" />
                                             <p>Я согласен с 
                                                  
                                                  <span>
                                                   условиями пользовательского соглашения 
                                                  и соглашения об обработке персональных данных
                                                  </span> 
                                             </p>
                                        </div>
                                        
                                    </div>
                              </div> 
                    </div> 
               </main>
          </div>
      );
}
 
export default LoginEmployer;