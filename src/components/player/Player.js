import React, { useState, useEffect } from 'react';
import { ReactPlayerComponent } from './ReactPlayer';
import { fakeMixtape } from '../../../scratch/fake-mixtape';
import { getPlaying } from '../../selectors/activeMixtapeSelectors';
import { FaPlayCircle, FaPauseCircle, FaForward, FaVolumeUp } from 'react-icons/fa';

export default function Player() {

  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState('Nothing Playing');
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [mixtape, setMixtape] = useState(fakeMixtape);
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentVolume, setCurrentVolume] = useState(1);

  useEffect(() => {
    //PUT HERE: use the setMixtape hook to set the activeMixtape to mixtape
    buildUrl(mixtape.songs[currentSongIndex]);
    setCurrentSong(mixtape.songs[currentSongIndex]);
  }, [currentSongIndex]);

  const buildUrl = (song) => {
    if(song.nativeSource === 'youtube') {
      setCurrentUrl(`https://www.youtube.com/watch?v=${song.nativeId}`);
    }
    if(song.nativeSource === 'soundcloud') {
      setCurrentUrl(`https://api.soundcloud.com/tracks/${song.nativeId}`);
    }
  };

  const playPause = () => {
    setPlaying(!playing);
  };

  const nextSong = () => {
    if(currentSongIndex === mixtape.songs.length - 1) {
      setCurrentSongIndex(0);
      setPlaying(false);
      return;
    }
    setCurrentSongIndex(currentSongIndex + 1);
  };

  const volumeControl = ({ target }) => {
    setCurrentVolume(target.value);
  };


  return (
    <>
      <div style={{ display: 'none' }}>
        <ReactPlayerComponent url={currentUrl} playPause={playing} nextSong={nextSong} volume={currentVolume}/>
      </div>
      <footer className="player-component">
        <div className="player-container">
          <div className="currently-playing">
            <img className="margin-right-small current-song-thumb" src={currentSong.thumbnailUrl} />
            <p className="track-title">{currentSong.title}</p>
          </div>
          <div className="player-controls">
            <button onClick={() => playPause()} className="play-pause-button margin-right-small">{playing ? <FaPauseCircle /> : <FaPlayCircle />}</button>
            <button onClick={() => nextSong()} className="next-track-button"><FaForward /></button>
          </div>
          <div className="volume-controls">
            <FaVolumeUp className="margin-right-small" />
            <input onChange={(event) => volumeControl(event)} className="volume-slider" type="range" id="volume" name="volume"
              min="0" max="1" step='0.01' />
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
