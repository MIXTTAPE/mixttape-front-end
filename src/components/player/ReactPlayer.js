import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

export const ReactPlayerComponent = ({ url, playPause }) => {
  console.log(playPause);
  return (
    <ReactPlayer url={url} playing={playPause} />
  );
};

ReactPlayerComponent.propTypes = {
  url: PropTypes.string.isRequired,
  playPause: PropTypes.bool.isRequired
};

