import styled from "styled-components";
import { BookContent } from "@styled-icons/boxicons-regular";
import PropertyDiscription from "./PropertyDiscription";

const Container = styled.div`
  margin-top: 24px;
`;

const Title = styled.h2`
  font-family: "PangeaRegular";
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #333F48;
`;

const FloorplanButton = styled.button`
  font-family: "PangeaRegular";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2B6ED2;
  background: none;
  border: none;
  padding: 0;

  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Icon = styled.span`
  margin-right: 8px;
`;

const FloorplansAndTours = (props) => {
  return(
    <Container>
      <Title>Floorplans and tours</Title>
      <FloorplanButton onClick={() => props.openFullScreenImage(props.floorPlanIndex)}><Icon><BookContent size="20" /></Icon> Floorplan</FloorplanButton>
    </Container>
  )
};

export default FloorplansAndTours;