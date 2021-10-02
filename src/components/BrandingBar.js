import './BrandingBar.css';

function BrandingBar(props) {
  console.log(props);
  const logoUrl = props.listingCompany.media.logo.templatedUrl.replace('{size}', '170x32');
  return (
    <div className="branding-bar">
      <img src={logoUrl} alt="" className="logo-image" />
    </div>
  );
}
  
export default BrandingBar;