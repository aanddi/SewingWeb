import React from 'react';
import '../styles/App.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Employers from '../pages/Employers/Employers'
import Professions from '../pages/Professions/Professions'
import Enterprises from '../pages/Enterprises/Enterprises'
import Courses from '../pages/Courses/Courses'


function App() {
  return (

    <BrowserRouter>

        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/employers' element={ <Employers /> } />
            <Route path='/professions' element={ <Professions /> } />
            <Route path='/enterprises' element={ <Enterprises /> } />
            <Route path='/courses' element={ <Courses /> } />
        </Routes>

        <Home />

    </BrowserRouter>
    
  );
}

export default App;
