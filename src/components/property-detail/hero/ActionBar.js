import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Share, Star } from '@styled-icons/boxicons-regular';
import { Star as FilledStar} from "@styled-icons/boxicons-solid"
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

  const [shouldSaveProperty, setShouldSaveProperty] = useState(() => {
    const saved = localStorage.getItem('saved');
    return JSON.parse(saved);
  });

  const handleSavePropertyButtonClick = () => {
    setShouldSaveProperty(!shouldSaveProperty)
  };

  useEffect(() => {
    localStorage.setItem('saved', JSON.stringify(shouldSaveProperty));
  }, [shouldSaveProperty]);

  return (
    <Container>
      <ShareButton onClick={handleShareButtonClick}>
        <Share size="24" title="Share listing" />
      </ShareButton>
      {shouldSaveProperty ? 
        <StarButton onClick={handleSavePropertyButtonClick}>
          <FilledStar size="24" title="Saved property" color="#ffb200"/>
        </StarButton> :
        <StarButton onClick={handleSavePropertyButtonClick}>
        <Star size="24" title="Save property"/>
        </StarButton>
      }
      { shouldDisplayPopUPScreen && <ShareThisListingScreen closeSharePopup={closeSharePopup} sharableUrl={props.sharableUrl} /> }
    </Container>
  );
}

export default ActionBar;