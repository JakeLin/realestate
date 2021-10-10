import styled from "styled-components";

import ActionBar from "./ActionBar";
import Address from "./Address";
import GeneralFeatures from "../common/GeneralFeatures";
import Price from "./Price";

const Container = styled.div`
  max-width: 400px;
  min-width: 320px;
  background-color: lightgray;
  padding: 16px 0 16px 24px;
`;

const GeneralFeaturesContainer = styled.div`
  margin-top: 30px;
`;

const Summary = (props) => {
  return(
    <Container>
      <ActionBar />
      <Address address={props.listing.address} />
      <GeneralFeaturesContainer>
        <GeneralFeatures generalFeatures={props.listing.generalFeatures} />
      </GeneralFeaturesContainer>
      <Price price={props.listing.price.display} statementUrl={props.listing.media.statementOfInformation.href} />
    </Container>
  );
}

export default Summary;