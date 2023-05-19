import React from 'react';
import '../styles/App.scss'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function App() {
  return (
    <div className="wrapper">
      <Header />
          <main className='page'>
            <div className='m__container'>Вакансии</div>

            
          </main>
      <Footer />
    </div>
  );
}

export default App;
