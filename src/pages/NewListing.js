import { useNavigate } from 'react-router-dom';

import ListingForm from '../components/listings/ListingForm';

function NewListing() {
  const navigate = useNavigate();

  function onListingHandler(userData) {
    fetch('https://phdmo-a6d30-default-rtdb.firebaseio.com/listings.json', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      navigate('/');
    });
  }
  return (
    <section>
      <h1>Listing Page</h1>
      <ListingForm onListing={onListingHandler} />
    </section>
  );
}

export default NewListing;
