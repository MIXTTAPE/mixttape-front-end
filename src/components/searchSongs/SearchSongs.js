import React, { useState } from 'react';
import YoutubeSearchResultSection from '../searchResultSection/YoutubeSearchResultSection.js';
import SoundcloudSearchResultSection from '../searchResultSection/SoundcloudSearchResultSection.js';
import { fakeSearchResults as fakeYoutubeResults } from '../../../scratch/fake-search-results.js';
import masterApiCall from '../../services/masterApiCall.js';

export default function SearchSongs() {
  //default state will be deleted once fetches are implemented
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  
  // const resultSections = results.map((section, i) => {
  //   console.log('section result', section);
  //   const searchResultKey = [
  //     SoundcloudSearchResultSection,
  //     YoutubeSearchResultSection
  //   ];
    
  //   if(Object.entries(section).length !== 0) {
  //     const Component = searchResultKey[i];
  //     return (
  //       <li key={i}>
  //         <Component results={section}/>
  //       </li>
  //     );
  //   } else return;
  // }).filter(item => !!item);

  let resultSections;
  if(results.length !== 0){
    resultSections = [
      <li key={1}><SoundcloudSearchResultSection results={results[0]}/></li>,
      <li key={2}><YoutubeSearchResultSection results={results[1]}/></li>
    ];
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    masterApiCall(searchQuery)
      .then(res => {
        console.log('api master results', res);
        setResults(res);
      });
  };

  const handleChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  console.log('resultSectinos: ', results);

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
