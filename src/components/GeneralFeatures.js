import './GeneralFeatures.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faCar } from '@fortawesome/free-solid-svg-icons'

const Bed = (props) => {
  if (props.bedNumber === 0) {
    return null;
  }

  return (
    <span className="feature">
      <FontAwesomeIcon icon={faBed} className="feature-icon" />
      {props.bedNumber}
    </span>
  );
};

const Bath = (props) => {
  if (props.bathNumber === 0) {
    return null;
  }
  return (
    <span className="feature">
      <FontAwesomeIcon icon={faBath} className="feature-icon" />
      {props.bathNumber}
    </span>
  );
};

const Car = (props) => {
  if (props.carNumber === 0) {
    return null;
  }

  return (
    <span className="feature">
      <FontAwesomeIcon icon={faCar} className="feature-icon" />
      {props.carNumber}
    </span>
  );
};

const GeneralFeatures = (props) => {
    return (
      <div className="general-features">
        <Bed bedNumber={props.generalFeatures.bedrooms.value} />
        <Bath bathNumber={props.generalFeatures.bathrooms.value} />
        <Car carNumber={props.generalFeatures.parkingSpaces.value} />
        
      </div>
    );
};
  
export default GeneralFeatures;