import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import styled from "styled-components";

import { getPropertyDetail as get } from '../../mockBackend/fetch';
import Hero from "./Hero";
import BrandingBar from "./BrandingBar";

const Container = styled.div`
  background-color: #FFF;
  height: 100vh;
  width: 100%;
`;

const PropertyDetail = () => {
  const { propertyId } = useParams();
  
  const [listing, setListing] = useState(null);
  useEffect(() => {
    get(propertyId).then((response) => {
      setListing(response.data);
    });
  }, [propertyId]);

  if (listing === null) {
    return null;
  }
  console.log(listing);
  return (
    <Container>
      <BrandingBar listingCompany={listing.listing.listingCompany} />
      <Hero />
      this is property detail page and the id is {listing.listing.id}
    </Container>
  )
};

export default PropertyDetail;