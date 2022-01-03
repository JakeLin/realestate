import styled from 'styled-components';

const Container = styled.div`
  font-family: "PangeaRegular";
  font-size: 16px;
  line-height: 24px;
  color: #333F48;
  font-weight: 400;
`;

// method 1 - keep the original data hierarchy 
// interface Display {
//   shortAddress: string,
// }

// interface Address {
//   display: Display,
//   suburb: string
// }

// interface Props {
//   address: Address
// }

// method 2 - explose the fields directly
// interface Props {
//   shortAddress: string,
//   suburb: string
// }

// method 3
interface Props {
  data: Data
}

interface Data {
  shortAddress: string,
  suburb: string
}

const Address = (props: Props) => {
  const addressDisplay = `${props.data.shortAddress}, ${props.data.suburb}`;
  return (
    <Container>
      {addressDisplay}
    </Container>
  );
};

export default Address;