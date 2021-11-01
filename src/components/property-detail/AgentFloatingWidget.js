import styled from "styled-components";
import ListerDetails from "./ListerDetails";

const Container = styled.div`
  width: 300px;
  height: 402px;
  margin-left: 40px;
  border-radius: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`;

const BrandingBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px 3px 0 0;
  padding: 6px 0;
  background-color: ${props => props.backgroundColor};
`;

const Divider = styled.div`
  width: 300px;
  height: 1px;
  background-color: #D2D5DA;
`;

const AgentFloatingWidget = (props) => {
  const logoUrl = props.listingCompany.media.logo.templatedUrl.replace('{size}', '170x32');

  return(
    <Container>
      <BrandingBar backgroundColor={props.listingCompany.branding.primaryColour}>
        <a target="_blank" href={props.listingCompany._links.canonical.href}>
          <img src={logoUrl} alt="" />
        </a>
      </BrandingBar>
      {
        props.listers.map((item) => {
          return <ListerDetails lister={item} />
        })
      }
      <Divider />
    </Container>
  );
}

export default AgentFloatingWidget;