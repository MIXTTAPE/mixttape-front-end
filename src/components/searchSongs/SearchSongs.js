import React, { useState } from 'react';
import SearchResultSection from '../searchResultSection/SearchResultSection.js';
import { fakeSearchResults as fakeYoutubeResults } from '../../../scratch/fake-search-results.js';
import masterApiCall from '../../services/masterApiCall.js';

export default function SearchSongs() {
  //default state will be deleted once fetches are implemented
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  //Some fetch to hit all of the search APIs
  //Need to do in a promise.all
  //Result will be an array of results from each source

  //for each source of search results, create a component with props.
  //prop is the raw search result from a source.
  //If a source didn't return any results, filter it out.
  // console.log('results that will be rendered: ', results);

  const resultSections = results.map((section, i) => {
    if(Object.entries(section).length !== 0) {
      return (
        <li key={i}>
          <SearchResultSection results={section} />
        </li>
      );
    } else return;
  }).filter(item => !!item);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    masterApiCall(searchQuery)
      .then(res => {
        console.log(res);
        setResults(res);
      });
  };

  const handleChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  return (
    <>
      <h3>This is the Song Search Section</h3>
      <h4>It has a search form</h4>
      <form onSubmit={handleSearchSubmit}>
        <input type='text' value={searchQuery} placeholder='Search for music' onChange={handleChange} />
        <button>Search</button>
      </form>
      <ul>
        {resultSections}
      </ul>
    </>
  );
}
