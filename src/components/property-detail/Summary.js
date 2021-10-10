import styled from "styled-components";

import ActionBar from "./ActionBar";

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
    </Container>
  );
}

export default Summary;