import React, { useState, useEffect } from 'react';
import SearchResultSectionItem from '../searchResultSectionItem/SearchResultSectionItem.js';
import PropTypes from 'prop-types';

export default function SoundcloudSearchResultSection({ results }) {
  const [simplifiedResults, setSimplifiedResults] = useState([]); 
  
  const songArray = results.items[0].collection;
  results.nativeSource = 'soundcloud';

  useEffect(() => {
    setSimplifiedResults(songArray.map(result => ({
      nativeId: result.id.toString(),
      nativeSource: results.nativeSource,
      title: result.title,
      buyLink: result.purchase_url,
      thumbnailUrl: result.artwork_url,
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
      <h3>SoundCloud Results</h3>
      <ul className="search-results">
        {resultItems}
      </ul>
    </>
  );
}

SoundcloudSearchResultSection.propTypes = {
  results: PropTypes.object.isRequired
};
