import styled from "styled-components";

import Gallery from "./Gallery";
import Summary from "./Summary";

const Container = styled.div`
  background-color: #F7F8F9;
  display: flex;
  justify-content: center;
`;

const Hero = (props) => {
  return(
    <Container>
      <Summary listing={props.listing}/>
      <Gallery images={props.listing.media.images} />
    </Container>
  );
};

export default Hero;