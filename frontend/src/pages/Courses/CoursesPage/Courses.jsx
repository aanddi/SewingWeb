import './Courses.scss'

import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Ad from '../../../components/Ad/Ad'

import Doc from '../../../assets/Courses/doc.jpg'
import CoursesCard from '../components/CoursesCard/CoursesCard'

const CoursesPage = () => {
     return ( 
     <div className="wrapper">
          <Header />
               <main className='page courses'>
                    <section className="courses__header headerCourses">
                         <div className='courses__container'>
                              <div className="headerCourses__content">
                                   <div className="headerCourses__left">
                                        <h2 className='headerCourses__bigTitle'>
                                             Пройдите курсы от наших партнеров и<br />
                                             повышайте свой профессионализм <br />
                                             и заработную плату! <br />
                                        </h2>
                                   </div>
                                   <div className="headerCourses__right">
                                        <img src={Doc} alt="" />
                                        <h3 className='headerCourses__title'>
                                             После окончания получите документы,
                                             который катируютсяпо по всей России
                                        </h3>
                                   </div>
                               </div>
                         </div>
                    </section>
                    <section className='courses__ribbon ribbon-courses'>
                         <div className="ribbon-courses__container">
                              <div className="ribbon-courses__content">
                                   <div className="ribbon-courses__left">
                                        <div className="ribbon-courses__courses">
                                             <CoursesCard />
                                             <CoursesCard />
                                             <CoursesCard />
                                             <CoursesCard />
                                             <CoursesCard />
                                             <CoursesCard />
                                             <CoursesCard />
                                             <CoursesCard />
                                        </div>

                                   </div>
                                   <div className="ribbon-courses__right">
                                        <Ad/>
                                        <Ad/>
                                        <Ad/>
                                   </div>
                              </div>
                         </div>
                    </section>
               </main>
          <Footer />
     </div>
      );
}
 
export default CoursesPage;