import './ListingCard.css';
import BrandingBar from './BrandingBar';
import Carousel from './Carousel';

function ListingCard() {
    return (
      <div className="list-card">
        <BrandingBar />
        <Carousel />
      </div>
    );
  }
  
  export default ListingCard;