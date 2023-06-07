import style from './Tile.module.scss'

const Tile = (props) => {
     return ( 
          <>
               <h1 className={style.profileTitle}>{props.text}</h1>
          </>
      );
}
 
export default Tile;