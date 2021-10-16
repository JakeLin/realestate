import styled from "styled-components";

import { useState } from 'react';

const Container = styled.div`
  font-family: "PangeaRegular";
  margin: 24px 0;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #333F48;
`;

const FromAddress = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  margin-top: 16px;
  font-family: "PangeaLight";
`;

const DestinationContainer = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const InputBoxContainer = styled.div`
  width: 49.5%;
`;

const InputBoxName = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #333F48;
`;

const InputBox = styled.input`
  border: 1px;
  border-style: solid;
  border-color:  #697684;
  border-radius: 3px;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #697684;
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  margin-top: 4px;
  &:focus {
    outline-color: #000;
  };
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Button = styled.button`
  border: 1px;
  border-style: solid;
  border-color:  #E9EBED;
  border-radius: 3px;
  background-color: white;
  padding: 12px 24px;
  margin-top: 16px;
  font-size: 16px;
  line-height: 24px;
  color: #A5ADB5;
`;

const TravelTime = (props) => {
  const [to, setTo] = useState('');
  const [name, setName] = useState('');

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return(
    <Container>
      <Title>Your travel time</Title>
      <FromAddress>From {props.travelFromAddress}</FromAddress>
      <DestinationContainer>
        <InputBoxContainer>
          <InputBoxName>To
            <InputBox type="text" placeholder="Location address" value={to} onChange={handleToChange} />
          </InputBoxName>
        </InputBoxContainer>
        <InputBoxContainer>
          <InputBoxName>Name
            <InputBox type="text" placeholder="Name your destination(optional)" value={name} onChange={handleNameChange} />
          </InputBoxName>
        </InputBoxContainer>
      </DestinationContainer>
      <ButtonContainer>
        <Button>Add location</Button>
      </ButtonContainer>
      <div>
        {to}
        {name}
      </div>
    </Container>
  )
};

export default TravelTime;