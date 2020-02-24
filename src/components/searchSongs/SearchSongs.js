import React, { useState } from 'react';
import YoutubeSearchResultSection from '../searchResultSection/YoutubeSearchResultSection.js';
import SoundcloudSearchResultSection from '../searchResultSection/SoundcloudSearchResultSection.js';
import masterApiCall from '../../services/masterApiCall.js';

export default function SearchSongs() {
  //default state will be deleted once fetches are implemented
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  let resultSections;
  if(results.length !== 0){
    resultSections = [
      <li key={1}><SoundcloudSearchResultSection results={results[0]}/></li>,
      <li key={2}><YoutubeSearchResultSection results={results[1]}/></li>
    ];
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setResults([]);
    masterApiCall(searchQuery)
      .then(res => {
        setResults(res);
      });
  };

  const handleChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  return (
    <>
      <h2>Search for Music</h2>
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
