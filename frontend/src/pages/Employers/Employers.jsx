import './Employers.scss'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Employers = () => {
     return ( 
          <div className="wrapper">
          <Header />
               <main className='page employers'>
                    <div className='employers__container'>
                         Работодатели
                    </div>
               </main>
          <Footer />
     </div>
      );
}
 
export default Employers;