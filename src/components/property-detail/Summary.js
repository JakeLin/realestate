import styled from "styled-components";

import ActionBar from "./ActionBar";
import Address from "./Address";

const Container = styled.div`
  max-width: 400px;
  min-width: 320px;
  background-color: green;
  padding: 16px 0;
`;

const Summary = (props) => {
  return(
    <Container>
      <ActionBar />
      <Address address={props.listing.address} />
    </Container>
  );
}

export default Summary;