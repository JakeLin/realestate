import styled from "styled-components";

const Container = styled.div`
  font-family: "PangeaRegular";
  margin: 24px 0;
`;

const Title = styled.div`
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

const InputBoxName = styled.div`
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
  return(
    <Container>
      <Title>Your travel time</Title>
      <FromAddress>From {props.travelFromAddress}</FromAddress>
      <DestinationContainer>
        <InputBoxContainer>
          <InputBoxName>To</InputBoxName>
          <InputBox type="text" placeholder="Location address" />
        </InputBoxContainer>
        <InputBoxContainer>
          <InputBoxName>Name</InputBoxName>
          <InputBox type="text" placeholder="Name your destination(optional)" />
        </InputBoxContainer>
      </DestinationContainer>
      <ButtonContainer>
        <Button>Add location</Button>
      </ButtonContainer>
    </Container>
  )
}

export default TravelTime;