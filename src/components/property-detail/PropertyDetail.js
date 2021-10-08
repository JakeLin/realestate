import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getPropertyDetail as get } from '../../mockBackend/fetch';


const PropertyDetail = () => {
  const { propertyId } = useParams();
  
  const [listing, setListing] = useState(null);
  useEffect(() => {
    get(propertyId).then((response) => {
      setListing(response.data);
    });
  }, [propertyId]);

  if (listing === null) {
    return null;
  }

  return (
    <div>
      this is property detail page and the id is {listing.listing.id}
    </div>
  )
};

export default PropertyDetail;