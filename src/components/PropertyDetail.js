import { useParams } from "react-router-dom";

const PropertyDetail = () => {
  const { propertyId } = useParams();
  return (
    <div>
      this is property detail page and the id is {propertyId}
    </div>
  )
};

export default PropertyDetail;