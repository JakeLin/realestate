
import styled from "styled-components";
import { Share, Star } from '@styled-icons/boxicons-regular';

const Container = styled.div`
  background-color: red;
  display: flex;
  justify-content: flex-end;
  padding-right: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background: none;
`;

const ActionBar = () => {
  return(
    <Container>
      <Button>
        <Share size="24" />
      </Button>
      <Button>
        <Star size="24" />
      </Button> 
    </Container>

  );
}

export default ActionBar;