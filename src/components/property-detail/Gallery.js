import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  height: 611px;
`;

const SubImages = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Gallery = (props) => {
  console.log(props.images[0])
  const mainImageUrl = props.images[0].templatedUrl.replace('{size}', '800x480');
  const imageUrlLeft = props.images[1].templatedUrl.replace('{size}', '264x128');
  const imageUrlMiddle = props.images[2].templatedUrl.replace('{size}', '264x128');
  const imageUrlRight = props.images[3].templatedUrl.replace('{size}', '264x128');

  return(
    <Container>
      <img src={mainImageUrl} alt="" />
      <SubImages>
        <img src={imageUrlLeft} alt="" />
        <img src={imageUrlMiddle} alt="" />
        <img src={imageUrlRight} alt="" />
      </SubImages>
    </Container>
    
  );
}

export default Gallery