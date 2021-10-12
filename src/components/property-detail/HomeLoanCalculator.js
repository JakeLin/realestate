import styled from "styled-components";

import { LinkExternal } from "@styled-icons/boxicons-regular";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-family: "PangeaRegular";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #697684;
`;

const RepaymentAmount = styled.div`
  font-family: "PangeaRegular";
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #333F48;
  margin-top: 4px;
`;

const Remarks = styled.div`
  font-family: "PangeaRegular";
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: #697684;
  margin-top: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 6px 16px;
  font-family: "PangeaRegular";
  font-weight: 400;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: #697684;
  background-color: white;
`;

const HomeLoanContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const HomeLoanScheme = styled.div`
  width: 50%;
  text-align: right;
`;

const HomeLoanSchemeLink = styled.a`
  text-decoration: none;
  font-family: "PangeaRegular";
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #697684;

  &:hover {
    text-decoration: underline;
  }
`;

const HomeLoanCalculator = () => {
  return(
    <Container>
      <HomeLoanContainer>
        <div>
          <Title>HOME LOAN CALCULATOR</Title>
          <RepaymentAmount>$2,303/month</RepaymentAmount>
          <Remarks>estimated repayment</Remarks>
        </div>
        <ButtonContainer>
          <Button>Calculate</Button>
        </ButtonContainer>
      </HomeLoanContainer>
      <HomeLoanScheme>
        <HomeLoanSchemeLink target="_blank" href="https://www.realestate.com.au/home-loans/guides/all-about-the-first-home-loan-deposit-scheme">
          First Home Loan Deposit Scheme<br />
          Are you eligible for the scheme? <LinkExternal size="16"/>
        </HomeLoanSchemeLink>
      </HomeLoanScheme>
    </Container>
  );
}

export default HomeLoanCalculator;