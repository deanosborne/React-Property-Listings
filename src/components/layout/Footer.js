import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import classes from './Footer.module.css';

function Footer() {
  const auth = getAuth();

  const [user, setUser] = useState(false);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div className={classes.footer}>
      <section className={classes.footermain}>
        <div className={classes.footermainitem}>
          <h2>Links</h2>
          <ul>
            {user ? (
              <li>
                <Link to='/favorites'>My Favorites</Link>
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
        </div>
        <div className={classes.footermainitem}>
          <h2>Cities</h2>
          <ul>
            <li>
              <Link to='/christchurch'>Christchurch</Link>
            </li>
            <li>
              <Link to='/wellington'>Wellington</Link>
            </li>
            <li>
              <Link to='/auckland'>Auckland</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className={classes.footerlegal}>
        <ul className={classes.footerlegallist}>
          <li>
            <Link to='#'>Terms &amp; Conditions</Link>
          </li>
          <li>
            <Link to='#'>Privacy Policy</Link>
          </li>
          <li>&copy; 2022 DOA.</li>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
