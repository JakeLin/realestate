import styled from "styled-components";
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

const DropDown = () => {
  return (
    <DropDownButton>are a first home buyer<ChevronDown size="20" /></DropDownButton>  
  );
};

export default DropDown;