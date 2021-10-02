import styled from 'styled-components';

import { Bed, Car, Bath } from '@styled-icons/boxicons-regular';

const FeatureSpan = styled.span`
  margin-right: 12px;
`;

const NumberSpan = styled.span`
  margin-left: 6px;
  vertical-align: bottom;
`;

const FeaturesContainer = styled.div`
  color: #333f48;
  font-size: 16px;
  line-height: 20px;
  font-family: "PangeaRegular";
  font-weight: 400;
  margin-top: 6px;
`;

const Feature = (props) => {
  if (props.number === 0) {
    return null;
  }

  return (
    <FeatureSpan>
      {props.children}
      <NumberSpan>{props.number}</NumberSpan>
    </FeatureSpan>
  );
};

const GeneralFeatures = (props) => {
    return (
      <FeaturesContainer>
        <Feature number={props.generalFeatures.bedrooms.value} >
          <Bed size="18" />
        </Feature>
        <Feature number={props.generalFeatures.bathrooms.value} >
          <Bath size="18" />
        </Feature>
        <Feature number={props.generalFeatures.parkingSpaces.value} >
          <Car size="18" />
        </Feature>
      </FeaturesContainer>
    );
};
  
export default GeneralFeatures;