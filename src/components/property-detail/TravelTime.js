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
  padding: 12px 24px;
  margin-top: 16px;
  font-size: 16px;
  line-height: 24px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: #697684;
  background-color: white;
  color: #333F48;

  &:hover {
    cursor: pointer;
    background-color: rgb(247, 248, 249);
    border: 0.0625rem solid rgb(51, 63, 72);
  }

  &:disabled {
    border-color:  #E9EBED;
    color: #A5ADB5;
    cursor: not-allowed;
    background-color: white;
  }
`;

const Divider = styled.div`
  margin: 24px 0;
  height: 1px;
  background-color: rgb(233, 235, 237);
`;

const Address = styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: rgb(51, 63, 72);
  font-family: "PangeaLight";
`;

const TravelTime = (props) => {
  const [to, setTo] = useState('');
  const [name, setName] = useState('');
  const [addresses, setAddresses] = useState([]);

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const isAddLocationButtonDisabled = () => {
    return to.trim().length === 0;
  };

  const handleButtonClick = () => {
    setAddresses((previousAddresses) => {
      return [...previousAddresses, to];
    }); 
  };

  return(
    <Container>
      <Title>Your travel time</Title>
      <FromAddress>From {props.travelFromAddress}</FromAddress>
      <div>
        {
          addresses.map((address) =>
            <div>
              <Address>{address}</Address>
              <Divider />
            </div>
          )
        }
      </div>
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
        <Button disabled={isAddLocationButtonDisabled()} onClick={handleButtonClick}>Add location</Button>
      </ButtonContainer>
      <div>
        {to}
        {name}
      </div>
    </Container>
  )
};

export default TravelTime;