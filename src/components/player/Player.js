import React from 'react';
import { FaPlayCircle, FaForward, FaVolumeUp } from 'react-icons/fa';

export default function Player() {

  return (
    <footer className="player-component">
      <div className="player-container">
        <div className="currently-playing">
          <img className="margin-right-small" src="thu" />
          <p className="track-title">Track Title</p>
        </div>
        <div className="player-controls">
          <button className="play-pause-button margin-right-small"><FaPlayCircle /></button>
          <button className="next-track-button"><FaForward /></button>
        </div>
        <div className="volume-controls">
          <FaVolumeUp className="margin-right-small" />
          <input className="volume-slider" type="range" id="volume" name="volume"
            min="0" max="11" />
        </div>
      </div>
      {/* <p>it needs a display for artist and title</p>
      <p>it needs a place for a thumbnail?</p>
      <p>it needs a volumer control</p>
      <p>it needs a buy link?</p>
      <p>it needs a source logo?</p>
      <p>it needs current time in song out of total time</p>
      <p>it needs a current song in playlist out of total songs</p> */}
    </footer>
  );
}
