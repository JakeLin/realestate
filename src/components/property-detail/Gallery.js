import styled from "styled-components";

const SubImages = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageButton = styled.button`
  background: none;
  border: none;
  padding: 0;

  &:hover {
    cursor: pointer;
  };
`;

const Gallery = (props) => {
  const mainImageUrl = props.images[0].templatedUrl.replace('{size}', '800x480');
  const leftImageUrl = props.images[1].templatedUrl.replace('{size}', '264x128');
  const middleImageUrl = props.images[2].templatedUrl.replace('{size}', '264x128');
  const rightImageUrl = props.images[3].templatedUrl.replace('{size}', '264x128');

  return(
    <div>
      <ImageButton onClick={() => props.openFullScreenImage(0)}>
        <img src={mainImageUrl} alt="" />
      </ImageButton>
      <SubImages>
        <ImageButton onClick={() => props.openFullScreenImage(1)}>
          <img src={leftImageUrl} alt="" />
        </ImageButton>
        <ImageButton onClick={() => props.openFullScreenImage(2)}>
          <img src={middleImageUrl} alt="" />
        </ImageButton>
        <ImageButton onClick={() => props.openFullScreenImage(3)}>
          <img src={rightImageUrl} alt="" />
        </ImageButton>
      </SubImages>
    </div>
    
  );
}

export default Gallery