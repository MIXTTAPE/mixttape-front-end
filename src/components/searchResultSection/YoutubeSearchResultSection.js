import React, { useState, useEffect } from 'react';
import SearchResultSectionItem from '../searchResultSectionItem/SearchResultSectionItem.js';
import PropTypes from 'prop-types';

export default function YoutubeSearchResultSection({ results }) {
  const [simplifiedResults, setSimplifiedResults] = useState([]); 

  const songArray = results.items;

  useEffect(() => {
    setSimplifiedResults(songArray.map(result => ({
      nativeId: result.id.videoId,
      nativeSource: 'youtube',
      title: result.snippet.title,
      buyLink: null,
      thumbnailUrl: result.snippet.thumbnails.medium.url,
      isMemo: false
    })));
  }, []);

  const resultItems = simplifiedResults.map((item, i) => (
    <li key={i} className="results-list-item">
      <SearchResultSectionItem data={item} />
    </li>
  ));

  return (
    <>
      <h3>Youtube Results</h3>
      <ul className="search-results">
        {resultItems}
      </ul>
    </>
  );
}

YoutubeSearchResultSection.propTypes = {
  results: PropTypes.object.isRequired
};
