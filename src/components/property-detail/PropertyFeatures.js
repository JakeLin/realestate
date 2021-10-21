import { Wind, Bell, Arch, DoorOpen, Water, Dumbbell, PhoneCall, Group } from "@styled-icons/boxicons-regular";
import styled from "styled-components";

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const PropertyFeatures = (props) => {
  const getIcon = (id) => {
    switch (id) {
      case 'airConditioning':
        return <Wind size="32" />
      case 'alarmSystem':
        return <Bell size="32" />
      case 'balcony':
        return <Arch size="32" />
      case 'builtInRobes':
        return <DoorOpen size="32" />
      case 'dishwasher':
        return <Water size="32" />   
      case 'gym':
        return <Dumbbell size="32" />
      case 'intercom':
        return <PhoneCall size="32" />
      case 'outdoorEnt':
        return <Group size="32" />
    }
  };

  return(
    <div>
      <h2>Property features</h2>
      <FeaturesContainer>
        {
          props.propertyFeatures.map((item) => {
            return <div>{getIcon(item.id)} {item.displayLabel}</div>
          })
        }
      </FeaturesContainer>
    </div>
  )
};

export default PropertyFeatures;