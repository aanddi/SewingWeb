import './Enterprises.scss'

import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

import Choice from '../../../ui/Buttons/Сhoice/Сhoice'
import EnterprisesCard from '../components/EnterprisesCard/EnterprisesCard'

const Enterprises = () => {
     return ( 
          <div className="wrapper">
          <Header />
               <main className='page enterprises'>
                    <div className='enterprises__container'>
                         <div className="enterprises__header">
                              <div className="enterprises__left">
                                   <div className="enterprises__title">Предприятия</div>
                                   <div className="enterprises__search">
                                        <input type="text" placeholder="Предприятие или город"/>
                                        <div className='enterprises__btn'>
                                             <button>
                                                  Найти
                                             </button>
                                        </div>
                                   </div>
                                   <div className="enterprises__searchButton">
                                        <Choice title='Швейные фабрики, 45' />
                                        <Choice title='Швейные предприятия, 30' />
                                        <Choice title='Ателье, 18' />
                                        <Choice title='Швейные фабрики, 12' />
                                   </div>
                              </div>

                              <div className="enterprises__right">
                                   <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1d4d9c1c194c130a58410eb949d712316553ac943af0a52a114b4d263ab7e0f3&amp;source=constructor" 
                                        width="730" height="225" frameborder="0">
                                   </iframe>
                              </div>
                              </div>
                              <div className="enterprises__card">
                              <EnterprisesCard/>
                              <EnterprisesCard/>
                              <EnterprisesCard/>
                              <EnterprisesCard/>
                              <EnterprisesCard/>
                              <EnterprisesCard/>
                              <EnterprisesCard/>
                              <EnterprisesCard/>
                              <EnterprisesCard/>
                              <EnterprisesCard/>
                              <EnterprisesCard/>
                              <EnterprisesCard/>
                         </div>
                         
                    </div>
               </main>
          <Footer />
     </div>
     );
}
 
export default Enterprises;