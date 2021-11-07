import styled from 'styled-components';

const Container = styled.div`
  font-family: "PangeaRegular";
  color: #333F48;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
`;

const Price = (props) => {
  const displayPrice = props.price === undefined ? 'Contact Agent' : props.price.display;
  return (
    <Container>
      {displayPrice}
    </Container>
  );
};
  
export default Price;