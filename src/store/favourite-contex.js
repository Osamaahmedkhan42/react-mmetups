import { createContext, useState } from "react";


const FavouriteContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => { },
    removeFavourite: (meetupId) => { },
    itemIsFavourite: (meetupId) => { },

});

export function FavouriteContextProvider(props) {

    const [userFavourites, setUserFavourites] = useState([]);

    //changing states with function

    function addFavouriteHandler(favouriteMeetup) {


        setUserFavourites((prevUserFavourie) => {
            return prevUserFavourie.concat(favouriteMeetup)
        })

    }

    function removeFavouriteHandler(meetupId) {

        setUserFavourites((prevUserFavourie => {
            return prevUserFavourie.filter((meetup) => meetup.id !== meetupId)
        }))

    }

    function itemIsFavouriteHandler(meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId);

    }


    const context = {
        favourites: userFavourites,
        totalFavorites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    }

    return <FavouriteContext.Provider value={context}> 

        {props.children}

    </FavouriteContext.Provider>



}
export default FavouriteContext;