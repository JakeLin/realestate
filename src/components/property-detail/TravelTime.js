import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { getTrevalTime as get } from '../../mockBackend/fetch';

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

const AddLocationButton = styled.button`
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

const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgb(51, 63, 72);
  font-family: "PangeaRegular";
`;

const Address = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: rgb(51, 63, 72);
  font-family: "PangeaLight";
`;

const RemoveButton = styled.button`
  padding: 12px;
  font-size: 14px;
  line-height: 20px;
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
`;

const InputDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Divider = styled.div`
  margin: 12px 0;
  height: 1px;
  background-color: rgb(233, 235, 237);
`;

const TravelTypeItems = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(233, 235, 237);
  margin-bottom: 36px;
  margin-top: 8px;
`;

const TravelTypeButton = styled.button`
  padding: 8px 12px;
  color: rgb(51, 63, 72);
  font-family: "PangeaRegular";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  background-color: white;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const TravelDetailsAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const TravelTimeDuration = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgb(51, 63, 72);
  font-family: "PangeaRegular";
`;

const TravelDistance = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: rgb(51, 63, 72);
  font-family: "PangeaLight";
`;

const SelectedIndicator = styled.div`
  height: 2px;
  background-color: rgb(228, 0, 43);
`;


const TravelItem = (props) => {
  const [travelTimeDuration, setTravelTimeDuration] = useState('Loading...');
  const [travelDistance, setTravelDistance] = useState('');

  useEffect(() => {
    setTravelTimeDuration('Loading...');
    setTravelDistance('');
    get(props.from, props.item.address, props.travelType).then((response) => {
      setTravelTimeDuration(response.data.time);
      setTravelDistance(response.data.distance);
    });
  }, [props.from, props.item.address, props.travelType]);

  const handleRemoveClick = () => {
    props.setTravelItems((previousTravelItems) => {
      return previousTravelItems.filter((unusedItem, index) => {
        return props.index !== index
      });
    });    
  };

  return(
    <div>
      <InputDetails>
        <div>
          <Name>{props.item.name}</Name>
          <Address>{props.item.address}</Address>
        </div>
        <TravelDetailsAndButton>
          <div>
            <TravelTimeDuration>{travelTimeDuration}</TravelTimeDuration>
            <TravelDistance>{travelDistance}</TravelDistance>
          </div>
          <RemoveButton onClick={handleRemoveClick}>Remove</RemoveButton>
        </TravelDetailsAndButton>
      </InputDetails>
      <Divider />
    </div>
  );
};

const TravelItemContainer = (props) => {
  return(
    props.travelItems.map((item, index) => {
      return(
        <TravelItem key={index} item={item} index={index} setTravelItems={props.setTravelItems} from={props.from} travelType={props.travelType} />
      )
    })
  );
};

const TravelTime = (props) => {
  const [to, setTo] = useState('');
  const [name, setName] = useState('');
  const [travelItems, setTravelItems] = useState([{address: '511 Church St, Richmond, Vic 3121', name: 'REA'}]);
  const [selectedIndicatorIndex, setSelectedIndicatorIndex] = useState(0);

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const updateTravalItems = (previousTravelItems) => {
    return [...previousTravelItems, {address: to, name: name}];
  };

  const handleButtonClick = () => {
    setTravelItems(updateTravalItems);
    setTo('');
    setName('');
  };

  const isAddLocationButtonDisabled = () => {
    return to.length === 0;
  };

  const TravelTypes = (props) => {
    return(
      <TravelTypeItems>
        <div>
          <TravelTypeButton onClick={() => props.setSelectedIndicatorIndex(0)}>Driving</TravelTypeButton>
          { props.selectedIndicatorIndex === 0 && <SelectedIndicator /> }
        </div>
        <div>
          <TravelTypeButton onClick={() => props.setSelectedIndicatorIndex(1)}>Transit</TravelTypeButton>
          { props.selectedIndicatorIndex === 1 && <SelectedIndicator /> }
        </div>
        <div>
          <TravelTypeButton onClick={() => props.setSelectedIndicatorIndex(2)}>Walking</TravelTypeButton>
          { props.selectedIndicatorIndex === 2 && <SelectedIndicator /> }
        </div>
        <div>
          <TravelTypeButton onClick={() => props.setSelectedIndicatorIndex(3)}>Cycling</TravelTypeButton>
          { props.selectedIndicatorIndex === 3 && <SelectedIndicator /> }
        </div>
      </TravelTypeItems>
    )
  };

  const getTravelType = () => {
    switch (selectedIndicatorIndex) {
      case 0:
        return 'driving';
      case 1:
        return 'transit';
      case 2:
        return 'walking';
      case 3:
        return 'cycling';
      default:
        return 'unknown';
    } 
  };

  return(
    <Container>
      <Title>Your travel time</Title>
      <FromAddress>From {props.travelFromAddress}</FromAddress>
      { travelItems.length > 0 && <TravelTypes selectedIndicatorIndex={selectedIndicatorIndex} setSelectedIndicatorIndex={setSelectedIndicatorIndex} /> }
      <TravelItemContainer travelItems={travelItems} setTravelItems={setTravelItems} from={props.travelFromAddress} travelType={getTravelType()} />
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
          { travelItems.length < 4 && <AddLocationButton disabled={isAddLocationButtonDisabled()} onClick={handleButtonClick}>Add location</AddLocationButton>}
      </ButtonContainer>
    </Container>
  );
}

export default TravelTime;