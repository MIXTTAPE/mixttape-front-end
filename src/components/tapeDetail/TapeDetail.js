import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setPlaying } from '../../actions/activeMixtapeActions';
import { getPlaying } from '../../selectors/activeMixtapeSelectors';
import { fakeMixtape as activeMixtape } from '../../../scratch/fake-mixtape';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

export default function TapeDetail() {
  
  const { id } = useParams();

  useEffect(() => {
    // on load make a fetch call to render the correct playlist
  });

  const dispatch = useDispatch();
  const playing = useSelector(getPlaying);

  const songs = activeMixtape.songs.map((song) => {
    return (<li key={song.nativeId} className="song">
      <img src={song.thumbnailUrl} />
      {song.title}
    </li>);
  });

  return (
    <div className="mixtape-flex-container">
      <div className="mixtape-detail-container box-shadow">
        <div className="mixtape-detail">
          <h2>{activeMixtape.mixtapeName}</h2>
          <h3>Total Tracks: {activeMixtape.songs.length}</h3>
          <p>created by: {activeMixtape.createdBy}</p>
          {playing ? <FaPauseCircle className="play-pause" onClick={() => dispatch(setPlaying())} /> : <FaPlayCircle className="play-pause" onClick={() => dispatch(setPlaying())} />}
        </div>
        <ul className="list-of-songs">
          {songs}
        </ul>
      </div>
    </div>
  );
}
