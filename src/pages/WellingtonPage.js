import ListingList from '../components/listings/ListingList';
import { useState, useEffect } from 'react';
import Hero from '../components/layout/Hero';

function WellingtonPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedListings, setLoadedListings] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('/listings.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const listings = [];

        for (const key in data) {
          const listing = {
            city: key,
            ...data[key],
          };
          if (listing.city === 'wellington') {
            listings.push(listing);
          }
        }

        setIsLoading(false);
        setLoadedListings(listings);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <div>
        <Hero />
      </div>
      <ul>
        <ListingList listings={loadedListings} />
      </ul>
    </section>
  );
}

export default WellingtonPage;
