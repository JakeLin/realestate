import styled from "styled-components";

import Gallery from "./Gallery";
import Summary from "./Summary";

const Container = styled.div`
  background-color: #F7F8F9;
  height: 611px;
  display: flex;
  justify-content: space-between;
`;

const Hero = (props) => {
  console.log(props.listing);
  return(
    <Container>
      <Summary propertySummaryDetails={props.listing}/>
      <Gallery images={props.listing.media.images} />
    </Container>
  );
};

export default Hero;