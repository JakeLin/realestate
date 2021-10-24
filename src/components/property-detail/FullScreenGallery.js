import { useState } from "react";
import styled, { css } from "styled-components";
import { BookContent, MoviePlay, Cube, WindowClose, ChevronLeft, ChevronRight } from "@styled-icons/boxicons-regular";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #22272E;
  color: #fff;
  font-size: 14px;
  line-height: 44px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`;

const IconContainer = styled.button`
  display: flex;
  justify-content: space-between;
  background: none;
  border: none;
  color: #fff;
`;

const Page = styled.div`
  opacity: 0.75;
`;

const Icon = styled.div`
  margin-right: 20px;
  opacity: 0.75;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const WindowCloseContainer = styled.div`
  opacity: 0.75;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
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
    return item.templatedUrl.replace('{size}', '1000x750')
   });

   const [imageIndex, setImageIndex] = useState(0);

  return(
    <Container>
      <TopBar>
        <Page>1/11</Page>
        <IconContainer>
          <Icon title="Floorplan"><BookContent size="24"/></Icon>
          <Icon title="Video"><MoviePlay size="24"/></Icon>
          <Icon title="3D tour"><Cube size="24"/></Icon>
        </IconContainer>
        <WindowCloseContainer title="Closed (Esc)"><WindowClose size="24"/></WindowCloseContainer>
      </TopBar>
      <ImageContainer>
        <img src={imageUrls[imageIndex]} alt="fullscreengallery"/>
        <ButtonContainer>
          <LeftButton title="Previous (arrow left)"><ChevronLeft size="88" width="44"/></LeftButton>
          <RightButton title="Next (arrow right)"><ChevronRight size="88" width="44"/></RightButton>
        </ButtonContainer>
      </ImageContainer>
    </Container>
  )
};

export default FullScreenGallery;