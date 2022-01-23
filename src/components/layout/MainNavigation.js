import { Link } from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import classes from './MainNavigation.module.css';
import { useState, useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const auth = getAuth();

  const [user, setUser] = useState(false);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to='/'>React Props</Link>
      </div>
      <nav>
        <ul>
          {user ? (
            <li>
              <Link to='/favorites'>
                My Favorites{' '}
                <span className={classes.badge}>
                  {favoritesCtx.totalFavorites}
                </span>
              </Link>
            </li>
          ) : null}
          {user ? (
            <li>
              <Link to='/new-listing'>New Listing</Link>
            </li>
          ) : null}
          {user ? (
            <li>
              <Link
                to='#'
                onClick={() => {
                  signOut(auth);
                }}
              >
                Log out
              </Link>
            </li>
          ) : (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
          {user ? null : (
            <li>
              <Link to='/register'>Register</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
