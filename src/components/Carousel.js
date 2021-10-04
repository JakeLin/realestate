import styled from 'styled-components';

const Container = styled.div`
  height: 480px;
  width: 100%;
`;


const Carousel = (props) => {
  const imageUrls = props.images.map((image) => {
    return image.templatedUrl.replace('{size}', '640x480');
  });
  return (
    <Container>
      <img src={imageUrls[0]} alt="listing" />
    </Container>
  );
};
  
export default Carousel;