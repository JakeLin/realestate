import styled from "styled-components";

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

const AgentFloatingWidget = (props) => {
  const logoUrl = props.listingCompany.media.logo.templatedUrl.replace('{size}', '170x32');

  console.log(props.listingCompany)
  return(
    <Container>
      <BrandingBar backgroundColor={props.listingCompany.branding.primaryColour}>
        <a target="_blank" href={props.listingCompany._links.canonical.href}>
          <img src={logoUrl} alt="" />
        </a>
      </BrandingBar>


    </Container>
  );
}

export default AgentFloatingWidget;