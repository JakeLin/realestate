import styled from 'styled-components';

const Container = styled.div`
  height: ${props => props.height + 'px'};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
`;

const BrandingBar = (props) => {
  const logoUrl = props.listingCompany.media.logo.templatedUrl.replace('{size}', '170x32');
  const height = props.height || 60;

  return (
    <Container backgroundColor={props.listingCompany.branding.primaryColour} height={height}>
      <img src={logoUrl} alt="" />
    </Container>
  );
};
  
export default BrandingBar;
