import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faCar } from '@fortawesome/free-solid-svg-icons'


const FeaturesSpan = styled.span`
  margin-right: 12px;
`;

const FeaturesContainer = styled.div`
  color: #333f48;
  font-size: 16px;
  line-height: 24px;
  font-family: "PangeaRegular";
  font-weight: 400;
`;

const Feature = (props) => {
  if (props.number === 0) {
    return null;
  }

  return (
    <FeaturesSpan>
      <FontAwesomeIcon icon={props.icon} className="feature-icon" />
      {props.number}
    </FeaturesSpan>
  );
};

const GeneralFeatures = (props) => {
    return (
      <FeaturesContainer>
        <Feature number={props.generalFeatures.bedrooms.value} icon={faBed} />
        <Feature number={props.generalFeatures.bathrooms.value} icon={faBath} />
        <Feature number={props.generalFeatures.parkingSpaces.value} icon={faCar} />
      </FeaturesContainer>
    );
};
  
export default GeneralFeatures;