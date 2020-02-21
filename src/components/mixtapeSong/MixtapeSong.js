import React from 'react';
import PropTypes from 'prop-types';

export default function mixtapeSong({ data }) {

  return (
    <span>
      {data.title}
      <button>Delete</button>
    </span>
  );
}

mixtapeSong.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    nativeSource: PropTypes.string.isRequired,
    nativeId: PropTypes.string.isRequired
  }).isRequired
};
