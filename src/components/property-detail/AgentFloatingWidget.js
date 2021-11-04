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
  width: 100%;
  height: 1px;
  background-color: #D2D5DA;
`;

const ListingCompanyName = styled.div`
  font-family: "PangeaRegular";
  font-size: 16px;
  line-height: 24px;
  color: #2B6ED2;
  margin-top: 12px;
  margin-left: 16px;
`;

const ListingCompanyAddress = styled.div`
  font-family: "PangeaRegular";
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: #333F48;
  margin: 4px 16px 12px 16px;
`;

const AgentFloatingWidget = (props) => {
  const logoUrl = props.listingCompany.media.logo.templatedUrl.replace('{size}', '170x32');
  const address = props.listingCompany.address.display.fullAddress;
  const agentName = props.listingCompany.name;

  return(
    <Container>
      <BrandingBar backgroundColor={props.listingCompany.branding.primaryColour}>
        <a target="_blank" href={props.listingCompany._links.canonical.href}>
          <img src={logoUrl} alt="" />
        </a>
      </BrandingBar>
      {
        props.listers.map((item, index, array) => {
          return <ListerDetails key={index} lister={item} shouldDisplayDivider={index !== array.length - 1} />
        })
      }
      <Divider />
      <ListingCompanyName>{agentName}</ListingCompanyName>
      <ListingCompanyAddress>{address}</ListingCompanyAddress>
      <a href="#enquiry-form">Get in touch</a>
    </Container>
  );
}

export default AgentFloatingWidget;