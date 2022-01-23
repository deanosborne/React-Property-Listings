import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './ListingForm.module.css';

function ListingForm(props) {
  const imageInputRef = useRef();
  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const bedroomsInputRef = useRef();
  const bathroomsInputRef = useRef();
  const priceInputRef = useRef();
  const cityInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredImage = imageInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredBedrooms = bedroomsInputRef.current.value;
    const enteredBathrooms = bathroomsInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const listingData = {
      image: enteredImage,
      title: enteredTitle,
      address: enteredAddress,
      bedrooms: enteredBedrooms,
      bathrooms: enteredBathrooms,
      price: enteredPrice,
      city: enteredCity,
    };

    props.onListing(listingData);
  }
  return (
    <div className={classes.listingcard}>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='title'>Title</label>
            <input type='text' required id='title' ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='image'>Image</label>
            <input type='url' required id='image' ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='address'>Address</label>
            <input type='text' required id='address' ref={addressInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='bathrooms'>Bathrooms</label>
            <input
              type='text'
              required
              id='bathrooms'
              ref={bathroomsInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='bedrooms'>Bedrooms</label>
            <input type='text' required id='bedrooms' ref={bedroomsInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='price'>Price</label>
            <input type='text' required id='price' ref={priceInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='city'>City</label>
            <input type='city' required id='city' ref={cityInputRef} />
          </div>
          <div className={classes.actions}>
            <button>Add Listing</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default ListingForm;
