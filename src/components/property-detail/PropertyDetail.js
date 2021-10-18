import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import styled from "styled-components";

import { getPropertyDetail as get } from '../../mockBackend/fetch';
import Hero from "./Hero";
import BrandingBar from "./BrandingBar";
import HomeLoanCalculator from "./HomeLoanCalculator";
import AgentFloatingWidget from "./AgentFloatingWidget";
import Map from "./Map";
import TravelTimeBackup from "./TravelTimeBackup";

const Container = styled.div`
  background-color: #FFF;
`;

const PropertyInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const PropertyInfoStack = styled.div`
  width: 640px;
`;

const Divider = styled.div`
  margin: 24px 0;
  height: 1px;
  background-color: #D2D5DA;
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
          <Divider />
          <Map mapAddress={listing.listing.address.display} />
          <Divider />
          <TravelTimeBackup travelFromAddress={listing.listing.address.display.fullAddress} />
        </PropertyInfoStack>
        <AgentFloatingWidget />
      </PropertyInfo>
      footer
    </Container>
  )
};

export default PropertyDetail;