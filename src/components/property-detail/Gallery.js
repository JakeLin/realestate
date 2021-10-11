import styled from "styled-components";

const SubImages = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Gallery = (props) => {
  const mainImageUrl = props.images[0].templatedUrl.replace('{size}', '800x480');
  const leftImageUrl = props.images[1].templatedUrl.replace('{size}', '264x128');
  const middleImageUrl = props.images[2].templatedUrl.replace('{size}', '264x128');
  const rightImageUrl = props.images[3].templatedUrl.replace('{size}', '264x128');

  return(
    <div>
      <img src={mainImageUrl} alt="" />
      <SubImages>
        <img src={leftImageUrl} alt="" />
        <img src={middleImageUrl} alt="" />
        <img src={rightImageUrl} alt="" />
      </SubImages>
    </div>
  );
}

export default Gallery