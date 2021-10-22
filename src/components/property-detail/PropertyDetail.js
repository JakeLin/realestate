import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import styled from "styled-components";

import { getPropertyDetail as get } from '../../mockBackend/fetch';
import Hero from "./Hero";
import BrandingBar from "./BrandingBar";
import HomeLoanCalculator from "./HomeLoanCalculator";
import AgentFloatingWidget from "./AgentFloatingWidget";
import Map from "./Map";
import TravelTime from "./TravelTime";
import PropertyDiscription from "./PropertyDiscription";
import PropertyFeatures from "./PropertyFeatures";
import FloorplansAndTours from "./FloorplansAndTours";

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
    return <div>Loading...</div>;
  }

  const address = listing.listing.address.display.fullAddress;

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
          <TravelTime travelFromAddress={address}/>
          <Divider />
          <PropertyDiscription address={address} propertyTitle={listing.listing.title} propertyDiscription={listing.listing.description}/>
          <Divider />
          <PropertyFeatures propertyFeatures={listing.listing.propertyFeatures} />
          <Divider />
          <FloorplansAndTours />
        </PropertyInfoStack>
        <AgentFloatingWidget />
      </PropertyInfo>
      footer
    </Container>
  )
};

export default PropertyDetail;