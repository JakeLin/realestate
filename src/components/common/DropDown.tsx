import styled from "styled-components";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "@styled-icons/boxicons-regular";

const DropDownButton = styled.button `
  border: none;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  background-color: white;
  font-family: "PangeaLight";
  font-size: 16px;
  font-weight: 300;
  line-height: 1em;
  padding: 0;
  color: rgb(5, 95, 180);
`;

const Container = styled.div`
  position: relative;
`;

const PopupContainer = styled.div`
  position: absolute;
  top: -12px;
  left: -12px;
  right: -16px;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  display: flex;
  flex-direction: column;
`;

const SelectedPopupButton = styled.button`
  border: none;
  background-color: white;
  font-family: "PangeaLight";
  font-size: 16px;
  font-weight: 300;
  color: rgb(5, 95, 180);
  line-height: 1em;
  padding: 12px;
  text-align: start;
  &:hover {
    cursor: pointer;
  }
`;

const UnSelectedPopUpButton = styled.button`
  border: none;
  border-top-style: solid;  
  border-top-color: #D2D5DA;
  border-top-width: 1px;
  background-color: white;
  font-family: "PangeaLight";
  color: #333F48;;
  font-size: 16px;
  font-weight: 300;
  line-height: 1em;
  padding: 12px;
  text-align: start;
  &:hover {
    cursor: pointer;
  }
`;

interface PopupProps {
  selections: Option[]
  closePopup: Function
  setSelectedOption: React.Dispatch<React.SetStateAction<Option>>
  selectedOption: Option
};

const Popup = (props: PopupProps) => {
  const popupButtonClicked = (key: string) => {
    const selectedOption = props.selections.find(element => element.key === key) || props.selections[0];
    props.setSelectedOption(selectedOption);
    props.closePopup();
  };

  const unSelectedOptions = props.selections.filter((element) => {
    return element.key !== props.selectedOption.key;
  });

  return(
    <PopupContainer>
      <SelectedPopupButton onClick={() => popupButtonClicked(props.selectedOption.key)}>{props.selectedOption.display}<ChevronUp size="20" /></SelectedPopupButton>
      {
        unSelectedOptions.map((element) => {
          return (
            <UnSelectedPopUpButton onClick={() => popupButtonClicked(element.key)}>{element.display}</UnSelectedPopUpButton>
          )
        })
      }
    </PopupContainer>
  );
}

interface Option {
  key: string
  display: string
  isDefaultSelected: boolean
};

interface Props {
  options: Option[]
};

const DropDown = (props: Props) => {
  const defaultOption = props.options.find(element => element.isDefaultSelected) || props.options[0];
  const [selectedOption, setSelectedOption] = useState<Option>(defaultOption);
  const [isOptionsOpened, setIsOptionsOpened] = useState<boolean>(false);
  
  return (
    <Container>
      <DropDownButton onClick={() => setIsOptionsOpened(true)}>{selectedOption.display}<ChevronDown size="20" /></DropDownButton>
      { isOptionsOpened && 
        <Popup selections={props.options} 
          closePopup={() => setIsOptionsOpened(false)} 
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption} />}
      </Container>
  )
};

export default DropDown;