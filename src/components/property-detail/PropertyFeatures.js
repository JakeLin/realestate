import { useState } from "react";
import { Wind, Bell, Arch, DoorOpen, Water, Dumbbell, PhoneCall, Group } from "@styled-icons/boxicons-regular";
import styled from "styled-components";
import { ChevronDown, ChevronUp } from "@styled-icons/boxicons-regular";

const Title = styled.h2`
  font-family: "PangeaRegular";
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  color: #333F48;
`;

const FeaturesContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: "PangeaLight";
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #333F48;
`;

const Feature = styled.div`
  width: 50%;
`;

const FeatureName=styled.span`
  margin-left: 8px;
`;

const ShowButton = styled.button`
  font-family: "PangeaRegular";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  background: none;
  border: none;
  margin-top: 24px;
  color: #2B6ED2;
  padding: 0;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const PropertyFeatures = (props) => {
  const [shouldShowMoreFeatures, setShouldShowMoreFeatures] = useState(true);

  const getIcon = (id) => {
    switch (id) {
      case 'airConditioning':
        return <Wind size="24" />
      case 'alarmSystem':
        return <Bell size="24" />
      case 'balcony':
        return <Arch size="24" />
      case 'builtInRobes':
        return <DoorOpen size="24" />
      case 'dishwasher':
        return <Water size="24" />   
      case 'gym':
        return <Dumbbell size="24" />
      case 'intercom':
        return <PhoneCall size="24" />
      case 'outdoorEnt':
        return <Group size="24" />
      default:
        return null;
    }
  };

  const featureFullSetTotal = props.propertyFeatures.length;
  const featureSubsetTotal = 4;
  const shouldDisplayReadMoreButton = featureFullSetTotal > featureSubsetTotal;
  const getFeatureSubset = () => {
    const propertyFeatures = props.propertyFeatures.slice(0, featureSubsetTotal);
    return propertyFeatures.map((item) => {
      return<Feature key={item.id}>{getIcon(item.id)}<FeatureName>{item.displayLabel}</FeatureName></Feature>
    });
  };

  const getFeatureFullSet = () => {
    return props.propertyFeatures.map((item) => {
      return <Feature key={item.id}>{getIcon(item.id)}<FeatureName>{item.displayLabel}</FeatureName></Feature>
    });
  };

  const ButtonText = shouldShowMoreFeatures ? `Show more features (${featureFullSetTotal - featureSubsetTotal})` : 'Show fewer';

  if (featureFullSetTotal === 0) {
    return null;
  }

  return(
    <div>
      <Title>Property features</Title>
      <FeaturesContainer>
        { shouldShowMoreFeatures ? getFeatureSubset() : getFeatureFullSet() }
        {
          shouldDisplayReadMoreButton && <ShowButton onClick={() => setShouldShowMoreFeatures(!shouldShowMoreFeatures)}>
            {ButtonText}
            {shouldShowMoreFeatures ? <ChevronDown size="24" /> : <ChevronUp size="24" />}
          </ShowButton>
        }
      </FeaturesContainer>
    </div>
  );
};

export default PropertyFeatures;

