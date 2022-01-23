import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteListing) => {},
  removeFavorite: (listingId) => {},
  itemIsFavorite: (listingId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteListing) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteListing);
    });
  }

  function removeFavoriteHandler(listingId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(listing => listing.id !== listingId);
    });
  }

  function itemIsFavoriteHandler(listingId) {
    return userFavorites.some(listing => listing.id === listingId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
