import './UserPersonalCourses.scss'

import ContainerProfile from '../components/ContainerProfile/ContainerProfile'
import Title from '../components/Tile/Tile'

import CoursesCard from '../../Courses/components/CoursesCard/CoursesCard'

const UserPersonalCourses = () => {
     return ( 
          <ContainerProfile> 
                <div className="userProfile__courses courses-userProfile">
                    <Title text="Избранные курсы"/>
                    <div className="courses-userProfile__coursesList">
                         <CoursesCard />
                         <CoursesCard />
                         <CoursesCard />
                         <CoursesCard />
                    </div>
                </div>
          </ContainerProfile>
      );
}
 
export default UserPersonalCourses;