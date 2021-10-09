import styled from "styled-components";

import Gallery from "./Gallery";

const Container = styled.div`
  background-color: #F7F8F9;
  height: 611px;
`;

const Hero = (props) => {
  console.log(props.listing);
  return(
    <Container>
      <Gallery images={props.listing.media.images} />
      
    </Container>
  );
};

export default Hero;