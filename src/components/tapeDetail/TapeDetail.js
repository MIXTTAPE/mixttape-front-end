import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setPlaying, setAsActive, setActiveLoading, resetActiveLoading } from '../../actions/activeMixtapeActions';
import { getPlaying, getActiveMixtape, getActiveLoading } from '../../selectors/activeMixtapeSelectors';
// import { fakeMixtape as activeMixtape } from '../../../scratch/fake-mixtape';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { fetchTape } from '../../services/mixtapeApi';

export default function TapeDetail() {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const playing = useSelector(getPlaying);
  const loading = useSelector(getActiveLoading);
  const activeMixtape = useSelector(getActiveMixtape);
  
  useEffect(() => {
    dispatch(setAsActive(id));
  }, []);

  console.log(activeMixtape);

  if(loading) {
    return <h2> LOADING </h2>;
  }

  console.log(activeMixtape);

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
