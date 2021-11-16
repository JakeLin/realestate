import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { ShareApple, Star } from "@styled-icons/evil";
import ShareThisListingScreen from "./ShareThisListingScreen";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 16px;
`;

const Button = css`
  padding: 10px;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  };
`;

const ShareButton = styled.button`
  ${Button}
`;

const StarButton = styled.button`
  ${Button}
`;

const ActionBar = (props) => {
  const [shouldDisplayPopUPScreen, setShouldDisplayPopUpScreen] = useState(false);

  const handleShareButtonClick = () => {
    setShouldDisplayPopUpScreen(true);
  };

  const closeSharePopup = () => {
    setShouldDisplayPopUpScreen(false);
  };

  const [hasPropertySaved, setHasPropertySaved] = useState(() => {
    const saved = localStorage.getItem('saved');
    return JSON.parse(saved);
  });

  const handleSavePropertyButtonClick = () => {
    setHasPropertySaved(!hasPropertySaved)
  };

  useEffect(() => {
    localStorage.setItem('saved', JSON.stringify(hasPropertySaved));
  }, [hasPropertySaved]);

  return (
    <Container>
      <ShareButton onClick={handleShareButtonClick}>
        <ShareApple size="32" title="Share listing" color="#333f48" />
      </ShareButton>
        <StarButton onClick={handleSavePropertyButtonClick}>
          <Star size="32" title={hasPropertySaved ? "Saved property" : "Save property"} color={hasPropertySaved ? "#ffb200" : "#333f48"} />
        </StarButton> 
      { shouldDisplayPopUPScreen && <ShareThisListingScreen closeSharePopup={closeSharePopup} sharableUrl={props.sharableUrl} /> }
    </Container>
  );
}

export default ActionBar;