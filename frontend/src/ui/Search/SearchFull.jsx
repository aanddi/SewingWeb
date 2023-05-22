import style from './SearchFull.module.scss'

import Tools from '../../assets/Home/tools__search.svg'

const SearchFull = () => {
     return ( 
          <div className={style.search}>
               <input type="text" placeholder="Должность или компания"/>
               <div className={style.search__btn_tools}>
                    <button>
                         <img src={Tools} alt="" />
                    </button>
               </div>
               <div className={style.search__btn_text}>
                    <button>
                         Найти
                    </button>
               </div>
           </div>    
      );
}
 
export default SearchFull;