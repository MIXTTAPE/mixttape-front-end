import React, { useState, useEffect } from 'react';
import { ReactPlayerComponent } from './ReactPlayer';
import { getPlaying, getActiveMixtape, getSongIndex } from '../../selectors/activeMixtapeSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlayCircle, FaPauseCircle, FaForward, FaVolumeUp } from 'react-icons/fa';
import { setPlaying, setSongIndex } from '../../actions/activeMixtapeActions';

export default function Player() {
  const dispatch = useDispatch();
  const playing = useSelector(getPlaying);
  const activeMixtape = useSelector(getActiveMixtape);
  const currentSongIndex = useSelector(getSongIndex);

  const [currentSong, setCurrentSong] = useState('Nothing Playing');
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentVolume, setCurrentVolume] = useState(1);
  
  useEffect(() => {
    if(activeMixtape.songs.length > 0) {
      buildUrl(activeMixtape.songs[currentSongIndex]);
      setCurrentSong(activeMixtape.songs[currentSongIndex]);
    }
  }, [activeMixtape, currentSongIndex]);

  const buildUrl = (song) => {
    if(song.nativeSource === 'youtube') {
      setCurrentUrl(`https://www.youtube.com/watch?v=${song.nativeId}`);
    }
    if(song.nativeSource === 'soundcloud') {
      setCurrentUrl(`https://api.soundcloud.com/tracks/${song.nativeId}`);
    }
    if(song.nativeSource === 'voicememo') {
      setCurrentUrl(`https://mixt-voice-recordings.s3.amazonaws.com/${song.nativeId}`);
    }
  };

  const playPause = (action) => {
    dispatch(setPlaying(action));
  };

  const nextSong = () => {
    if(currentSongIndex === activeMixtape.songs.length - 1) {
      dispatch(setSongIndex(0));
      playPause('stop');
      return;
    }
    dispatch(setSongIndex(currentSongIndex + 1));
  };

  const volumeControl = ({ target }) => {
    setCurrentVolume(target.value);
  };

  const renderSongTitle = (songtitle) => {
    if(songtitle.length < 30) return songtitle;
    return `${songtitle.substr(0, 30)}...`;
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
            <p className="track-title">{currentSong.title ? renderSongTitle(currentSong.title) : ''}</p>
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
      </footer>
    </>
  );
}
