import './Price.css';

const Price = (props) => {
  const displayPrice = props.price === undefined ? 'Contact Agent' : props.price.display;
  return (
    <div className="price">
      {displayPrice}
    </div>
  );
};
  
export default Price;