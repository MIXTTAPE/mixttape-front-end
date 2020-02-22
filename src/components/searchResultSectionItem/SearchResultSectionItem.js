import React from 'react';
import PropTypes, { string, number } from 'prop-types';

export default function SearchResultSectionItem({ data }) {

  return (
    <span>
      {data.title}
      <button>+</button>
      <button>Demo</button>
    </span>
  );
}

SearchResultSectionItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    nativeSource: PropTypes.string.isRequired,
    nativeId: PropTypes.oneOfType([string, number])
  }).isRequired
};
