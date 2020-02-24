import React, { useState, useEffect } from 'react';
import SearchResultSectionItem from '../searchResultSectionItem/SearchResultSectionItem.js';
import PropTypes from 'prop-types';

export default function SoundcloudSearchResultSection({ results }) {
  const [simplifiedResults, setSimplifiedResults] = useState([]); 
  
  const songArray = results.items;
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
    <li key={i}>
      <SearchResultSectionItem data={item} />
    </li>
  ));

  return (
    <>
      <ul>
        <h4>This is the result for soundcloud</h4>
        {resultItems}
        <p>Each search result should be demoable</p>
        <p>Should be able to add to the Edit section</p>
      </ul>
    </>
  );
}

SoundcloudSearchResultSection.propTypes = {
  results: PropTypes.object.isRequired
};
