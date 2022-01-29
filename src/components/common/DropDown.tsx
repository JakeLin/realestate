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
  right: -12px;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  display: flex;
  flex-direction: column;
`;

const PopupButton = styled.button`
  border: none;
  background-color: white;
  font-family: "PangeaLight";
  font-size: 16px;
  font-weight: 300;
  line-height: 1em;
  padding: 12px;
  color: rgb(5, 95, 180);
  text-align: start;
  &:hover {
    cursor: pointer;
  }
`;

interface PopupProps {
  selections: Option[]
  closePopup: Function
  setSelectedOption: React.Dispatch<React.SetStateAction<Option>>
};

const Popup = (props: PopupProps) => {
  // const popupOptionCliked = (event: React.MouseEvent<HTMLElement>) => {
  //   const selectedOption = props.selections.find((selection) => selection.key === (event.target as any).key) || props.selections[0]
  //   props.setSelectedOption(selectedOption);
  //   props.setIsOptionsOpened(false);
  // };

  const popupButtonCliked = (key: string) => {
    const selectedOption = props.selections.find(element => element.key === key) || props.selections[0];
    props.setSelectedOption(selectedOption);
    props.closePopup();
  };

  return(
    <PopupContainer>
      {
        // Mapping from Array of Options to Array of Components(PopupButton)
        props.selections.map((element) => { 
          return (<PopupButton onClick={() => popupButtonCliked(element.key)}>{element.display}</PopupButton>)
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
          setSelectedOption={setSelectedOption} />}
      </Container>
  )
};

export default DropDown;