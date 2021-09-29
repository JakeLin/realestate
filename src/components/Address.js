import './Address.css';

function Address(props) {
  const addressDisplay = `${props.address.display.shortAddress}, ${props.address.suburb}`;
  return (
    <div className="address">
      {addressDisplay} 
    </div>
  );
}
  
export default Address;