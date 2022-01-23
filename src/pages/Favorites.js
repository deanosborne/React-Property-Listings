import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import ListingList from '../components/listings/ListingList';
import classes from '../components/layout/favorites.module.css'

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <ListingList listings={favoritesCtx.favorites} />;
  }

  return (
    <section className={classes.fav}>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
