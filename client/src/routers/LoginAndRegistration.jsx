import { Routes, Route } from 'react-router-dom'

import Registration from '../pages/Registration/Registration';
import RegistrationCompany from '../pages/Registration/Registration_Company';
import LoginUser from '../pages/Login/User/LoginUser'
import LoginEmployer from '../pages/Login/Employer/LoginEmployer'

const LoginAndRegistration = () => {
     return ( 
          <Routes>
               <Route path='/loginUser' element={<LoginUser/>}/>
               <Route path='/loginEmployer' element={<LoginEmployer/>}/>

               <Route path='/registrationUser' element={<Registration/>}/>
               <Route path='/registrationEmployer' element={<RegistrationCompany/>}/>
          </Routes>
      );
}
 
export default LoginAndRegistration;