import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 660px;
`;

const CalculatorContainer = styled.div`
  /* padding-top: 24px;
  padding-bottom: 24px; */
  background-color: pink;
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

const Button = styled.button`
  width: 94px;
  height: 32px;
  padding: 6px 16px;
`;

const HomeLoanContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const HomeLoanScheme = styled.div`
  background-color: green;
  width: 50%;
`;


const HomeLoanCalculator = () => {
  return(
    <Container>
      <HomeLoanContainer>
        <CalculatorContainer>
          <Title>HOME LOAN CALCULATOR</Title>
          <RepaymentAmount>$2,303/month</RepaymentAmount>
          <Remarks>estimated repayment</Remarks>
        </CalculatorContainer>
        <Button>Calculate</Button>
      </HomeLoanContainer>
      <HomeLoanScheme>First Home Loan Deposit Scheme</HomeLoanScheme>
    </Container>
  );
}

export default HomeLoanCalculator;