import { Routes, Route } from 'react-router-dom'

import UserPersonalData from '../pages/UserProfile/UserPersonalData/UserPersonalData'
import UserPersonalTools from '../pages/UserProfile/UserPersonalTools/UserPersonalTools'
import UserPersonalVacancies from '../pages/UserProfile/UserPersonalVacancies/UserPersonalVacancies'
import UserPersonalCourses from '../pages/UserProfile/UserPersonalCourses/UserPersonalCourses'
import UserPersonalResume from '../pages/UserProfile/UserPersonalResume/UserPersonalResume'
import UserPersonalResponses from '../pages/UserProfile/UserPersonalResponses/UserPersonalResponses'
import UserPersonalReviews from '../pages/UserProfile/UserPersonalReviews/UserPersonalReviews'


const UserAccount = () => {
     return ( 
          <Routes>
               <Route path='/user/profile/id/data' element={ <UserPersonalData />} />
               <Route path='/user/profile/id/resume' element={ <UserPersonalResume />} />
               <Route path='/user/profile/id/responses' element={ <UserPersonalResponses />} />
               <Route path='/user/profile/id/reviews' element={ <UserPersonalReviews />} />
               <Route path='/user/profile/id/vacancies' element={ <UserPersonalVacancies />} />
               <Route path='/user/profile/id/courses' element={ <UserPersonalCourses />} />
               <Route path='/user/profile/id/tools' element={ <UserPersonalTools />} />
          </Routes>
      );
}
 
export default UserAccount;