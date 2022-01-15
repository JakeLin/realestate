import styled from "styled-components";

const Container = styled.div `
  margin-top: 24px;
`;

const HomeLoansTitleContainer = styled.div `
  display: flex;
  justify-content: space-between; 
`;

const Title = styled.h2 `
  font-family: "PangeaRegular";
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  color: #333F48;
`;

const HomeLoansLogo = styled.img `
  width: 197px;
  height: 32px;
  /* &:hover: {
    cursor: pointer;
  }; */
`;

const FirstHomeBuyerRemarks = styled.div `
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  font-family: "PangeaLight";
`;

const FindOutLink = styled.a `
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: white;
  font-family: "PangeaLight";
  background-color: #E4002B;
`;

const HomeLoans = () => {
  return (
  <Container>
    <HomeLoansTitleContainer>
      <div>
        <Title>Home Loans</Title>
        <a target="_blank" href="https://www.realestate.com.au/home-loans/">
          <HomeLoansLogo alt="REA HomeLoans Logo" src="https://dam-assets.au.reastatic.net/image/upload/fl_sanitize/v1630457820/site-assets/realestate.com.au/finx/realestate.com.au-homeloans.svg" />
        </a>
      </div>
      <div>
        <FirstHomeBuyerRemarks>Are you eligible for the First Home Buyer Deposit Scheme?</FirstHomeBuyerRemarks>
        <FindOutLink target="_blank">Find Out</FindOutLink>
      </div>
    </HomeLoansTitleContainer>

  </Container>
  
  );
};

export default HomeLoans;