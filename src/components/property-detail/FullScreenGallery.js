import { useState } from "react";
import styled from "styled-components";
import { BookContent, MoviePlay, Cube, WindowClose } from "@styled-icons/boxicons-regular";

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
`;

const FullScreenGallery = (props) => {

  const imageUrls = props.images.map((item) => {
    return item.templatedUrl.replace('{size}', '1000x750')
   });

   const [imageIndex, setImageIndex] = useState(0);

  return(
    <Container>
      <TopBar>
        <div>1/11</div>
        <IconContainer>
          <Icon title="Floorplan"><BookContent size="24"/></Icon>
          <Icon title="Video"><MoviePlay size="24"/></Icon>
          <Icon title="3D tour"><Cube size="24"/></Icon>
        </IconContainer>
        <WindowCloseContainer title="Closed (Esc)"><WindowClose size="24"/></WindowCloseContainer>
      </TopBar>
      <ImageContainer>
        <img src={imageUrls[imageIndex]} alt="fullscreengallery"/>
      </ImageContainer>
    </Container>
  )
};

export default FullScreenGallery;