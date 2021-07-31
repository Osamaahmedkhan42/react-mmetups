
import  {useContext} from 'react'
import FavouriteContext from '../../store/favourite-contex';
import Card from '../../pages/ui/Card';
import  classes from './Meetupitem.module.css'
function Meetupitem(props){

    const favoutiteCtx = useContext(FavouriteContext);

    const itemIsFavourite = favoutiteCtx.itemIsFavourite(props.id)


    function toggleFavouriteHandler() {

      if (itemIsFavourite) {
        favoutiteCtx.removeFavourite (props.id)
      }
      else {
        favoutiteCtx.addFavourite ( {
          id :props.id,
          title :props.title,
          description : props.description,
          image  : props.image,
          address  : props.address,

        })
      }

    }

    return (
      <Card >
        <li className={classes.item}>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick= {toggleFavouriteHandler}> {itemIsFavourite  ? 'Remove From Favourites' : 'To Favourites'}</button>
          </div>
        </li></Card>
      );

}
export default Meetupitem;