import styled from "styled-components";

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
  }
`;

const RequestInspection = () => {
  return(
    <Button>
      Request an inspection
    </Button>
  );
}

export default RequestInspection;