import styled from "styled-components";
import { File } from '@styled-icons/boxicons-regular';

const Container = styled.div`
  padding-right: 24px;
  margin-top: 74px;
`;

const PriceContainer = styled.div`
  font-family: "PangeaRegular";
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #333F48;
`;

const PriceGuideLink = styled.a`
  margin-top: 8px;
  padding-right: 149px;
  font-family: "PangeaRegular";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2B6ED2;
  text-decoration: none;
`;

const StyledFile = styled(File)`
  margin-right: 8px;
`;

const Price = (props) => {
  console.log(props)
  return(
    <Container>
      <PriceContainer>
        {props.price}
      </PriceContainer>
      <PriceGuideLink target="_blank" href={props.statementUrl}><StyledFile size="16"/>View agent price guide</PriceGuideLink>
    </Container>
  );
}

export default Price;