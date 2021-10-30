import styled from "styled-components";
import { Star } from '@styled-icons/boxicons-solid';

const Container = styled.div`
  width: 300px;
  height: 402px;
  margin-left: 40px;
  border-radius: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`;

const BrandingBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px 3px 0 0;
  padding: 6px 0;
  background-color: ${props => props.backgroundColor};
`;

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

const ListerPhoneNumber = styled.div`
  font-family: "PangeaRegular";
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  color: #333F48;
`;

const ListerRatingsReviewsContainer = styled.div`
  font-family: "PangeaRegular";
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: #697684;
`;

const ListerRatingsReviews = (props) => {
  if (props.listerRatingsReviews.totalReviews === 0) {
    return <ListerRatingsReviewsContainer>(No reviews yet)</ListerRatingsReviewsContainer>
  } else {
    return(
      <ListerRatingsReviewsContainer>
          <Star size="14" color="#FFB200" /> {props.listerRatingsReviews.avgRating} ({props.listerRatingsReviews.totalReviews} reviews)
      </ListerRatingsReviewsContainer>
    );
  }
};

const AgentFloatingWidget = (props) => {
  const logoUrl = props.listingCompany.media.logo.templatedUrl.replace('{size}', '170x32');
  const agentPhotoUrl = props.listers[0].photo.templatedUrl.replace('{size}', '120x120');
  // const listerRatingsReviews = props.listers[0].listerRatingsReviews;
  const listerRatingsReviews = { avgRating: 4.5, totalReviews: 32 };
  return(
    <Container>
      <BrandingBar backgroundColor={props.listingCompany.branding.primaryColour}>
        <a target="_blank" href={props.listingCompany._links.canonical.href}>
          <img src={logoUrl} alt="" />
        </a>
      </BrandingBar>
      <AgentDetailsContainer>
        <AgentPhotoUrlContainer>
          <AgentPhotoUrl src={agentPhotoUrl} alt="" />
        </AgentPhotoUrlContainer>
        <AgentDetails>
           <AgentName>
             <AgentNameLink target="_blank" href={props.listingCompany._links.canonical.href}>{props.listers[0].name}</AgentNameLink>
            </AgentName>
           <ListerRatingsReviews listerRatingsReviews={listerRatingsReviews} />
           <ListerPhoneNumber>{props.listers[0].phoneNumber.display}</ListerPhoneNumber>
        </AgentDetails>
      </AgentDetailsContainer>
    </Container>
  );
}

export default AgentFloatingWidget;