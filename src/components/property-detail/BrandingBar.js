import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
`;

const BrandingBar = (props) => {
  const logoUrl = props.listingCompany.media.logo.templatedUrl.replace('{size}', '170x32');

  return (
    <Container backgroundColor={props.listingCompany.branding.primaryColour}>
      <img src={logoUrl} alt="" />
    </Container>
  );
};
  
export default BrandingBar;
