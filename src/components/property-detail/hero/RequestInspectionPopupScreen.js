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
  &:hover {
    cursor: pointer;
  };
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
  margin: 0;
`;

const Address = styled.div`
  font-family: "PangeaRegular";
  font-size: 12px;
  font-weight: 300;
  color: rgb(97, 97, 97);
  margin: 8px 0 25px 0;
`;

const SubTitle = styled.h3`
  font-family: "PangeaRegular";
  font-size: 13px;
  font-weight: 300;
  color: rgb(51, 63, 72);
  width: 100%;
  margin: 0;

`;

const RemarksTitle = styled.div`
  font-family: "PangeaRegular";
  font-size: 11px;
  font-weight: 300;
  color: rgb(97, 97, 97);
`;

const DayAndTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
`;

const Date = styled.input`
  width: 38%;
  border-radius: 4px;
  border-color: rgb(195, 200, 206);
  border-style: solid;
  border-width: 2px;
  padding: 13px 16px;
  font-size: 13px;
  font-weight: 300;
  color: rgb(155, 155, 155);
  letter-spacing: 0.6px;
  text-align: left;
`;

const Time = styled.input`
  width: 38%;
  border-radius: 4px;
  border-color: rgb(195, 200, 206);
  border-style: solid;
  border-width: 2px;
  padding: 13px 16px;
  font-size: 13px;
  font-weight: 300;
  color: rgb(155, 155, 155);
  letter-spacing: 0.6px;
  text-align: left;
`;

const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 17px;
`;

const Checkbox = styled.input`
  margin-left: 0;
`;

const CheckboxContent = styled.div`
  margin-left: 8px;
`;

const Divider = styled.div`
  margin: 0 auto;
  width: 370px;
  height: 1px;
  background-color: #D2D5DA;
  margin: 20px 0;
`;

const PersonalDetailsInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PersonalDetailsInput = styled.input`
  width: 38%;
  border-radius: 4px;
  border-color: rgb(195, 200, 206);
  border-style: solid;
  border-width: 1px;
  padding: 13px 16px;
  font-size: 13px;
  font-weight: 300;
  color: rgb(155, 155, 155);
  letter-spacing: 0.6px;
  text-align: left;
  margin: 10px 0 5px 0;
`;

const DropdownListContainer = styled.input`
  box-sizing: border-box;
  width:100%;
  margin: 10px 0 5px 0;
  border-radius: 4px;
  border-color: rgb(195, 200, 206);
  border-style: solid;
  border-width: 2px;
  padding: 13px 16px;
  font-size: 13px;
  font-weight: 300;
  color: rgb(155, 155, 155);
  letter-spacing: 0.6px;
  text-align: left;
`;

const CommentContainer = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border-color: rgb(195, 200, 206);
  border-style: solid;
  border-width: 1px;
  padding: 13px 16px;
  font-size: 13px;
  font-weight: 300;
  color: rgb(155, 155, 155);
  letter-spacing: 0.6px;
  text-align: left;
  margin: 10px 0 5px 0;
`;

const SubmitButtonContainer = styled.button`
  width: 200px;
  padding: 12px;
  margin-top: 15px;
  background-color: rgb(228, 0, 43);
  color: white;
  text-align: center; 
  font-size: 13px;
  font-weight: 400;
  line-height: 13px;
  border-radius: 4px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: rgb(190, 0, 18);
  }
`;

const SubmitRemarksContainer = styled.div`
  text-align: center;
  margin-top: 15px;
`;

const RequestInspectionPopupScreen = (props) => {
  return (
    <div>
      <Container>
        <div>
          <CloseButton onClick={props.closeRequestAnInspectinPopUp}>X CLOSE</CloseButton>
          <SubContainer>
            <BrandingBar listingCompany={props.listingCompany} height="40" />
            <ContentContainer>
              <Title>Book an Inspection</Title>
              <Address>{props.address}</Address>
              <SubTitle>Inspection day and time</SubTitle>
              <DayAndTimeContainer>
                <Date type="date" placeholder="Day" /><Time type="time" placeholder="Time" />
              </DayAndTimeContainer>
              <CheckboxContainer>
                <Checkbox type="checkbox" />
                <CheckboxContent>
                  <SubTitle>I can't find a suitable day or time</SubTitle>
                  <RemarksTitle>One of our agents will get in touch to arrange another time</RemarksTitle>
                </CheckboxContent>
              </CheckboxContainer>
              <Divider />
              <SubTitle>Your personal details</SubTitle>
              <PersonalDetailsInputContainer>
                <PersonalDetailsInput type="text" placeholder="First Name" />
                <PersonalDetailsInput type="text" placeholder="Last Name" />
                <PersonalDetailsInput type="email" placeholder="Email" />
                <PersonalDetailsInput type="number" placeholder="Mobile" />
              </PersonalDetailsInputContainer>
              <DropdownListContainer type="text" placeholder="Current Situation" />
              <DropdownListContainer type="text" placeholder="When Are you Thinking of Buying?" />
              <CommentContainer type="text" placeholder="Comments" />
              <SubmitButtonContainer>Submit</SubmitButtonContainer>
              <SubmitRemarksContainer>
                <RemarksTitle>By submitting you’ll be securing your booking and notified of any changes, updates or future inspections.</RemarksTitle>
              </SubmitRemarksContainer>
            </ContentContainer>
          </SubContainer>
        </div>
      </Container> 
    </div>
  )
};

export default RequestInspectionPopupScreen;