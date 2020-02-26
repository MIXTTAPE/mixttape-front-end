import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserMixtapes } from '../../selectors/userSelectors';
import { setPlaying } from '../../actions/activeMixtapeActions';
import { getPlaying } from '../../selectors/activeMixtapeSelectors';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

export default function TapeList() {
  
  const dispatch = useDispatch();
  const playing = useSelector(getPlaying);
  const mixtapes = useSelector(getUserMixtapes);

  if(mixtapes.length === 0) {
    return (
      <h2>Hmm.... looks like you don`&apos;`t have any mixtapes. Create one?</h2>
    );
  }

  const mixtapeCards = mixtapes.map(mixtape => {
    return (
      <li className="mixtape-detail-container box-shadow" key={mixtape._id}>
        <div className="mixtape-detail">
          <h2>{mixtape.mixtapeName}</h2>
          <h3>Total Tracks: {mixtape.songs.length}</h3>
          <p>created by: {mixtape.createdBy}</p>
          {playing ? <FaPauseCircle className="play-pause" onClick={() => dispatch(setPlaying())} /> : <FaPlayCircle className="play-pause" onClick={() => dispatch(setPlaying())} />}
        </div>
        <ul className="list-of-songs">
          {mixtape.songs.map((song) => {
            return (<li key={song.nativeId} className="song">
              <img src={song.thumbnailUrl} />
              {song.title}
            </li>);
          })}
        </ul>
      </li>
    );
  });

  return (
    <ul className="mixtapes-flex-container">
      {mixtapeCards}
    </ul>
  );
}
