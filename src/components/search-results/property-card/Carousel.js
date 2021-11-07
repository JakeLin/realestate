import { useState } from 'react';
import styled from 'styled-components';

import { ChevronLeft, ChevronRight } from '@styled-icons/boxicons-regular';


const Container = styled.div`
  height: 480px;
  width: 100%;
  position: relative;
`;

const ListingImage = styled.img`
  position: absolute;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  border: 0px;
  background-color: transparent;
  height: 100px;

  &:hover {
    cursor: pointer;
    background-color: #00000073;
  }
`;

const Carousel = (props) => {
  const chevronSize = 88;

  const imageUrls = props.images.map((image) => {
    return image.templatedUrl.replace('{size}', '640x480');
  });

  const [imageIndex, setImageIndex] = useState(0);

  const previousButtonClicked = (event) => {
    event.preventDefault();
    setImageIndex((originalIndex) => {
      if (originalIndex === 0) {
        return imageUrls.length - 1;
      } else {
        return originalIndex - 1;
      }
    });
  };

  const nextButtonClicked = (event) => {
    event.preventDefault();
    setImageIndex ((originalIndex) =>{
      if (originalIndex === imageUrls.length - 1) {
        return 0;
      } else {
        return originalIndex + 1;
      }
    });
  };
  
  return (
    <Container>
      <ListingImage src={imageUrls[imageIndex]} alt="listing" />
      <ButtonsContainer>
        <Button onClick={previousButtonClicked}>
          <ChevronLeft size={chevronSize} color="white" />
        </Button>
        <Button onClick={nextButtonClicked}>
          <ChevronRight size={chevronSize} color="white" />
        </Button>
      </ButtonsContainer>
    </Container>
  );
};
  
export default Carousel;