import styled from 'styled-components';
import { Link } from 'react-router-dom';

import BrandingBar from './BrandingBar';
import Carousel from './Carousel';
import Price from './Price';
import Address from './Address';
import GeneralFeatures from './GeneralFeatures';

const Container = styled.div`
  background-color: white;
  width: 640px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.16));
  border-radius: 12px;
  margin-top: 24px;
`;

const PropertyContainer = styled.div`
  padding: 16px 24px;
`;

const PropertyCard = (props) => {
  const propertyDetailUrlPath = `/property/${props.listing.listing.id}`;
  return (
    <Container>
      <Link to={propertyDetailUrlPath}>
        <BrandingBar listingCompany={props.listing.listing.listingCompany} />
        <Carousel images={props.listing.listing.media.images} />
        <PropertyContainer>
          <Price price={props.listing.listing.price} />
          <Address address={props.listing.listing.address} />
          <GeneralFeatures generalFeatures={props.listing.listing.generalFeatures} />
        </PropertyContainer>
      </Link>
    </Container>
  );
};
  
export default PropertyCard;