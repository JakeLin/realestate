import { Wind, Bell, Arch, DoorOpen, Water, Dumbbell, PhoneCall, Group } from "@styled-icons/boxicons-regular";
import styled from "styled-components";

const Title = styled.div`
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

const PropertyFeatures = (props) => {
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
    }
  };

  return(
    <div>
      <Title>Property features</Title>
      <FeaturesContainer>
        {
          props.propertyFeatures.map((item) => {
            return <Feature>{getIcon(item.id)}<FeatureName>{item.displayLabel}</FeatureName></Feature>
          })
        }
      </FeaturesContainer>
    </div>
  )
};

export default PropertyFeatures;