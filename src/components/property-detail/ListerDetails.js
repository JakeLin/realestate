import { useState } from "react";
import styled from "styled-components";
import { Star } from '@styled-icons/boxicons-solid';

const AgentPhotoUrl = styled.img`
  border: 1px;
  border-style: solid;
  border-color: #D2D5DA;
  border-radius: 50%;
  height: 60px;
  width: 60px;
`;

const AgentDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const AgentPhotoUrlContainer = styled.div`
  margin: 18px 16px;
`;

const AgentDetails = styled.div`
  margin: 16px 0;
`;

const AgentName = styled.div`
  font-family: "PangeaRegular";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #2B6ED2;
`;

const AgentNameLink = styled.a`
  text-decoration: none;
  &:visited {
    color: #2B6ED2
  };
  &:hover {
    text-decoration: underline;
  }
`;

const ListerPhoneNumber = styled.a`
  font-family: "PangeaRegular";
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  color: #333F48;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: #D2D5DA;
  background-color: white;
  text-decoration: none;
  padding: 2px 8px;
  display: inline-block;
  margin-top: 4px;
  &:hover {
    cursor: pointer;
    background-color: rgb(247, 248, 249);
    border: 0.0625rem solid rgb(51, 63, 72);
  }
`;

const ListerRatingsReviewsContainer = styled.div`
  font-family: "PangeaRegular";
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: #697684;
  display: flex;
`;

const StarContainer = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
`;

const ReviewContainer = styled.div`
  margin-left: 4px;
`;

const Divider = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 1px;
  background-color: #D2D5DA;
`;

const ListerRatingsReviews = (props) => {
  if (props.listerRatingsReviews.totalReviews === 0) {
    return <ListerRatingsReviewsContainer>(No reviews yet)</ListerRatingsReviewsContainer>
  } else {
    const avgRating = props.listerRatingsReviews.avgRating.toFixed(1);
    return(
      <ListerRatingsReviewsContainer>
        <StarContainer><Star size="14" color="#FFB200" /></StarContainer>
        <ReviewContainer>{avgRating} ({props.listerRatingsReviews.totalReviews} reviews)</ReviewContainer>
      </ListerRatingsReviewsContainer>
    );
  }
};

const ListerDetails = (props) => {
  const agentPhotoUrl = props.lister.photo.templatedUrl.replace('{size}', '120x120');
  const listerRatingsReviews = props.lister.listerRatingsReviews;
  const phoneNumber = props.lister.phoneNumber.display;
  const agentNameLink = props.lister._links.canonical.href;
  const agentName = props.lister.name;
  const tel = `tel:${phoneNumber}`;
  const shortPhoneNumber = phoneNumber.substr(0, 8) + '...';

  const [shouldDisplayFullPhoneNumber, setShouldDisplayFullPhoneNumber] = useState(false);
  const handleDisplayNumber = (event) => {
    event.preventDefault();
    setShouldDisplayFullPhoneNumber(true);
  };

  return (
    <div>
      <AgentDetailsContainer>
        <AgentPhotoUrlContainer>
          <AgentPhotoUrl src={agentPhotoUrl} alt="" />
        </AgentPhotoUrlContainer>
        <AgentDetails>
          <AgentName>
            <AgentNameLink target="_blank" href={agentNameLink}>{agentName}</AgentNameLink>
          </AgentName>
          <ListerRatingsReviews listerRatingsReviews={listerRatingsReviews} />
          { 
            shouldDisplayFullPhoneNumber 
              ? <ListerPhoneNumber href={tel}>{phoneNumber}</ListerPhoneNumber>
              : <ListerPhoneNumber title="Click to reveal phone number" onClick={handleDisplayNumber}>{shortPhoneNumber}</ListerPhoneNumber> 
          }
        </AgentDetails>
      </AgentDetailsContainer> 
      {props.shouldDisplayDivider && <Divider />}
    </div>
  )
};

export default ListerDetails;