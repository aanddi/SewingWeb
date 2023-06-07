import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Employers from '../pages/Employers/Employers'
import Professions from '../pages/Professions/Professions'
import Enterprises from '../pages/Enterprises/EnterprisesPage/Enterprises'
import CoursesPage from '../pages/Courses/CoursesPage/Courses'
import EnterprisesAbout from '../pages/Enterprises/EnterprisesAbout/EnterprisesAbout'
import Vacancies from '../pages/Vacancies/Vacancies'

const PageRouter = () => {
     return ( 
        <Routes>
            <Route path='/' element={ <Home />} />

            <Route path='/employers' element={ <Employers /> } />

            <Route path='/professions' element={ <Professions /> } />

            <Route path='/enterprises' element={ <Enterprises /> } />
            <Route path='/enterprises/1' element={ <EnterprisesAbout /> } />

            <Route path='/courses' element={ <CoursesPage /> } />

            <Route path='/vacancies/1' element={<Vacancies/>}/>
            <Route path='/vacancies/2' element={<Vacancies/>}/>
        </Routes>
      );
}
 
export default PageRouter;