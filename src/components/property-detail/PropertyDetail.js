import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import styled from "styled-components";

import { getPropertyDetail as get } from '../../mockBackend/fetch';
import Hero from "./Hero";
import BrandingBar from "./BrandingBar";
import HomeLoanCalculator from "./HomeLoanCalculator";
import AgentFloatingWidget from "./AgentFloatingWidget";

const Container = styled.div`
  background-color: #FFF;
`;

const PropertyInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const PropertyInfoStack = styled.div`
  width: 660px;
  background-color: lightgray;
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
  
  return (
    <Container>
      <BrandingBar listingCompany={listing.listing.listingCompany} />
      <Hero listing={listing.listing} />
      <PropertyInfo>
        <PropertyInfoStack>
          <HomeLoanCalculator />
        </PropertyInfoStack>
        <AgentFloatingWidget />
      </PropertyInfo>
      
      footer
    </Container>
  )
};

export default PropertyDetail;