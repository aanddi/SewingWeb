import './Enterprises.scss'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Enterprises = () => {
     return ( 
          <div className="wrapper">
          <Header />
               <main className='page enterprises'>
                    <div className='enterprises__container'>
                         Предприятия
                    </div>
               </main>
          <Footer />
     </div>
     );
}
 
export default Enterprises;