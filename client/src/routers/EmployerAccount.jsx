import { Routes, Route } from 'react-router-dom'

import EmployerProfileData from '../pages/EmployerProfile/EmployerProfileData/EmployerProfileData'
import EmployerProfileTools from '../pages/EmployerProfile/EmployerProfileTools/EmployerProfileTools'
import EmployerProfileVacancies from '../pages/EmployerProfile/EmployerProfileVacancies/EmployerProfileVacancies'

const EmployerAccount = () => {
     return ( 
          <Routes>
               <Route path='/employer/profile/id/data' element={ < EmployerProfileData/>} />
               <Route path='/employer/profile/id/tools' element={ < EmployerProfileTools/>} />
               <Route path='/employer/profile/id/vacancies' element={ < EmployerProfileVacancies/>} />
          </Routes>
      );
}
 
export default EmployerAccount;