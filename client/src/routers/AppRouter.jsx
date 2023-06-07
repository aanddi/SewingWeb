import LoginAndRegistration from './LoginAndRegistration'
import PageRouter from './PageRouter';

import UserAccount from './UserAccount';

const AppRouter = () => {
     return ( 
      <>
        <PageRouter />
        <LoginAndRegistration />
        <UserAccount />
      </>
      );
}
 
export default AppRouter;