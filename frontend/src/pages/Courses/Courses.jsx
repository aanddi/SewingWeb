import './Courses.scss'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Courses = () => {
     return ( 
     <div className="wrapper">
          <Header />
               <main className='page courses'>
                    <div className='courses__container'>
                         Курсы
                    </div>
               </main>
          <Footer />
     </div>
      );
}
 
export default Courses;