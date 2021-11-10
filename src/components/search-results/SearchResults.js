import { useState, useEffect } from 'react';
import styled from 'styled-components';

import PropertyCard from './property-card/PropertyCard';
import { getSearchResults as get } from '../../mockBackend/fetch';

const Container = styled.div`
  background-color: #E5E5E5;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const SearchResults = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    get().then((response) => {
      setListings(response.data);
    });
  }, []);

  return (
    <div>
      <Container>
        <div>
          {
            listings.map((item) => {
              return <PropertyCard listing={item} key={item.listing.id} />
            })
          }
        </div>
      </Container>
    </div>
  );
}

export default SearchResults;
