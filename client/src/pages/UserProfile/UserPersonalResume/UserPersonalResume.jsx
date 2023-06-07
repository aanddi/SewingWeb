import './UserPersonalResume.scss'

import ContainerProfile from "../components/ContainerProfile/ContainerProfile";

import Title from '../components/Tile/Tile'
import SubTitle from '../components/SubTitle/SubTitle'

import newPhoto from '../../../assets/Profile/newPhoto.svg' 
import eddit from '../../../assets/Profile/eddit.svg'
import add from '../../../assets/Profile/add.svg'

const UserPersonalResume = () => {
     return ( 
          <ContainerProfile>
               <div className="userProfile__resume resume-userProfile">
                    <Title text="Моё резюме"/>
                    <div className="resume-userProfile__content">
                         <div className="resume-userProfile__header">
                              <div className="resume-userProfile__left">
                                   <h2 className="resume-userProfile__name">Пётр Петров</h2>
                                   <div className="resume-userProfile__profefession">Конструктор</div>
                                   <div className="resume-userProfile__money">
                                        <p>Делаемый доход:</p>
                                        <span>от 50 тыс руб.</span> 
                                   </div>
                                   <div className="resume-userProfile__photo">
                                        <input type="checkbox" checked/>
                                        <h4 className='resume-userProfile__Info resume-userProfile__Info_photo'>Использовать фото SewingWeb ID</h4>
                                   </div>
                                   <div className="resume-userProfile__newPhoto">
                                       <img src={newPhoto} alt="" />
                                       <h4 className='resume-userProfile__Info'>Добавить новое фото</h4>
                                   </div>
                              </div>

                              <div className="resume-userProfile__right">
                                   <div className="resume-userProfile__block">
                                        <h4 className='resume-userProfile__Info'>Контакты:</h4>
                                        <div className="resume-userProfile__blockTitle">+79787000000</div>
                                   </div>
                                   <div className="resume-userProfile__block">
                                        <h4 className='resume-userProfile__Info'>Пол:</h4>
                                        <div className="resume-userProfile__blockTitle">мужчина</div>
                                   </div>
                                   <div className="resume-userProfile__block">
                                        <h4 className='resume-userProfile__Info'>Город:</h4>
                                        <div className="resume-userProfile__blockTitle">Симферополь</div>
                                   </div>
                                   <div className="resume-userProfile__block resume-userProfile__block_red">
                                        <img src={eddit} alt="" />
                                        <div className="resume-userProfile__blockTitle">Дополнить</div>
                                   </div>
                              </div>
                         </div>
                         <div className="resume-userProfile__body">
                              <div className="resume-userProfile__item">
                                   <div className="resume-userProfile__itemTitle">Опыт работы</div>
                                   <div className="resume-userProfile__itemSubTitle">
                                        Сведения о прошлом месте работы: должность, компания, период работы, функции и достижения.
                                   </div>
                                   <div className="resume-userProfile__itemAdd">
                                        <img src={add} alt="" />
                                        <span>Добавить</span>
                                   </div>
                              </div>
                              <div className="resume-userProfile__item">
                                   <div className="resume-userProfile__itemTitle">Образование</div>
                                   <div className="resume-userProfile__itemSubTitle">
                                        Сведения о образовании, уровень образования и ВУЗ или курсы
                                   </div>
                                   <div className="resume-userProfile__itemAdd">
                                        <img src={add} alt="" />
                                        <span>Добавить</span>
                                   </div>
                              </div>
                              <div className="resume-userProfile__item">
                                   <div className="resume-userProfile__itemTitle">О себе</div>
                                   <div className="resume-userProfile__itemSubTitle">
                                       Расскажите о себе. Ваш подробный опыт работы, ваши преимущества и качества.
                                   </div>
                                   <div className="resume-userProfile__itemAdd">
                                        <img src={add} alt="" />
                                        <span>Добавить</span>
                                   </div>
                              </div>
                              <div className="resume-userProfile__item">
                                   <div className="resume-userProfile__itemTitle">Портфолио</div>
                                   <div className="resume-userProfile__itemSubTitle">
                                        Добавьте ваше портфоли. Это поможет работодателям оценить Вас по достоинству.
                                   </div>
                                   <div className="resume-userProfile__itemAdd">
                                        <img src={add} alt="" />
                                        <span>Добавить</span>
                                   </div>
                              </div>
                         </div>

                         <div className="resume-userProfile__footer">
                              <div className="resume-userProfile__footerButton resume-userProfile__footerButton_save"><span>Сохранить</span></div>
                              <div className="resume-userProfile__footerButton resume-userProfile__footerButton_back"><span>Отменить</span></div>
                              <div className="resume-userProfile__footerButton resume-userProfile__footerButton_download"><span>Скачать резюме</span></div>
                              <div className="resume-userProfile__footerButton resume-userProfile__footerButton_delete"><span>Удалить резюме</span></div>
                         </div>

                    </div>
               </div>
          </ContainerProfile>
      );
}
 
export default UserPersonalResume;