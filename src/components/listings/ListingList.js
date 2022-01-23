import ListingItem from "./ListingItem";
import classes from "./ListingList.module.css";

function ListingList(props) {
  return (
    <ul className={classes.list}>
      {props.listings.map((listing) => (
        <ListingItem
          key={listing.id}
          id={listing.id}
          image={listing.image}
          title={listing.title}
          description={listing.description}
          address={listing.address}
          bedrooms={listing.bedrooms}
          bathrooms={listing.bathrooms}
          price={listing.price}
        />
      ))}
    </ul>
  );
}

export default ListingList;
