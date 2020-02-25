import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

export const ReactPlayerComponent = ({ url, playPause, nextSong, volume }) => {


  return (
    <ReactPlayer url={url} playing={playPause} onEnded={nextSong} controls volume={volume} />
  );
};

ReactPlayerComponent.propTypes = {
  url: PropTypes.string.isRequired,
  playPause: PropTypes.bool.isRequired
};

