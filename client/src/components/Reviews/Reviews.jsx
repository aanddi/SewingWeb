import {Link} from 'react-router-dom'

import style from './Reviews.module.scss'

import starActive from '../../assets/Global-icon/star.svg'
import starInactive from '../../assets/Global-icon/star_Inactive.svg'
import Avatar from '../../assets/Global-icon/avatar.svg'

const Reviews = () => {
     return ( 
          <div className={style.reviews}>
               <div className={style.reviews__top}>
                    <h1 className={style.reviews__title}>5,0</h1>
                    <div className={style.reviews__star}>
                         <img src={starActive} alt="1" />
                         <img src={starActive} alt="2" />
                         <img src={starActive} alt="3" />
                         <img src={starActive} alt="4" />
                         <img src={starActive} alt="5" />
                    </div>
               </div>
               <div className={style.reviews__body}>
                    <div className={style.reviews__blockStar}>
                         <div className={style.reviews__row}>
                              <div className={style.reviews__imgStar}>
                                   <img src={starActive} alt="1" />
                                   <img src={starActive} alt="2" />
                                   <img src={starActive} alt="3" />
                                   <img src={starActive} alt="4" />
                                   <img src={starActive} alt="5" />
                              </div>
                              <div className={style.reviews__line}></div>
                              <div className={style.reviews__number}>9</div>
                         </div>
                    </div>
                    <div className={style.reviews__blockStar}>
                         <div className={style.reviews__row}>
                              <div className={style.reviews__imgStar}>
                                   <img src={starActive} alt="1" />
                                   <img src={starActive} alt="2" />
                                   <img src={starActive} alt="3" />
                                   <img src={starActive} alt="4" />
                                   <img src={starInactive} alt="5" />
                              </div>
                              <div className={style.reviews__line}></div>
                              <div className={style.reviews__number}>1</div>
                         </div>
                    </div>
                    <div className={style.reviews__blockStar}>
                         <div className={style.reviews__row}>
                              <div className={style.reviews__imgStar}>
                                   <img src={starActive} alt="1" />
                                   <img src={starActive} alt="2" />
                                   <img src={starActive} alt="3" />
                                   <img src={starInactive} alt="4" />
                                   <img src={starInactive} alt="5" />
                              </div>
                              <div className={style.reviews__line}></div>
                              <div className={style.reviews__number}>0</div>
                         </div>
                    </div>
                    <div className={style.reviews__blockStar}>
                         <div className={style.reviews__row}>
                              <div className={style.reviews__imgStar}>
                                   <img src={starActive} alt="1" />
                                   <img src={starActive} alt="2" />
                                   <img src={starInactive} alt="3" />
                                   <img src={starInactive} alt="4" />
                                   <img src={starInactive} alt="5" />
                              </div>
                              <div className={style.reviews__line}></div>
                              <div className={style.reviews__number}>0</div>
                         </div>
                    </div>
                    <div className={style.reviews__blockStar}>
                         <div className={style.reviews__row}>
                              <div className={style.reviews__imgStar}>
                                   <img src={starActive} alt="1" />
                                   <img src={starInactive} alt="2" />
                                   <img src={starInactive} alt="3" />
                                   <img src={starInactive} alt="4" />
                                   <img src={starInactive} alt="5" />
                              </div>
                              <div className={style.reviews__line}></div>
                              <div className={style.reviews__number}>0</div>
                         </div>
                    </div>
               </div>
               <div className={style.reviews__cardUser}>
                    <div className={style.reviews__cardContent}>
                         <div className={style.reviews__cardHeader}>
                              <div className={style.reviews__cardAvatar}>
                                   <img src={Avatar} alt="" />
                              </div>
                              <div className={style.reviews__cardInfo}>
                                   <div className={style.reviews__cardName}>Анатолий</div>
                                   <div className={style.reviews__cardStar}>
                                        <img src={starActive} alt="1" />
                                        <img src={starActive} alt="2" />
                                        <img src={starActive} alt="3" />
                                        <img src={starActive} alt="4" />
                                        <img src={starActive} alt="5" />
                                   </div>
                              </div>
                         </div>
                         <div className={style.reviews__cardtext}>Хорошие условия труда</div>
                    </div>
               </div>
               <div className={style.reviews__link}>
                    <Link className='' to='/'>Показать  еще</Link>
               </div>
                    
          </div>
      );
}
 
export default Reviews;