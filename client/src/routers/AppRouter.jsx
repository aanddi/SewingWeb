import LoginAndRegistration from './LoginAndRegistration'
import PageRouter from './PageRouter';

import UserAccount from './UserAccount';
import EmployerAccount from './EmployerAccount';

const AppRouter = () => {
     return ( 
      <>
        <PageRouter />
        <LoginAndRegistration />
        <UserAccount />
        <EmployerAccount />
      </>
      );
}
 
export default AppRouter;