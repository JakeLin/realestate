import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  background: #00000098;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10002;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  width: 450px;
  background-color: white;
  padding: 40px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ShareThisListingScreen = (props) => {
  return(
    <Container onClick={props.closeSharePopup}>
      <Card>
        <CloseButton onClick={props.closeSharePopup}>X</CloseButton>
        <div>
          <div>Share this listing</div>
          <div>Facebook</div>
          <div>Twitter</div>
          <div>Email</div>
          <div>Copy link</div>
          <div>Download PDF</div>
        </div>
      </Card>
    </Container>
  )
};

export default ShareThisListingScreen;