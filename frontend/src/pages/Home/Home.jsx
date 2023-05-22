import './Home.scss'

import { Link } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import SearchFull from '../../ui/Search/SearchFull'


const Home = () => {
     return ( 
     <div className="wrapper">
          
          <Header />
               <main className='page home'>
                    
                    <section className="home__search search">
                         <div className='search__container'>
                              <div className="search__input">
                                   <SearchFull />
                              </div>
                              <div className="search__text"><Link to="/employers">Я ищу сотрудника</Link></div>
                              <div className="search__bottom">
                                   <div className="search__stat">
                                        <span>2103 <br /> вакансии</span> 
                                        <span>1203 <br /> резюме</span> 
                                   </div>
                                   <button className="search__button">Создать резюме</button>
                              </div>
                         </div>
                    </section>
                   
               </main>
         
          
          <Footer />
     </div>
      );
}
 
export default Home;