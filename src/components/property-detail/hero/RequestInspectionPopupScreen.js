import styled from "styled-components";
import BrandingBar from "../BrandingBar";

const Container = styled.div`
  position: fixed;
  background: #00000098;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10002;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  padding: 6px 0;
`;

const SubContainer = styled.div`
  position: relative;
  width: 450px;
  background-color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px 15px;
`;

const Title = styled.h2`
  font-family: "PangeaRegular";
  font-size: 16px;
  color: rgb(51, 63, 72);
`;

const Address = styled.div`
  font-family: "PangeaRegular";
  font-size: 12px;
  font-weight: 300;
  color: rgb(97, 97, 97);
  margin-top: 8px;
`;

const SubTitle = styled.h3`
  font-family: "PangeaRegular";
  font-size: 13px;
  font-weight: 300;
  line-height: 19.5px;
  color: rgb(51, 63, 72);
  width: 100%;
`;

const RemarksTitle = styled.div`
  font-family: "PangeaRegular";
  font-size: 11px;
  font-weight: 300;
  line-height: 16.5px;
  color: rgb(97, 97, 97);
`;

const DayAndTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Date = styled.input`
  width: 48%;
`;

const Time = styled.input`
  width: 48%;
`;

const RequestInspectionPopupScreen = (props) => {
  return (
    <div>
      <Container>
        <div>
          <CloseButton>X CLOSE</CloseButton>
          <SubContainer>
            <BrandingBar listingCompany={props.listingCompany} height="40" />
            <ContentContainer>
              <Title>Book an Inspection</Title>
              <Address>{props.address}</Address>
              <SubTitle>Inspection day and time</SubTitle>
              <DayAndTimeContainer>
                <Date type="date" placeholder="Day" /><Time type="time" placeholder="Time" />
              </DayAndTimeContainer>
              <div>
                <input type="checkbox" />
                <div>
                  <SubTitle>I can't find a suitable day or time</SubTitle>
                  <RemarksTitle>One of our agents will get in touch to arrange another time</RemarksTitle>
                </div>
              </div>
            </ContentContainer>
          </SubContainer>
        </div>
      </Container> 
    </div>
  )
};

export default RequestInspectionPopupScreen;