import React from 'react';
import '../styles/App.scss'

import { useLocation } from 'react-router-dom'
import {useEffect} from 'react'

import AppRouter  from '../routers/AppRouter'

function App() {

      /*Скролл на вверх после перехода по ссылке*/ 
      const { pathname } = useLocation();
      useEffect(() => {
          window.scrollTo(0, 0)
        }, [pathname])


  return (
    <AppRouter />
  );
}

export default App;
