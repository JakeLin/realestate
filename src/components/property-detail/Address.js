
import styled from "styled-components";

const Container = styled.div`
  font-family: "PangeaRegular";
  font-size: 34px;
  line-height: 44px;
  color: #333F48;
  font-weight: 600;
  padding-right: 24px;
`;

const Address = (props) => {
  const addressDisplay = `${props.address.display.fullAddress}`;

  return(
    <Container>
      {addressDisplay}
    </Container>
  );
}

export default Address;