// Copied from https://www.codecademy.com/courses/react-101/lessons/the-effect-hook/exercises/fetch-data
//
// You don't need to look at this, but you can if you want!

// This module exports fake data fetching functionality.
// In a real app, this would grab data from the internet, but
// this module just waits a little bit before responding.

import searchResultsData from "./searchResultsData";
import propertyDetailData from "./propertyDetailData";

const getSearchResults = () => {
  const delay = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = { status: 200, data: searchResultsData };
      resolve(response);
    }, delay);
  });
};

const getPropertyDetail = () => {
  const delay = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = { status: 200, data: propertyDetailData };
      resolve(response);
    }, delay);
  });
};

export { getSearchResults, getPropertyDetail };
