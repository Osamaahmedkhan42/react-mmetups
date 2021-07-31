

import  {useContext} from 'react'
import FavouriteContext from '../../store/favourite-contex';
import { Link } from "react-router-dom";
import classes from './MainNav.module.css'



function  MainNav () {

    const favouriteCtx =useContext (FavouriteContext)

    return <header className= {classes.header}> 
        <div className= {classes.logo}> React  Meetups</div>
        <nav>
        <ul>
            <li> < Link to='/' > Home</Link></li>
            <li> < Link to='/new' > New</Link></li>
            <li> < Link to='/fav' > Favourite   <span className= {classes.badge}> { favouriteCtx.totalFavorites}</span> </Link></li> 
        </ul>
        </nav>
    </header>
}

export default  MainNav;