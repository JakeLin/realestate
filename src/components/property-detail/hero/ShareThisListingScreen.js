import styled from "styled-components";
import { Facebook, Twitter } from "@styled-icons/boxicons-logos";
import { MailSend,  Download, Copy } from "@styled-icons/boxicons-regular";
import { Close } from "@styled-icons/evil";
import { useState } from "react";

const Container = styled.div`
  position: fixed;
  background: #00000098;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10002;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  width: 450px;
  background-color: white;
  padding: 40px;
  border-radius: 1%;
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  &:hover {
    background-color: rgb(247, 248, 249);
    cursor: pointer;
  };
`;

const Sharelisting = styled.h3`
  font-family: "PangeaRegular";
  font-size: 18px;
  font-weight: 700px;
  line-height: 22px;
  color: rgb(51, 63, 72);
`;

const SharableLink = styled.a`
  display: flex;
  margin-bottom: 12px;
  text-decoration: none;
  &:hover {
    background-color: rgb(247, 248, 249);
    cursor: pointer;
  }
`;

const SharableLinkIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: rgb(247, 248, 249);
  border-radius: 50%;
  margin-right: 12px;
  color: rgb(51, 63, 72)
`;

const SharableLinkText = styled.span`
  font-family: "PangeaRegular";
  font-size: 16px;
  font-weight: 300;
  line-height: 48px;  
  color: rgb(43, 110, 210);
  &:hover {
    color: rgb(43, 110, 210);
  };
`;

const ShareThisListingScreen = (props) => {
  const encodedUrl = encodeURIComponent(props.sharableUrl);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=Check%20out%20this%20property%20on%20realestate.com.au%20${encodedUrl}`;
  const emailUrl = `mailto:?subject=Check%20out%20this%20property%20on%20realestate.com.au%20&body=${encodedUrl}`;
  const pdfUrl = props.sharableUrl + '.pdf';

  const [hasLinkCopied, setHasLinkCopied] = useState(false);

  const copyLinkClick = (event) => {
    event.preventDefault();
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
      if (result.state === "granted" || result.state === "prompt") {
        navigator.clipboard.writeText(props.sharableUrl);
        setHasLinkCopied(true);
      }
    });
  };

  return(
    <Container>
      <Card>
        <CloseButtonContainer>
          <Close onClick={props.closeSharePopup}/>
        </CloseButtonContainer>
        <div>
          <Sharelisting>Share this listing</Sharelisting>
          <SharableLink href={facebookUrl} target="_blank">
            <SharableLinkIcon><Facebook size="24"/></SharableLinkIcon>
            <SharableLinkText>Facebook</SharableLinkText>
          </SharableLink>
          <SharableLink href={twitterUrl} target="_blank">
            <SharableLinkIcon><Twitter size="24"/></SharableLinkIcon>
            <SharableLinkText>Twitter</SharableLinkText>
          </SharableLink>
          <SharableLink href={emailUrl} target="_blank">
            <SharableLinkIcon><MailSend size="24"/></SharableLinkIcon>
            <SharableLinkText>Email</SharableLinkText>
          </SharableLink>
          <SharableLink onClick={copyLinkClick}>
            <SharableLinkIcon><Copy size="24"/></SharableLinkIcon>
            <SharableLinkText>{hasLinkCopied ? 'Link copied' : 'Copy link'}</SharableLinkText>
          </SharableLink>
          <SharableLink href={pdfUrl} target="_blank">
            <SharableLinkIcon><Download size="24"/></SharableLinkIcon>
            <SharableLinkText>Download PDF</SharableLinkText>
          </SharableLink>
        </div>
      </Card>
    </Container>
  )
};

export default ShareThisListingScreen;