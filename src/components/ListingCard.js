import './ListingCard.css';
import BrandingBar from './BrandingBar';
import Carousel from './Carousel';
import Price from './Price';
import Address from './Address';
import GeneralFeatures from './GeneralFeatures';
import { Link } from 'react-router-dom';

const ListingCard = (props) => {
  const propertyDetailUrlPath = `/property/${props.listing.listing.id}`;
  return (
    <div className="list-card">
      <Link to={propertyDetailUrlPath}>
        <BrandingBar listingCompany={props.listing.listing.listingCompany} />
        <Carousel images={props.listing.listing.media.images} />
        <div className="listing-summary">
          <Price price={props.listing.listing.price} />
          <Address address={props.listing.listing.address} />
          <GeneralFeatures generalFeatures={props.listing.listing.generalFeatures} />
        </div>
      </Link>
    </div>
  );
};
  
export default ListingCard;