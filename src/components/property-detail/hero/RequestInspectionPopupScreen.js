import moment from 'moment';
import Select from 'react-select';
import { useState } from 'react';
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

const DateTimeContainer = styled.div`
  border-radius: 4px;
  border-color: ${props => props.shouldDisplayError ? '#d43900' : 'rgb(195, 200, 206)'};
  border-style: solid;
  border-width: 2px;
  color: rgb(155, 155, 155);
`;

const customStyles = {
  control: () => ({
    display: 'flex'
  })
};

const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 17px;
`;

const Checkbox = styled.input.attrs({type: 'checkbox'})`
  margin-left: 0;
`;

const CheckboxContent = styled.div`
  margin-left: 8px;
`;

const Divider = styled.div`
  margin: 0 auto;
  width: 100%;
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
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.shouldDisplayError ? '#d43900' : 'rgb(195, 200, 206)'};
  padding: 13px 16px;
  color: #333f48;
  &::placeholder {
    color: #333f4866;
  };
  &:focus {
    outline-color: ${props => props.shouldDisplayError ? '#d43900' : '#000'};
  };
  margin: 10px 0 5px 0;
`;

const DropdownList = styled.div`
  font-family: "PangeaRegular";
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0 5px 0;
  border-radius: 4px;
  border-color: rgb(195, 200, 206);
  border-style: solid;
  border-width: 2px;
  font-size: 13px;
  font-weight: 300;
  color: #333f48;
  letter-spacing: 0.6px;
`;

const CommentTextarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  border-color: rgb(195, 200, 206);
  border-style: solid;
  border-width: 1px;
  padding: 13px 16px;
  font-size: 13px;
  font-weight: 300;
  color: #333f48;
  &::placeholder {
    color: #333f4866;
  };
  &:focus {
    outline-color: #000;
  };
  letter-spacing: 0.6px;
  text-align: left;
  margin: 10px 0 5px 0;
`;

const SubmitButton = styled.button`
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

const ErrorMessage = styled.div`
  margin: 4px 0 0;
  color: #d43900;
