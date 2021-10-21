import { useState } from "react";
import styled from "styled-components";
import { ChevronDown, ChevronUp } from "@styled-icons/boxicons-regular";

const Divider = styled.div`
  margin: 24px 0;
  height: 1px;
  background-color: #D2D5DA;
  margin-top: 24px;
`;

const Title = styled.h2`
  font-family: "PangeaRegular";
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #333F48;
  margin-top: 24px;
`;

const Address = styled.div`
  font-family: "PangeaLight";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333F48;
  margin-top: 16px;
`;

const DiscriptionText = styled.p`
  white-space: pre-line;
  font-family: "PangeaLight";
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #333F48;
  margin-top: 16px;
`;

const ReadMoreAndLessButton = styled.button`
  font-family: "PangeaRegular";
  font-size: 16px;
  line-height: 24px;
  color: #2B6ED2;
  background: none;
  border: none;
  padding: 0;

  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

const PropertyDiscription = (props) => {
  const [shouldDisplayReadMore, setShouldDisplayReadMoreReadMore] = useState(true);

  const fullDescription = props.propertyDiscription.replace(/<br\/>/g, '\n');
  const shortDescription = fullDescription.substring(0, 300) + '...';

  const description = shouldDisplayReadMore ? shortDescription : fullDescription;
  const readMoreLinkText = shouldDisplayReadMore ? 'Read more' : 'Read less';
  const readMoreIcon = shouldDisplayReadMore ? <ChevronDown size="24" /> : <ChevronUp size="24" />

  const handleReadMoreClick = () => setShouldDisplayReadMoreReadMore(!shouldDisplayReadMore);
  
  return(
    <div>
      <Divider />
      <Title>{props.propertyTitle}</Title>
      <Address>{props.address}</Address>
      <DiscriptionText>
        {description}
      </DiscriptionText>
      <ReadMoreAndLessButton onClick={handleReadMoreClick}>{readMoreLinkText} {readMoreIcon}</ReadMoreAndLessButton>
    </div>
  )
};

export default PropertyDiscription; 