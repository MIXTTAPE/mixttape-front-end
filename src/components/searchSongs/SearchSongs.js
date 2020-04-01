import React, { useState } from 'react';
import YoutubeSearchResultSection from '../searchResultSection/YoutubeSearchResultSection.js';
import SoundcloudSearchResultSection from '../searchResultSection/SoundcloudSearchResultSection.js';
import masterApiCall from '../../services/masterApiCall.js';

export default function SearchSongs() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  let resultSection;
  if(results.length !== 0){
    resultSection = [
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
        <input className="margin-right-small box-shadow" type='text' value={searchQuery} placeholder='Search for music' onChange={handleChange} />
        <button className="button-primary box-shadow">Search</button>
      </form>
      <ul className="results-section">
        {resultSection ? resultSection : 'Hmmm, you haven\'t searched for anything yet.'}
      </ul>
    </>
  );
}
