import { Routes, Route } from 'react-router-dom'

import Registration from '../pages/Registration/Registration';
import LoginUser from '../pages/Login/User/LoginUser'


const LoginAndRegistration = () => {
     return ( 
          <Routes>
               <Route path='/loginUser' element={<LoginUser/>}/>
               <Route path='/loginEmployer' element={<LoginUser/>}/>

               <Route path='/registrationUser' element={<Registration/>}/>
               <Route path='/registrationEmployer' element={<Registration/>}/>
          </Routes>
      );
}
 
export default LoginAndRegistration;