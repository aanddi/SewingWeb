import './Professions.scss'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import ProfessionsCard from './components/ProfessionsCard'

const Professions = () => {
     return ( 
     <div className="wrapper">
          <Header />
               <main className='page professions'>
                    <div className='professions__container'>
                         <div className="professions__title">Каталог профессий</div>
                         <div className="professions__search">
                              <input type="text" placeholder="Профессия"/>
                              <div className='professions__btn'>
                                   <button>
                                         Найти
                                   </button>
                              </div>
                         </div>   
                         <div className="professions__card">
                              <ProfessionsCard/>
                              <ProfessionsCard/>
                              <ProfessionsCard/>
                              <ProfessionsCard/>
                              <ProfessionsCard/>
                              <ProfessionsCard/>
                              <ProfessionsCard/>
                              <ProfessionsCard/>
                              <ProfessionsCard/>
                              <ProfessionsCard/>
                              <ProfessionsCard/>
                              <ProfessionsCard/>
                         </div>
                         
                    </div>
               </main>
          <Footer />
     </div>
      );
}
 
export default Professions;