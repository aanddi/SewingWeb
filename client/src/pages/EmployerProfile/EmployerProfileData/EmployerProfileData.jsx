import ContainerProfile from "../components/ContainerProfile/ContainerProfile";
import SubTitle from "../components/SubTitle/SubTitle";

import Title from '../components/Tile/Tile'



const EmployerProfileData = () => {
     return ( 
          <ContainerProfile>
          <div className="userProfile__data data-userProfile">

                    <Title text="Основная информация"/>
                    <form className="data-userProfile__form form-dataUserProfile">
                         <div className="form-dataUserProfile__block">
                              <SubTitle title="ID Компании" star=""/>
                              <div className="form-dataUserProfile__input">
                                   <input type="text" placeholder="123367" disabled/>
                              </div>
                         </div>
                         <div className="form-dataUserProfile__block">
                              <SubTitle title="ИНН" star="*"/>
                              <div className="form-dataUserProfile__input">
                                   <input type="text" value="435346678573242"/>
                              </div>
                         </div>
                         <div className="form-dataUserProfile__block">
                              <SubTitle title="Название" star="*"/>
                              <div className="form-dataUserProfile__input">
                                   <input type="text" value="ООО МИКО "/>
                              </div>
                         </div>
                         <div className="form-dataUserProfile__block">
                              <SubTitle title="Адрес" star="*"/>
                              <div className="form-dataUserProfile__input">
                                   <input type="text" value="Симферополь, Учебный переулок 8"/>
                              </div>
                         </div>
                         <div className="form-dataUserProfile__block">
                              <SubTitle title="Тип компании" star="*"/>
                              <div className="form-dataUserProfile__inputRadio">
                                   <input type="radio" value="Прямой работодатель" name="type" checked/> <p>Прямой работодатель</p>  
                                   <input type="radio" value="Кадровое агенство" name="type"/> <p>Кадровое агенство</p> 
                              </div>
                         </div>
                         <div className="form-dataUserProfile__block">
                              <SubTitle title="Специализация" star="*"/>
                              <div className="form-dataUserProfile__input">
                                   <input type="text" value="Ателье"/>
                              </div>
                         </div>
                         <div className="form-dataUserProfile__block">
                              <SubTitle title="Номер телефона" star="*"/>
                              <div className="form-dataUserProfile__input">
                                   <input type="text" value="+79787000000"/>
                              </div>
                         </div>
                         <div className="form-dataUserProfile__block">
                              <SubTitle title="Е-mail" star=""/>
                              <div className="form-dataUserProfile__input">
                                   <input type="text" />
                              </div>
                         </div>
                         <div className="form-dataUserProfile__block">
                              <SubTitle title="Сайт" star=""/>
                              <div className="form-dataUserProfile__input">
                                   <input type="text" value=""/>
                              </div>
                         </div>
                         <div className="form-dataUserProfile__block">
                              <SubTitle title="Размер" star=""/>
                              <div className="form-dataUserProfile__input">
                                   <input type="text" value=""/>
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
 
export default EmployerProfileData;