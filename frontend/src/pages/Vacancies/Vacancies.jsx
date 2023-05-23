import './Vacancies.scss'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Vacancies = () => {
     return ( 
          
     <div className="wrapper">
           <Header />
               <main className='page vacancies'>
                    <div className='vacancies__container'>
                         vacancies
                    </div>
               </main>
          <Footer />
     </div>
      );
}
 
export default Vacancies;