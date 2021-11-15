import { useState } from "react";
import styled from "styled-components";
import RequestInspectionPopupScreen from "./RequestInspectionPopupScreen";

const Button = styled.button`
  margin-top: 85px;
  padding: 12px 24px;
  background: #FFFFFF;
  font-family: "PangeaRegular";
  font-size: 16px;
  font-weight: 400;
  color: #333F48;
  border-radius: 3px;
  border-width: 1px;
  border-color: #697684;
  border-style: solid;

  &:hover {
    cursor: pointer;
    background-color: rgb(247, 248, 249);
    border: 0.0625rem solid rgb(51, 63, 72);
  }
`;

const RequestInspection = (props) => {
const [shouldDisplayPopUpScreen, setShouldDisplayPopUpScreen] = useState(false);

const handleRequestAnInspectionClick = () => {
  setShouldDisplayPopUpScreen(true);
};

const closeRequestAnInspectinPopUp = () => {
  setShouldDisplayPopUpScreen(false);
};

  return(
    <div>
      <Button onClick={handleRequestAnInspectionClick}>
        Request an inspection
      </Button>
      {shouldDisplayPopUpScreen && <RequestInspectionPopupScreen listingCompany={props.listingCompany} address={props.address} closeRequestAnInspectinPopUp={closeRequestAnInspectinPopUp}/>}
    </div>
  );
}

export default RequestInspection;