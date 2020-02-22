import React, { useState, useEffect } from 'react';
import SearchResultSectionItem from '../searchResultSectionItem/SearchResultSectionItem.js';
import PropTypes from 'prop-types';

export default function YoutubeSearchResultSection({ results }) {
  const [simplifiedResults, setSimplifiedResults] = useState([]); 

  let songArray;
  if(results.kind === 'youtube#searchListResponse') {
    songArray = results.items;
    results.nativeSource = 'youtube';
  } else if(results.kind === 'soundcloud') {
    songArray = results.items;
    results.nativeSource = 'soundcloud';
  }

  useEffect(() => {
    setSimplifiedResults(songArray.map(result => ({
      nativeId: result.id.videoId,
      nativeSource: results.nativeSource,
      title: result.snippet.title
    })));
  }, []);

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
