import ContainerProfile from '../components/ContainerProfile/ContainerProfile'

import './UserPersonalTools.scss'

import Title from '../components/Tile/Tile'
import SubTitle from '../components/SubTitle/SubTitle'

const UserPersonalTools = () => {
     return ( 
          <ContainerProfile>
               <div className="userProfile__tools tools-userProfile">
                    <Title text="Настройки"/>
                    <div className="tools-userProfile__content">
                         <div className="tools-userProfile__block">
                              <SubTitle title="СМС-уведомления" star=""/>
                              <div className="tools-userProfile__input">
                                   <p><input type="checkbox" checked/>Новости сайта и рекламная информация</p>
                              </div>
                         </div>
                         <div className="tools-userProfile__block">
                              <SubTitle title="Почтовые рассылки" star=""/>
                              <div className="tools-userProfile__input">
                              <p><input type="checkbox" />Новости сайта и рекламная информация</p>
                              </div>
                         </div>
                         <div className="tools-userProfile__block">
                              <SubTitle title="PUSH-уведомления" star=""/>
                              <div className="tools-userProfile__input">
                                   <p><input type="checkbox" checked/>Просмотры вашего резюме</p>
                                   <p><input type="checkbox" />Приглашения на вакансию</p>
                                   <p><input type="checkbox" />Автопоиски вакансий</p>
                                   <p><input type="checkbox" />Новые вакансии, соответствующие вашему резюме</p>
                                   <p><input type="checkbox" />Оповещения и советы</p>
                                   <p><input type="checkbox" />Новости сайта и рекламная информация</p>
                              </div>
                         </div>
                    </div>
               </div>
          </ContainerProfile>
      );
}
 
export default UserPersonalTools;