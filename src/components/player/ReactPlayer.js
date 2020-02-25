import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

export const ReactPlayerComponent = ({ url, playPause, _onEnded }) => {


  return (
    <ReactPlayer url={url} playing={playPause} onEnded={_onEnded} controls />
  );
};

ReactPlayerComponent.propTypes = {
  url: PropTypes.string.isRequired,
  playPause: PropTypes.bool.isRequired
};

