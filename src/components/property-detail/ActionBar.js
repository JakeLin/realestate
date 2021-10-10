
import styled from "styled-components";

const Container = styled.div`
  background-color: red;
  display: flex;
  justify-content: flex-end;
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