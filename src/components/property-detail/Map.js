import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';

const StyledMapContainer = styled(MapContainer)`
  height: 230px;
`;

const Map = (props) => {
  const latlon = [props.mapAddress.geocode.latitude, props.mapAddress.geocode.longitude];

  return(
    <StyledMapContainer center={latlon} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latlon}>
        <Popup>
          {props.mapAddress.fullAddress}
        </Popup>
      </Marker>
    </StyledMapContainer>
  ); 
};

export default Map;