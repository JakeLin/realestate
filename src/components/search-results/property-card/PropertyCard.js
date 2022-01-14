import styled from 'styled-components';
import { Link } from 'react-router-dom';

import BrandingBar from './BrandingBar';
import Carousel from './Carousel';
import Price from './Price';
import Address from './Address';
import GeneralFeatures from '../../common/GeneralFeatures';

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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const PropertyCard = (props) => {
  const propertyDetailUrlPath = `/property/${props.listing.listing.id}`;
  return (
    <Container>
      <StyledLink to={propertyDetailUrlPath}>
        <BrandingBar listingCompany={props.listing.listing.listingCompany} />
        <Carousel images={props.listing.listing.media.images} />
        <PropertyContainer>
          <Price price={props.listing.listing.price} />
          <Address data={{
              shortAddress: props.listing.listing.address.display.shortAddress,
              suburb: props.listing.listing.address.suburb
            }} />
          <GeneralFeatures generalFeatures={props.listing.listing.generalFeatures} />
        </PropertyContainer>
      </StyledLink>
    </Container>
  );
};
  
export default PropertyCard;