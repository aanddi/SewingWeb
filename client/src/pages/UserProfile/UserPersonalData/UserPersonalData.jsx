import ContainerProfile from "../components/ContainerProfile/ContainerProfile";
import SubTitle from "../components/SubTitle/SubTitle";

import Title from '../components/Tile/Tile'

import './UserPersonalData.scss'

const UserPersonalData = () => {
     return ( 
          <ContainerProfile>
               <div className="userProfile__data data-userProfile">

                         <Title text="Основная информация"/>
                         <form className="data-userProfile__form form-dataUserProfile">
                              <div className="form-dataUserProfile__block">
                                   <SubTitle title="Статус на сайте" star=""/>
                                   <select name="" id="">
                                        <option value="В активном поиске">В активном поиске работы</option>
                                        <option value="В активном поиске">Я не ищу работу</option>
                                   </select>
                              </div>

                              <div className="form-dataUserProfile__block">
                                   <SubTitle title="ID пользователя" star=""/>
                                   <div className="form-dataUserProfile__input">
                                        <input type="text" placeholder="123567" disabled/>
                                   </div>
                              </div>
                              <div className="form-dataUserProfile__block">
                                   <SubTitle title="Фамилия" star="*"/>
                                   <div className="form-dataUserProfile__input">
                                        <input type="text" value="Петров"/>
                                   </div>
                              </div>
                              <div className="form-dataUserProfile__block">
                                   <SubTitle title="Имя" star="*"/>
                                   <div className="form-dataUserProfile__input">
                                        <input type="text" value="Пётр "/>
                                   </div>
                              </div>
                              <div className="form-dataUserProfile__block">
                                   <SubTitle title="Отчество" star=""/>
                                   <div className="form-dataUserProfile__input">
                                        <input type="text" />
                                   </div>
                              </div>
                              <div className="form-dataUserProfile__block">
                                   <SubTitle title="Пол" star="*"/>
                                   <div className="form-dataUserProfile__inputRadio">
                                        <input type="radio" value="MALE" name="gender" checked/> <p>Мужчина</p>  
                                        <input type="radio" value="FEMALE" name="gender"/> <p>Женщина</p> 
                                   </div>
                              </div>
                              <div className="form-dataUserProfile__block">
                                   <SubTitle title="Дата рождения" star="*"/>
                                   <div className="form-dataUserProfile__input">
                                        <input type="text" value="12.03.1980"/>
                                   </div>
                              </div>
                              <div className="form-dataUserProfile__block">
                                   <SubTitle title="Номер телефона" star="*"/>
                                   <div className="form-dataUserProfile__input">
                                        <input type="text" value="+79787000000"/>
                                   </div>
                              </div>
                              <div className="form-dataUserProfile__block">
                                   <SubTitle title="Е-mail" star="*"/>
                                   <div className="form-dataUserProfile__input">
                                        <input type="text" />
                                   </div>
                              </div>
                              <div className="form-dataUserProfile__button">
                                   <button className="form-dataUserProfile__button_blue">Сохранить</button>
                                   <button className="form-dataUserProfile__button_grey">Отменить</button>
                              </div>
                         </form>
               </div>
                
          </ContainerProfile>
     );
}
 
export default UserPersonalData;