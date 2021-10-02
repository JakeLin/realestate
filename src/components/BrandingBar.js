import styled from 'styled-components';

const Container = styled.div`
  height: 54px;
  width: 100%;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  background-color: ${props => props.backgroundColor};
`;

const LogoImage = styled.img`
  margin-left: 12px;
`;

const BrandingBar = (props) => {
  console.log(props);
  const logoUrl = props.listingCompany.media.logo.templatedUrl.replace('{size}', '170x32');

  return (
    <Container backgroundColor={props.listingCompany.branding.primaryColour}>
      <LogoImage src={logoUrl} alt="" />
    </Container>
  );
};
  
export default BrandingBar;
