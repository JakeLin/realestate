import styled from 'styled-components';

const Container = styled.div`
  font-family: "PangeaRegular";
  font-size: 16px;
  line-height: 24px;
  color: #333F48;
  font-weight: 400;
`;

const Address = (props) => {
  const addressDisplay = `${props.address.display.shortAddress}, ${props.address.suburb}`;
  return (
    <Container>
      {addressDisplay}
    </Container>
  );
};

export default Address;