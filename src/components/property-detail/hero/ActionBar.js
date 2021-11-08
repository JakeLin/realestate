import { useState } from "react";
import styled from "styled-components";
import { Share, Star } from '@styled-icons/boxicons-regular';
import ShareThisListingScreen from "./ShareThisListingScreen";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  };
`;

const ActionBar = () => {
  const [shouldDisplayPopUPScreen, setShouldDisplayPopUpScreen] = useState(false);

  const handleShareButtonClick = () => {
    setShouldDisplayPopUpScreen(true);
  };

  const closeSharePopup = () => {
    setShouldDisplayPopUpScreen(false);
  };

  return (
    <Container>
      <Button onClick={handleShareButtonClick}>
        <Share size="24" />
      </Button>
      <Button>
        <Star size="24" />
      </Button>
      { shouldDisplayPopUPScreen && <ShareThisListingScreen closeSharePopup={closeSharePopup} /> }
    </Container>
  );
}

export default ActionBar;