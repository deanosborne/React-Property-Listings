import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './ListingItem.module.css';
import { FaBed, FaToilet, FaHeart, FaWindowClose } from 'react-icons/fa';
import FavoritesContext from '../../store/favorites-context';

function ListingItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.card}>
      <Card>
        <div className={classes.classheader}>
          <div className={classes.cardrow}>
            <div className={classes.cardtitle}>
              <b>{props.title}</b>
            </div>
          </div>
        </div>
        <img className={classes.cardimage} src={props.image} alt='Logo' />
        <div className={classes.cardtext}>{props.description}</div>
        <div className={classes.cardrow}>
          <b>{props.address}</b>
        </div>
        <div className={classes.cardrow}>{props.price}</div>
        <div className={classes.cardrow}>
          <div>
            <FaBed /> {props.bedrooms}
            <FaToilet /> {props.bathrooms}
          </div>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? <FaWindowClose /> : <FaHeart />}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListingItem;
