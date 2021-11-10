import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  background-color: rgb(247, 248, 249);
  font-family: "PangeaRegular";
  font-size: 14px;
  line-height: 20px;
  color: #333F48;
`;

const FooterDisclaimer = styled.span`
  font-weight: 600;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterDisclaimer>Disclaimer:</FooterDisclaimer> This website is a personal project and have no official affiliation with REA.
        <p><FooterDisclaimer>Source code:</FooterDisclaimer> <a target="_blank" rel="noreferrer" href="https://github.com/AshleeTan/realestate">https://github.com/AshleeTan/realestate</a></p>
      </div>
    </FooterContainer>
  )
};

export default Footer;