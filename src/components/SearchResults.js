import { useState, useEffect } from 'react';
import styled from 'styled-components';

import ListingCard from './ListingCard';
import { getSearchResults as get } from '../mockBackend/fetch';

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
    <Container>
      <div>
        {listings.map((item) => {
          return <ListingCard listing={item} key={item.listing.id} />
        })}
      </div>
    </Container>
  );
}

export default SearchResults;
