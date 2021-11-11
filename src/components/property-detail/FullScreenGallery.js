import { useState } from "react";
import styled, { css } from "styled-components";
import { BookContent, MoviePlay, Cube, ChevronLeft, ChevronRight } from "@styled-icons/boxicons-regular";
import { Close } from "@styled-icons/evil";

const Container = styled.div`
  position: fixed;
  background-color: #22272E;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  box-sizing: border-box;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Page = styled.div`
  opacity: 0.75;
  color: #fff;
`;

const Icon = styled.button`
  margin-right: 20px;
  opacity: 0.75;
  background: none;
  border: none;
  color: #fff;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const WindowCloseContainer = styled.div`
  opacity: 0.75;
  background: none;
  border: none;
  color: #fff;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const buttonStyle = css`
  opacity: 0.6;
  background-color: #22272E;
  color: white;
  border: none;
  height: 10%;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  };
`;

const LeftButton = styled.button`
  ${buttonStyle};
  border-radius: 0 5% 5% 0;
`;

const RightButton = styled.button`
  ${buttonStyle}
  border-radius: 5% 0 0 5%;
`;

const FullScreenGallery = (props) => {

  const imageUrls = props.images.map((item) => {
    return item.templatedUrl.replace('{size}', '1000x750');
   });

  if (props.floorPlans.length > 0) {
     const floorPlanImage = props.floorPlans[0].templatedUrl.replace('{size}', '1000x750');
     imageUrls.push(floorPlanImage);
  }

  const [imageIndex, setImageIndex] = useState(props.selectedIndex);

  const previousButtonClicked = (event) => {
    setImageIndex((originalIndex) => {
      if (originalIndex === 0) {
        return imageUrls.length - 1;
      } else {
        return originalIndex - 1;
      }
    });
  };

  const nextButtonClicked = (event) => {
    setImageIndex((originalIndex) => {
      if (originalIndex === imageUrls.length - 1) {
        return 0;
      } else {
        return originalIndex + 1;
      }
    });
  };

  const floorPlanButtonClicked = () => {
    setImageIndex(imageUrls.length - 1);
  };

  return(
    <Container>
      <TopBar>
        <Page>{imageIndex + 1}/{imageUrls.length}</Page>
        <IconContainer>
          <Icon title="Floorplan" onClick={floorPlanButtonClicked}><BookContent size="24"/></Icon>
          <Icon title="Video"><MoviePlay size="24"/></Icon>
          <Icon title="3D tour"><Cube size="24"/></Icon>
        </IconContainer>
        <WindowCloseContainer title="Closed (Esc)" onClick={props.closeFullScreenImage}><Close size="24" /></WindowCloseContainer>
      </TopBar>
      <ImageContainer>
        <img src={imageUrls[imageIndex]} alt="fullscreengallery"/>
        <ButtonContainer>
          <LeftButton title="Previous (arrow left)" onClick={previousButtonClicked}><ChevronLeft size="88" width="44"/></LeftButton>
          <RightButton title="Next (arrow right)" onClick={nextButtonClicked}><ChevronRight size="88" width="44"/></RightButton>
        </ButtonContainer>
      </ImageContainer>
    </Container>
  )
};

export default FullScreenGallery;