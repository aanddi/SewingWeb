import './Professions.scss'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Professions = () => {
     return ( 
     <div className="wrapper">
          <Header />
               <main className='page professions'>
                    <div className='professions__container'>
                         Профессии
                    </div>
               </main>
          <Footer />
     </div>
      );
}
 
export default Professions;