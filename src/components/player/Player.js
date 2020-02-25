import React, { useState, useEffect } from 'react';
import { ReactPlayerComponent } from './ReactPlayer';
import { fakeMixtape } from '../../../scratch/fake-mixtape';
import { FaPlayCircle, FaForward, FaVolumeUp } from 'react-icons/fa';

export default function Player() {

  const [playing, setPlaying] = useState(true);
  const [currentSong, setCurrentSong] = useState('Nothing Playing');
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [mixtape, setMixtape] = useState(fakeMixtape);
  const [currentUrl, setCurrentUrl] = useState('');

  const buildUrl = (song) => {
    if(song.nativeSource === 'youtube') {
      setCurrentUrl(`https://www.youtube.com/watch?v=${song.nativeId}`);
    }
    if(song.nativeSource === 'soundcloud') {
      setCurrentUrl(`https://api.soundcloud.com/tracks/${song.nativeId}`);
    }
  };

  useEffect(() => {
    buildUrl(mixtape.songs[currentSongIndex]);
    setCurrentSong(mixtape.songs[currentSongIndex]);
  }, [currentSongIndex]);

  const playPause = () => {
    setPlaying(playing === true ? false : true);
  };

  const _onEnded = () => {
    setCurrentSongIndex(currentSongIndex + 1);

  };


  return (
    <>
      <ReactPlayerComponent url={currentUrl} playPause={playing} _onEnded={_onEnded}/>
      <footer className="player-component">
        <div className="player-container">
          <div className="currently-playing">
            <img className="margin-right-small" src="thu" />
            <p className="track-title">{currentSong.title}</p>
          </div>
          <div className="player-controls">
            <button onClick={() => playPause()} className="play-pause-button margin-right-small"><FaPlayCircle /></button>
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
    </>
  );
}