`;

const FieldAndErrorContainer = styled.div`
  box-sizing: border-box;
  width: calc(50% - 6px);
  font-family: "PangeaRegular";
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.6px;
`;

const RequestInspectionPopupScreen = (props) => {
  const dateOptions = [];
  for (let i = 1; i <= 10; ++i) {
    const futureDate = moment().add(i, 'days');
    const value = futureDate.format('L');
    const label = futureDate.format('ddd DD MMM YYYY');
    dateOptions.push({value, label});
  }

  const timeOptions = [
    {value: '10:00', label: '10:00AM-10:30AM'},
    {value: '10:30', label: '10:30AM-11:00AM'},
    {value: '11:00', label: '11:00AM-11:30AM'},
    {value: '11:30', label: '11:30AM-12:00PM'},
    {value: '12:00', label: '12:00PM-12:30PM'},
    {value: '12:30', label: '12:00AM-1:00PM'},
    {value: '13:00', label: '1:00PM-1:30PM'},
    {value: '13:30', label: '1:30PM-2:00PM'},
    {value: '14:00', label: '2:00PM-2:30PM'},
    {value: '14:30', label: '2:30PM-3:00PM'}
  ];

  const currentSituationOptions = [
    {value: 'Owner', label: 'Owner/Occupier'},
    {value: 'Investor', label: 'Investor'},
    {value: 'Renter', label: 'Renter'},
    {value: 'Sharer', label: 'Sharer'}
  ];

  const expectToBuyPeriodOptions = [
    {value: '3 months', label: '0-3 months'},
    {value: '6 months', label: '4-6 months'},
    {value: '12 months', label: '7-12 months'},
    {value: '1+ Year ', label: '1+ Year'},
    {value: 'I\'m not sure', label: 'I\'m not sure'}
  ];

  const [daySelected, setDaySelected] = useState ('');
  const [shouldDisplayDaySelectedError, setShouldDisplayDaySelectedError] = useState(false);
  const [timeSelected, setTimeSelected] = useState ('');
  const [shouldDisplayTimeSelectedError, setShouldDisplayTimeSelectedError] = useState(false);
  const [firstNameFilled, setFirstNameFilled] = useState('');
  const [shouldDisplayFirstNameFilledError, setShouldFirstNameFilledError] = useState(false);
  const [lastNameFilled, setLastNameFilled] = useState('');
  const [shouldDisplayLastNameFilledError, setShouldDisplayLastNameFilledError] = useState(false);
  const [emailFilled, setEmailFilled] = useState('');
  const [shouldDisplayEmailFilledError, setShouldDisplayEmailFilledError] = useState(false);
  const [mobileFilled, setMobileFilled] = useState('');
  const [shouldDisplayMobileFilledError, setShouldDisplayMobileFillError] = useState(false);

  const handleDaySelected = (selectedOption) => {
    setShouldDisplayDaySelectedError(false);
    setDaySelected(selectedOption.value);
    setTimeSelected(''); 
  };

  const handleTimeSelected = (selectedOption) => {
    setTimeSelected(selectedOption.value);
    setShouldDisplayTimeSelectedError(false);
  };

  const handleFirstNameFilled = (event) => {
    setFirstNameFilled(event.target.value);
    setShouldFirstNameFilledError(false);
  };

  const handleLastNameFilled = (event) => {
    setLastNameFilled(event.target.value)
    setShouldDisplayLastNameFilledError(false);
  };

  const handleEmailFilled = (event) => {
    setEmailFilled(event.target.value)
    setShouldDisplayEmailFilledError(false)
  };

  const handleMobileFilled = (event) => {
    setMobileFilled(event.target.value)
    setShouldDisplayMobileFillError(false)
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    if (daySelected.length === 0) {
      setShouldDisplayDaySelectedError(true);
      return;
    };

    if (timeSelected.length === 0) {
      setShouldDisplayTimeSelectedError(true);
      return;
    };

    if (firstNameFilled.length === 0) {
      setShouldFirstNameFilledError(true);
      return;
    };

    if (lastNameFilled.length === 0) {
      setShouldDisplayLastNameFilledError(true);
      return;
    };

    if (emailFilled.length === 0) {
      setShouldDisplayEmailFilledError(true);
      return;
    };

    const regexForValidatedEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexForValidatedEmail.test(emailFilled) === false) {
      setShouldDisplayEmailFilledError(true);
      return;
    }
  
    if (mobileFilled.length === 0) {
      setShouldDisplayMobileFillError(true);
      return;
    };

    const regexForValidatedMobile = /^[1-9]{1}[0-9]{9}$/;
    if (regexForValidatedMobile.test(mobileFilled) === false) {
      setShouldDisplayMobileFillError(true);
      return;
    };
  };

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
                <FieldAndErrorContainer>
                  <DateTimeContainer shouldDisplayError={shouldDisplayDaySelectedError}><Select value={daySelected.value} onChange={handleDaySelected} styles={customStyles} placeholder="Day" options={dateOptions} /></DateTimeContainer>
                  {shouldDisplayDaySelectedError && <ErrorMessage>Please select day</ErrorMessage>}
                </FieldAndErrorContainer>
                <FieldAndErrorContainer>
                  <DateTimeContainer shouldDisplayError={shouldDisplayTimeSelectedError}><Select value={timeSelected.length > 0 ? timeSelected.value : null } onChange={handleTimeSelected} styles={customStyles} placeholder="Time" options={timeOptions} isDisabled={daySelected === ''} /></DateTimeContainer>
                  {shouldDisplayTimeSelectedError && <ErrorMessage>Please select time</ErrorMessage>}
                </FieldAndErrorContainer>
              </DayAndTimeContainer>
              <CheckboxContainer>
                <Checkbox id="time-not-suitable-label" />
                <CheckboxContent>
                  <label htmlFor="time-not-suitable-label">
                    <SubTitle>I can't find a suitable day or time</SubTitle>
                    <RemarksTitle>One of our agents will get in touch to arrange another time</RemarksTitle>
                  </label>
                </CheckboxContent>
              </CheckboxContainer>
              <Divider />
              <SubTitle>Your personal details</SubTitle>
              <PersonalDetailsInputContainer>
                <FieldAndErrorContainer>
                  <PersonalDetailsInput shouldDisplayError={shouldDisplayFirstNameFilledError} type="text" placeholder="First Name" onChange={handleFirstNameFilled}/>
                  {shouldDisplayFirstNameFilledError && <ErrorMessage>Please fill in this field</ErrorMessage>}
                </FieldAndErrorContainer>
                <FieldAndErrorContainer>
                  <PersonalDetailsInput shouldDisplayError={shouldDisplayLastNameFilledError} type="text" placeholder="Last Name" onChange={handleLastNameFilled} />
                  {shouldDisplayLastNameFilledError && <ErrorMessage>Please fill in this field</ErrorMessage>}
                </FieldAndErrorContainer>
                <FieldAndErrorContainer>
                  <PersonalDetailsInput shouldDisplayError={shouldDisplayEmailFilledError} type="email" placeholder="Email" onChange={handleEmailFilled} />
                  {shouldDisplayEmailFilledError && <ErrorMessage>Please fill in this field</ErrorMessage>}
                </FieldAndErrorContainer>
                <FieldAndErrorContainer>
                  <PersonalDetailsInput shouldDisplayError={shouldDisplayMobileFilledError} type="text" placeholder="Mobile" onChange={handleMobileFilled} />
                  {shouldDisplayMobileFilledError && <ErrorMessage>Please fill in this field</ErrorMessage>}
                </FieldAndErrorContainer>
              </PersonalDetailsInputContainer>
              <DropdownList><Select styles={customStyles} placeholder="Current Situation" options={currentSituationOptions} /></DropdownList>
              <DropdownList><Select styles={customStyles} placeholder="When Are you Thinking of Buying?" options={expectToBuyPeriodOptions} /></DropdownList>
              <CommentTextarea type="text" placeholder="Comments" />
              <SubmitButton onClick={handleSubmitClick}>Submit</SubmitButton>
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