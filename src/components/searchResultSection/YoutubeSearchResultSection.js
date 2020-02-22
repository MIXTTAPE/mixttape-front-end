import React, { useState, useEffect } from 'react';
import SearchResultSectionItem from '../searchResultSectionItem/SearchResultSectionItem.js';
import PropTypes from 'prop-types';

export default function YoutubeSearchResultSection({ results }) {
  const [simplifiedResults, setSimplifiedResults] = useState([]); 

  console.log('raw results: ', results);
  
  //check source of search results to munge songs correctly
  //add field to easily specify source

  
  let songArray;
  if(results.kind === 'youtube#searchListResponse') {
    songArray = results.items;
    results.nativeSource = 'youtube';
  } else if(results.kind === 'soundcloud') {
    songArray = results.items;
    results.nativeSource = 'soundcloud';
  }

  // console.log('raw songs: ', songArray);

  //save an array of simplified results to state
  //NOTE: IF IT TURNS OUT DIFFERENT APIS RETURN DIFFERENTLY FORMATTED RESULTS,
  //WE MAY NEED TO MAKE A SearchResultSection COMPONENT FOR EACH API.
  useEffect(() => {
    setSimplifiedResults(songArray.map(result => ({
      nativeId: result.id.videoId,
      nativeSource: results.nativeSource,
      title: result.snippet.title
    })));
  }, []);

  // console.log('simplified results: ', simplifiedResults);

  //Create an item for each simplified result
  const resultItems = simplifiedResults.map((item, i) => (
    <li key={i}>
      <SearchResultSectionItem data={item} />
    </li>
  ));

  return (
    <>
      <ul>
        <h4>This is an example of a search result section for youtube</h4>
        {resultItems}
        <p>Each search result should be demoable</p>
        <p>Should be able to add to the Edit section</p>
      </ul>
    </>
  );
}

YoutubeSearchResultSection.propTypes = {
  results: PropTypes.object.isRequired
};
