import { useState, useEffect } from 'react';

import './App.css';
import ListingCard from './components/ListingCard';
import { get } from './mockBackend/fetch';

function App() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    get().then((response) => {
      setListings(response.data);
    });
  }, []);

  console.log(listings);
  return (
    <div className="App">
      <div>
        {listings.map((item) => {
          return <ListingCard listing={item} key={item.listing.id} />
        })}
      </div>
    </div>
  );
}

export default App;
