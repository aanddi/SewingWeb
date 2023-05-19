import './Home.scss'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {
     return ( 
     <div className="wrapper">
          <Header />
               <main className='page home'>
                    <div className='home__container'>
                         Главная
                    </div>
               </main>
          <Footer />
     </div>
      );
}
 
export default Home;