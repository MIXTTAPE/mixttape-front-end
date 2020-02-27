import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserMixtapes, getUserLoading, isAuthenticated } from '../../selectors/userSelectors';
import { setPlaying, setAsActiveNoFetch, setSongIndex } from '../../actions/activeMixtapeActions';
import { FaPlayCircle } from 'react-icons/fa';
import { verifyUser, deleteUserTape } from '../../actions/userActions';

export default function TapeList() {
  const dispatch = useDispatch();
  const authenticated = useSelector(isAuthenticated);
  const mixtapes = useSelector(getUserMixtapes);
  const userLoading = useSelector(getUserLoading);

  useEffect(() => {
    dispatch(verifyUser());
  }, []);

  if(userLoading){
    return <h3>Loading!</h3>;
  }
  
  if(!authenticated) {
    return <Redirect to="/" />;
  }

  if(!mixtapes || mixtapes.length === 0) {
    return (
      <h2>Hmm.... looks like you don&apos;t have any mixtapes. Create one?</h2>
    );
  }
 
  const playMixtape = (clickedMixtape) => {
    dispatch(setAsActiveNoFetch(clickedMixtape));
    dispatch(setSongIndex(0));
    dispatch(setPlaying('play'));
  };

  const handleDelete = (mixtape) => {
    dispatch(deleteUserTape(mixtape._id));
  };

  const mixtapeCards = mixtapes.map((mixtape, i) => {
    return (
      <li className="mixtape-detail-container box-shadow" key={i}>
        <div className="mixtape-detail">
          <h2>{mixtape.mixtapeName}</h2>
          <h3>Total Tracks: {mixtape.songs.length}</h3>
          <p>created by: {mixtape.createdBy}</p>
          <FaPlayCircle className="play-pause" onClick={() => playMixtape(mixtape)} />
          <p><Link to={`/app/mixtape/${mixtape._id}`}>View Mixtape</Link></p>
        </div>
        <ul className="list-of-songs">
          {mixtape.songs.map((song, i) => {
            return (<li key={i} className="song">
              <img src={song.thumbnailUrl} />
              {song.title}
            </li>);
          })}
        </ul>
        <button onClick={() => handleDelete(mixtape)}>Delete</button>
      </li>
    );
  });
  
  return (
    <ul className="mixtapes-flex-container">
      {mixtapeCards}
    </ul>
  );
}
