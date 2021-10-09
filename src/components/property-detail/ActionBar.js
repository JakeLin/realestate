
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  background-color: red;
`;

const ActionBar = () => {
  return(
    <Container>
      <button>A</button>
      <button>B</button> 
    </Container>

  );
}

export default ActionBar;