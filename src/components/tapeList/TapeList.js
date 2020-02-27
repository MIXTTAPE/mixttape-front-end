import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserMixtapes, getUserLoading, getUser } from '../../selectors/userSelectors';
import { setPlaying, setAsActiveNoFetch } from '../../actions/activeMixtapeActions';
import { getPlaying } from '../../selectors/activeMixtapeSelectors';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { verifyUser } from '../../actions/userActions';

export default function TapeList() {
  const dispatch = useDispatch();
  const mixtapes = useSelector(getUserMixtapes);
  const userLoading = useSelector(getUserLoading);
  const user = useSelector(getUser);
  // const mixtapes = fakeMixtapes;

  useEffect(() => {
    dispatch(verifyUser());
  }, []);

  if(userLoading){
    return <h3>Loading!</h3>;
  } else if(user.username === 'none') {
    // history.replace('/');
    return <Redirect to='/' />;
  }

  if(mixtapes.length === 0) {
    return (
      <h2>Hmm.... looks like you don&apos;t have any mixtapes. Create one?</h2>
    );
  }

  const playMixtape = (clickedMixtape) => {
    dispatch(setAsActiveNoFetch(clickedMixtape));
    dispatch(setPlaying());
  };

  const mixtapeCards = mixtapes.map((mixtape, i) => {
    return (
      <li className="mixtape-detail-container box-shadow" key={i}>
        <div className="mixtape-detail">
          <h2>{mixtape.mixtapeName}</h2>
          <h3>Total Tracks: {mixtape.songs.length}</h3>
          <p>created by: {mixtape.createdBy}</p>
          <FaPauseCircle className="play-pause" onClick={() => dispatch(setPlaying())} />
          <FaPlayCircle className="play-pause" onClick={() => playMixtape(mixtape)} />
          <p><Link to={`/app/mixtape/${mixtape._id}`}>View Mixtape</Link></p>
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
