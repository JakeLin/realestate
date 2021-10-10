import styled from "styled-components";

import ActionBar from "./ActionBar";
import Address from "./Address";
import GeneralFeatures from "../common/GeneralFeatures";

const Container = styled.div`
  max-width: 400px;
  min-width: 320px;
  background-color: green;
  padding: 16px 0 16px 24px;
`;

const Summary = (props) => {

  return(
    <Container>
      <ActionBar />
      <Address address={props.listing.address} />
      <GeneralFeatures generalFeatures={props.listing.generalFeatures} />
    </Container>
  );
}

export default Summary;