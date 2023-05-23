import React from 'react';
import '../styles/App.scss'

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Employers from '../pages/Employers/Employers'
import Professions from '../pages/Professions/Professions'
import Enterprises from '../pages/Enterprises/Enterprises'
import Courses from '../pages/Courses/Courses'

import LoginUser from '../pages/Login/User/LoginUser'
import LoginEmployers from '../pages/Login/Employer/LoginEmployer'

import Vacancies from '../pages/Vacancies/Vacancies'

function App() {
  return (
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/employers' element={ <Employers /> } />
            <Route path='/professions' element={ <Professions /> } />
            <Route path='/enterprises' element={ <Enterprises /> } />
            <Route path='/courses' element={ <Courses /> } />

            <Route path='/loguser' element={<LoginUser/>}/>
            <Route path='/logemployer' element={<LoginEmployers/>}/>

            <Route path='/vacancies/1' element={<Vacancies/>}/>
            <Route path='/vacancies/2' element={<Vacancies/>}/>
        </Routes>
  );
}

export default App;
