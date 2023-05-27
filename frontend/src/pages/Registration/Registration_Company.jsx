import './Registration_Company.scss';

import {Link} from 'react-router-dom';

import logo_id from '../../assets/Logo/logo.id.svg';
import Button__grey from '../../ui/Buttons/Button__Grey/Button__grey';
import Input from '../../ui/Inputs/Input2';
import InputField from '../Registration/components/entry_field';
import Input_btn from '../../ui/Buttons/Choice2/Choise_type';
import Submit from '../../ui/Buttons/Submit/Submit';
import UserAgreement from '../../components/UserAgreement/UserAgreement';
import Back from '../../ui/Buttons/Back/Back';

const RegCompany = () => {
    return (
        <div className="wrapper">
            <header className='header-reg-employer'>
                <div> 
                    <img src={logo_id} alt="" /> 
                </div>
                <div>
                    <Back title='Назад' path="/"/>
                </div>
            </header>

            <main className="page reg-employer">
                <div className="reg-employer__main reg-main">
                    <div className="reg-main__reg-list reg-list">
                        <div className="reg-list__container">
                            <h1 className="reg-list__title">Регистрация компании</h1>
                            <form action="" className="reg-list__form reg-form">
                                <div className="reg-form__about-company about-block">
                                    <div className="about-block__inn-input">  
                                        <label className="about-block__inn-text"for="input"> ИНН КОМПАНИИ <span> * </span> </label>
                                        <Input id="#input" title="" /> 
                                    </div>
                                    <div className="about-block__type-input"> 
                                        <label className="about-block__type-input-text" for="input2"> Тип компании <span> * </span> </label>
                                        <div className="about-block__type-fields">
                                            <div className="about-block__inp1">
                                                <Input_btn id="input2" title="Прямой работодатель" value=""/> 
                                            </div>
                                            <Input_btn id="input2"  title="Кадровое агенство" value=""/> 
                                        </div>
                                    </div>
                                    <div className="about-block__last-input">
                                        <InputField title="Название компании" />
                                        <InputField title="Город" />
                                    </div>
                                </div>
                                <div className="reg-form__contact-persone contact-block">
                                    <h1 className='contact-block__title'>КОНТАКТНОЕ ЛИЦО (конфиденциально)</h1>
                                    <div className="contact-block__contact-fields contact-fields">
                                        <InputField title="Имя" />
                                        <InputField title="Фамилия" />
                                        <InputField title="Email" />
                                        <InputField title="Номер телефона" />
                                        <div    className="contact-fields__number2">
                                            <InputField title="Добавочный номер" />
                                        </div>
                                        <div className="contact-fields__password">
                                            <InputField title="Пароль" />
                                            <InputField title="Повторите пароль" />
                                        </div>
                                    </div>
                                </div>
                                <p>Убедитесь, что все данные заполнены верно, иначе ваша компания может не пройти модерацию!</p>
                                <UserAgreement />
                                <div className='reg-form__btn'>
                                        <Submit title='Зарегестрировать компанию' />
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default RegCompany;