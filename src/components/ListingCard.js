import './ListingCard.css';
import BrandingBar from './BrandingBar';
import Carousel from './Carousel';
import Price from './Price';
import Address from './Address';
import GeneralFeatures from './GeneralFeatures';

function ListingCard(props) {
  return (
    <div className="list-card">
      <BrandingBar />
      <Carousel />
      <div className="listing-summary">
        <Price price={props.listing.listing.price} />
        <Address />
        <GeneralFeatures />
      </div>
    </div>
  );
}
  
export default ListingCard;