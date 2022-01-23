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

interface Option {
  value: string
  label: string
  isDefaultSelected: boolean
};

interface Props {
  options: Option[]
};

const DropDown = (props: Props) => {
  const defaultOption = props.options.find(element => element.isDefaultSelected) || props.options[0];
  const [selectedOption, setSelectedOption] = useState<Option>(defaultOption);
  
  return (
    <DropDownButton>{selectedOption.label}<ChevronDown size="20" /></DropDownButton>  
  );
};

export default DropDown;