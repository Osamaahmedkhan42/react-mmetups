
import { useContext } from "react";
import FavouriteContext from "../store/favourite-contex";
import Meetuplist from "../components/meetups/Meetuplist";


function Favourite(){

    const favouriteCtx = useContext (FavouriteContext);

    let content;
    if (favouriteCtx.totalFavorites ===0 ) {
        content = <p>you got not favourites</p>
       
    }
    else  {

       content = <Meetuplist meetups= {favouriteCtx.favourites} />

    }

    return <section>
        <h1>My Favourites</h1>
         {content}
         
    </section>
}
export default Favourite;