import './ListingCard.css';
import BrandingBar from './BrandingBar';
import Carousel from './Carousel';
import Price from './Price';
import Address from './Address';
import GeneralFeatures from './GeneralFeatures';

const ListingCard = (props) => {
  // console.log(props.listing);
  return (
    <div className="list-card">
      <BrandingBar />
      <Carousel />
      <div className="listing-summary">
        <Price price={props.listing.listing.price} />
        <Address address={props.listing.listing.address} />
        <GeneralFeatures generalFeatures={props.listing.listing.generalFeatures} />
      </div>
    </div>
  );
};
  
export default ListingCard;